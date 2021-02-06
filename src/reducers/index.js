import { combineReducers } from "redux";
import { personReducer } from "./person";
import { personsReducer } from "./persons";
import { showReducer } from "./showPerson";

export const reducers = combineReducers({
  personReducer:personReducer,
  personsReducer:personsReducer,
  showReducer:showReducer,
});
