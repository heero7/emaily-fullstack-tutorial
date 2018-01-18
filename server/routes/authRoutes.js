// Route Handlers for Authorization
const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Home! The first page!");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // when the user wants to logout route
  app.get("/api/logout", (req, res) => {
    req.logout(); // delete cookie that is attached to login
    res.redirect("/"); // redirect to root route
  });

  // get the current user route
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
