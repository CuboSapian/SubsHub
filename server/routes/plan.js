const express = require('express');
const User = require("../models/Plans.js");
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post('/addPlan', [
    check('amount').isNumeric(),
    check('validity').isNumeric(),
], async (req, res) => {
    let success = false;
    //If errors found in validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        const chkSimilar = await User.findOne({platform: req.body.platform, validity: req.body.validity,amount: req.body.amount, type: req.body.type });
        if(chkSimilar)
        {
            return res.status(400).json({success , error: "Same Plan already Exists"})
        }
        const user = await User.create({
            platform: req.body.platform,
            validity: req.body.validity,
            amount: req.body.amount,
            type: req.body.type
        })

        success = true;
        res.json({ success })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

router.post('/fetchPlans', async (req, res) => {
    let success = false;

    try {
        let user = await User.find({platform: req.body.platform})
        success = true;
        res.json({ success , data: user })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

module.exports = router