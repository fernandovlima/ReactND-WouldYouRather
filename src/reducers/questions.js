import {
  ADD_QUESTION,
  GET_ALL_QUESTIONS,
  GET_QUESTION
} from "../actions/questions"

export default function questions(state = {}, actions) {
  switch (action.type) {
    case ADD_QUESTION:
      return {}
    case GET_ALL_QUESTIONS:
      return {}
    case GET_QUESTION:
      return {}
    default:
      return state
  }
}
