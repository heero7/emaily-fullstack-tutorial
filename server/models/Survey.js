const mongoose = require("mongoose");

const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema], // array containing list of strings
    yes: { type: Number, default: 0},
    no: { type: Number, default: 0 },
    // every Survey will link to a user. We are linking the id for this record
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model("surveys", surveySchema);