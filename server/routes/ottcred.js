const express = require('express');
const User = require("../models/userDetails.js");
const router = express.Router();
const { check, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchUser');

router.post('/saveCred', [
  check('email').isEmail(),
], fetchuser, async (req, res) => {
  let success = false;
  //If errors found in validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "Email Already Exists" })
    }
    // console.log(req);

    user = await User.findOne({ userID: req.user.id, platform: req.body.platform })

    if (user) {
      return res.status(400).json({ success, error: "Your account for this Platform already exists" })
    }

    user = await User.create({
      userID: req.user.id,
      email: req.body.email,
      platform: req.body.platform
    })

    success = true;
    res.json({ success })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

module.exports = router