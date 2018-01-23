const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

module.exports = app => {
    // check if user is logged in
    app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
        // check if user has enough credits
        
    });
}