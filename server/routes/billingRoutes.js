/**
 * Handle Routes for billing
 * using Stripe API
 */

// import keys
const keys = require("../config/keys");
// import stripe
const stripe = require("stripe")(keys.stripeSecretKey);
// check if user is logged in custom middleware
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  // POST request route
  /*
    Note: requireLogin is passed as a second
    parameter. This runs the function through 
    a middleware to check if a user is logged in.

    !! requireLogin() is not called because we don't want
    to immediately invoke the requireLogin function. Instead
    allow express to invoke when necessary
   */
  app.post("/api/stripe", requireLogin, async (req, res) => {
    /*
        Check if a user is logged
        before there is an attempt to bill 
        a credit card
    */
    if (!req.user) {
      return res.status(401).send({ error: "You must log in!" });
    }

    const charge = await stripe.charges.create({
      amount: 500, // charge amount
      currency: "usd", // currency type
      description: "Credits for Emaily account",
      source: req.body.id
    });
    // Get the currently logged user and add 5 credits to credits property
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user); // respond with updated user
  });
};
