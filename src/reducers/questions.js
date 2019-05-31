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
      console.log("QUESTION", action)
      return {
        ...state,
        ...action.payload.questions
      }
    case GET_QUESTION:
      return {
        ...state,
        [action.question.id]: action.payload
      }
    default:
      return state
  }
}
