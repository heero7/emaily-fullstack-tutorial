// require sendGrid module
const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

// Mailer class

class Mailer extends helper.Mail {
  /**
   * Create an instance of Mailer with these fields, a subject
   * recipient, and a body of the email. These fields are
   * necessary for creating emails.
   *
   * @param {*} Object : Require an object that has a subject & recipients field
   * @param {*} content : An html string that represents the body of the email
   */
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("no-reply@emaily.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  /*
        Format all the recipients for sendgrid.
        Map through all the recipients passed through
        the variable 'recipients'
     */
  formatAddresses(recipients) {
    if (recipients) {
      return recipients.map(({ email }) => {
        return new helper.Email(email);
      });
    }
  }

  /*
        Add ability to track if a recipient
        has clicked on the email once.
    */
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
        personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
        method: "POST",
        path: "/v3/mail/send",
        body: this.toJSON()
    });
    let response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
