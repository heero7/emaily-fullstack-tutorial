const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

// survey template
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

// include mailer helper
const Mailer = require("../services/Mailer");

// to make sure you can test
const Survey = mongoose.model("surveys");

module.exports = app => {
  // check if user is logged in
  // then check if user has enough credits
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    //Send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
