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
  app.post("/api/stripe", (req, res) => {});
};
