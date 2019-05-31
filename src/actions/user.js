import { getUsers } from "../data/api"
import { showLoading, hideLoading } from "react-redux-loading-bar"

export const SET_AUTHED_USER = "SET_AUTHED_USER"
export const GET_ALL_USERS = "GET_ALL_USERS"

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    payload: id
  }
}

export function getAllUsers(users) {
  console.log("====================================")
  console.log(users)
  console.log("====================================")
  return {
    type: GET_ALL_USERS,
    payload: users
  }
}

export function getAllUser() {
  return dispatch => {
    dispatch(showLoading())
    return getUsers()
      .then(users => dispatch(getAllUsers(users)))
      .then(() => dispatch(hideLoading()))
  }
}
