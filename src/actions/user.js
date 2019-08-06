import { getUsers, setLogin } from "../data/api"
import { showLoading, hideLoading } from "react-redux-loading-bar"

export const SET_AUTHED_USER = "SET_AUTHED_USER"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const SET_USER_QUESTION = "SET_USER_QUESTION"
export const LOGOUT = "LOGOUT"

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    payload: id
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function getAllUsers(users) {
  return {
    type: GET_ALL_USERS,
    payload: users
  }
}

export function addUserQuestion({ idUser, idQuestion }) {
  return {
    type: SET_USER_QUESTION,
    payload: { idQuestion, idUser }
  }
}

export function login(id) {
  return dispatch => {
    dispatch(showLoading())
    return setLogin(id)
      .then(id => dispatch(setAuthedUser(id)))
      .then(() => dispatch(hideLoading()))
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
