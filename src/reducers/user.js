import { SET_AUTHED_USER, GET_ALL_USERS } from "../actions/user"

export default function user(state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      console.log("TESTE DE STATE: ", action)
      return {
        ...state,
        authedUser: action.payload
      }
    case GET_ALL_USERS:
      return {
        ...state,
        ...action.payload.users
      }
    default:
      return state
  }
}
