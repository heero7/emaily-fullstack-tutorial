// import Express library
const express = require('express');
// require passport
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // required for Google OAuth


const app = express();

passport.use(new GoogleStrategy());


// dynamically listen what port we need to set it to
// if in a development environment, assign it use 5000
const PORT = process.env.PORT || 5000;

//listening on PORT: 5000
app.listen(PORT);