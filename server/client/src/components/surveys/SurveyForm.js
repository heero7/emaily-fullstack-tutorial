import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
// helper from redux form
// Field : for rendering any type of html form
import { reduxForm, Field } from "redux-form"; // identical to connect in redux

// COMPONENTS
import SurveyField from "./SurveyField";

import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "email" }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          key={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link className="red btn-flat left white-text" to="/surveys">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
    const errors = {};

    errors.email = validateEmails(values.email || "");

    _.each(FIELDS, ({ name }) => {
        if (!values[name]) {
            errors[name] = "You must provide a value";
        }
    });

    

    return errors;
}

// only passes one parameter, for options
// Note: handleSubmit is given to us via reduxForm
export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
