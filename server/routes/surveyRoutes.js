const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
    // check if user is logged in
    app.post("/x/y", requireLogin, (req, res) => {
        // check if user has enough credits
        
    });
}