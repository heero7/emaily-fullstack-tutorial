// require passport
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy; // required for Google OAuth

// Google OAuth key
const keys = require("../config/keys");

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback" // this is the url to send user, after permission has been granted
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(
          `AT: ${accessToken} RT: ${refreshToken} Profile ${JSON.stringify(
            profile
          )} Done ${done}`
        );
      }
    )
  );
