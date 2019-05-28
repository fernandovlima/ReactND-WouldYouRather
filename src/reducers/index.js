import { combineReducers } from "redux"
//reducers
import questions from "./questions"
import user from "./user"

export default combineReducers({
  user,
  questions
})
