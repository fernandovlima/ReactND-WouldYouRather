export const SET_AUTHED_USER = "SET_AUTHED_USER"
export const GET_ALL_USERS = "GET_ALL_USERS"

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    payload: id
  }
}

export function getAllUsers(users) {
  return {
    type: GET_ALL_USERS,
    payload: users
  }
}
