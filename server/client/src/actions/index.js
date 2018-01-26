import axios from "axios";

import { FETCH_USER } from "./types";

/**
 * Get the currently logged in user
 * Call to the /api/current_user
 * this gets the data tied to the user object
 * 
 * We give the reducer, res.data - the user object
 */
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

/**
 * Update the USER model, to give the currently logged
 * user credits. Send a post request to /api/stripe.
 * The response will be a user object updated with 
 * credits
 * 
 * @param {*} token : This token is from the Stripe
 * API. 
 */
export const handleToken = (token) => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({type: FETCH_USER, payload: res.data})
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys"); // navigate back to surveys
  dispatch({ type: FETCH_USER, payload: res.data });
  return {
    type: "submit_survey"
  }
};