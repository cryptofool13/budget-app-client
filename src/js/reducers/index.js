import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./auth";
import expenses from "./expesnses";
import funds from "./funds";

export default combineReducers({
  funds,
  expenses,
  auth,
  form: formReducer
});
