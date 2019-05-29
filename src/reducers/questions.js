import {
  ADD_QUESTION,
  GET_ALL_QUESTIONS,
  GET_QUESTION
} from "../actions/questions"

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        //todo
      }
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        ...action.questions
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
