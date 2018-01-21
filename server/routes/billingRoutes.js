/**
 * Handle Routes for billing
 * using Stripe API
 */

// import keys
const keys = require("../config/keys");

// import stripe
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  // POST request route
  app.post("/api/stripe", async (req, res) => {
      const charge = await stripe.charges.create({
          amount: 500, // charge amount
          currency: 'usd', // currency type
          description: 'Credits for Emaily account',
          source: req.body.id        
      });
      // Get the currently logged user and add 5 credits to credits property
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user); // respond with updated user
  });
};
