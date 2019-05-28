import { REQUEST_AUTH } from "../actions/user"

export default function user(state = {}, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
