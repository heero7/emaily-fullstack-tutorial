import axios from "axios";

import { FETCH_USER } from "./types";

/**
 * Get the currently logged in user
 * Call to the /api/current_user
 * this gets the data tied to the user object
 */
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res });
};
