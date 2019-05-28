import { SET_AUTHED_USER } from "../actions/user"

export default function user(state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        ...action.payload.id
      }
    default:
      return state
  }
}
