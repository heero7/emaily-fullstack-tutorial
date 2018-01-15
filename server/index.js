// import Express library
const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
// import the models for mongoDB
require('./models/User');
// import passport file, but doesn't return anything. Just simple require statement
require('./services/passport');


// connect to mongoDB 
mongoose.connect(keys.mongoURI, {useMongoClient: true});


const app = express();

// import authRoutes.js
// pass in app into authRoutes, for reference to app
require('./routes/authRoutes')(app);



// dynamically listen what port we need to set it to
// if in a development environment, assign it use 5000
const PORT = process.env.PORT || 5000;

//listening on PORT: 5000
app.listen(PORT);
