// require passport
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy; // required for Google OAuth
const mongoose = require('mongoose');

// Google OAuth key
const keys = require("../config/keys");

// bring in users model class
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => done(null, user))
});

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback" // this is the url to send user, after permission has been granted
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id})
        .then(existingUser => {
            if (existingUser) {
                // if existingUser exisits
                // we already have a record with the given profile ID
                done(null, existingUser); // pass in null, no errors occured. Then pass the currentUser
            } else {
                // we don't have arecord with this ID
                // create a new record
                new User({googleId: profile.id}).save()
                .then(user => done(null, user));
            }
        });
      }
    )
  );
