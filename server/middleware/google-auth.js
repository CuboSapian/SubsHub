const passport=require('passport')
require('dotenv').config({path: "./config/config.env"})
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(err, user);
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})


passport.deserializeUser((user,done)=>{
    done(null,user)
})