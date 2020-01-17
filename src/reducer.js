import { combineReducers } from "redux";
import newArticleReducer from "./components/main-page/reducer";

export default combineReducers({
  score: newArticleReducer
});
