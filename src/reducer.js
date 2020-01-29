import { combineReducers } from "redux";
import newArticleReducer from "../src/components/actions/reducer";

export default combineReducers({
  score: newArticleReducer
});
