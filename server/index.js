// import Express library
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser"); // allow reqests, to be parsed in express application
const keys = require("./config/keys");
// import the models for mongoDB
require("./models/User");
// import passport file, but doesn't return anything. Just simple require statement
require("./services/passport");

// connect to mongoDB
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// import authRoutes.js
// pass in app into authRoutes, for reference to app
require("./routes/authRoutes")(app);
// import billingRoutes.js
// pass in app into billingRoutes, for reference to app
require("./routes/billingRoutes")(app);

/*
  Only in production:
*/
if (process.env.NODE_ENV === 'production') {
  // Express serves production assets: i.e main.js or main.css
  app.use(express.static("client/build"));

  // Express serves index.html, if an unknown route to express occurs
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// dynamically listen what port we need to set it to
// if in a development environment, assign it use 5000
const PORT = process.env.PORT || 5000;

//listening on PORT: 5000
app.listen(PORT);
