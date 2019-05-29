import { SET_AUTHED_USER, GET_ALL_USERS } from "../actions/user"

export default function user(state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        ...action.payload.id
      }
    case GET_ALL_USERS:
      return {
        ...state
      }
    default:
      return state
  }
}
