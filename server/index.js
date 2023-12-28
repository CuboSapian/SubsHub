const connectToMongo = require('./db');
const express = require('express')
const session = require("express-session")
var cors = require('cors')
require('./middleware/google-auth')
const passport = require('passport')
// config file
require('dotenv').config({ path: "./config/config.env" })

const app = express()
const port = process.env.PORT

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectToMongo();

// express-session Middleware
app.use(session({
  secret: process.env.secretSession,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());



// Available Routes
app.use('/auth', require('./routes/authentication'))
app.use('/userDetail', require('./routes/ottcred'))
app.use('/plans', require('./routes/plan'))
app.use('/validity', require('./routes/validity'))
app.use('/payment', require('./routes/paymentRoute'))
app.get("/payment/getkey", (req, res) => res.status(200).json({ key: process.env.RAZORPAY_API_KEY }))

// Google OAuth2

// send
app.get('/auth/google',
  passport.authenticate('google', {
    scope:
      ['email', 'profile']
  }
  ));
// success or failure
app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
  }));
//success route
app.get('/auth/google/success', isLoggedIn, (req, res) => {
  res.json({ success: true , message: "Session made"})
});
// failure route
app.get('/auth/google/failure', isLoggedIn, (req, res) => {
  res.json({ success: false , message: "Internal Server Error"})
});
// logout
app.use('/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } else {
      res.json({ success: true , message: "Session destroyed" });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})