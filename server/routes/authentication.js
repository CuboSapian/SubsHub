const express = require('express');
const User = require("../models/Credentials");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchUser');

const tempKi = 'SubsHub';

// ROUTE 1 : Create A New User @"/auth/createUser".

router.post('/createUser', [
  check('email').isEmail(),
  check('password').isLength({ min: 8 }),
  check('username').isLength({ min: 3 }),
], async (req, res) => {
  let success=false;
  //If errors found in validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success , error: "Sorry a user with same email already exists" })
    }
    user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).json({success,  error: "Sorry a user with same username already exists" })
    }

    // Password secured
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    
    user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: secPass,
    })

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, tempKi);
    success=true;
    res.json({ success , authtoken })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

})

// ROUTE 2 : User Login @/auth/login

router.post('/login', [
  check('email','Enter a valid email').isEmail(),
  check('password','Password cannot be blank').exists(),
], async (req, res) => {
let success=false;
  //If errors found in validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ error: errors });
  }

  const {email, password} =req.body;
  try {
    let user=await User.findOne({email});
    if(!user){
      return res.json({success , error: "Wrong Credentials, Please try again"});
    }
    const passwordCompare=await bcrypt.compare(password,user.password);
    if(!passwordCompare){
      return res.json({ success , error: "Wrong Credentials, Please try again"});
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, tempKi);
    success = true;
    res.json({ success , authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router