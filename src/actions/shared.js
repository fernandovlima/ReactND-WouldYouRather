import { getInitialData } from "../data/api"
//action creators
import { getAllQuestions } from "../actions/questions"
import { setAuthedUser } from "../actions/user"
//loading bar
import { showLoading, hideLoading } from "react-redux-loading-bar"

const AUTHED_ID = "johndoe"

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData().then(({ questions }) => {
      dispatch(getAllQuestions(questions))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}
