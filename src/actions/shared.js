import { getInitialData } from "../data/api"
//action creators
import { getAllQuestions } from "../actions/questions"
import { getAllUsers } from "../actions/user"

//loading bar
import { showLoading, hideLoading } from "react-redux-loading-bar"

//

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(getAllQuestions(questions))
      dispatch(getAllUsers(users))
      //dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}
