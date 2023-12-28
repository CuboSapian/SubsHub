const express = require('express');
const User = require("../models/ValidityData");
const Plan = require("../models/Plans")
const router = express.Router();
const { check, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchUser');

// Route 1: Set Validity for current User and Platform

router.post('/setValidity',
    fetchuser, async (req, res) => {
        let success = false;
        var { data } = req.body;

        try {
            const itemsWithIds = data.map((item, index) => ({
                id: index + 1,
                value: item
            }));

            itemsWithIds.forEach(async item => {
                // console.log(item.value)
                const currentPlan = await Plan.findById(item.value);

                let currentDate = new Date()
                currentDate.setDate(currentDate.getDate() + currentPlan.validity)

                const chkSimilarity= await User.deleteMany({userID: req.user.id, platform: currentPlan.platform })
                // if(chkSimilarity)
                // {
                    // console.log("Deleted")
                // }
                let user = await User.create({
                    userID: req.user.id,
                    platform: currentPlan.platform,
                    expiryDate: currentDate
                })
            })
            success = true;
            res.json({ success })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// Route 2: Fetch Validity of a particular User
router.post('/fetchValidity',
    fetchuser, async (req, res) => {
        let success = false;

        try {
            const users = await User.find({ userID: req.user.id });
            res.json({ data: users });

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

module.exports = router