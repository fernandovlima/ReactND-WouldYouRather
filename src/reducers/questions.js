import {
  ADD_QUESTION,
  GET_ALL_QUESTIONS,
  GET_QUESTION
} from "../actions/questions"

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state
      }
    case GET_ALL_QUESTIONS:
      return {}
    case GET_QUESTION:
      return {}
    default:
      return state
  }
}
