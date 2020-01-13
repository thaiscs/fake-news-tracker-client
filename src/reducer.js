import { combineReducers } from "redux";
import newArticleReducer from "./components/articles/reducer";

export default combineReducers({
  score: newArticleReducer
});
