import { combineReducers } from "redux"
//reducers
import questions from "./questions"
import user from "./user"
//loading bar
import { loadingBarReducer } from "react-redux-loading-bar"

export default combineReducers({
  user,
  questions,
  loadingBarReducer
})
