import {
  ADD_QUESTION,
  GET_ALL_QUESTIONS,
  GET_QUESTION,
  SAVE_QUESTION_ANSWER
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
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.question.id]: {
          ...state[action.question.id],
          [action.question.id.answer]: {
            ...state[action.question.id][action.question.id.answer],
            votes: questions[action.question.id][action.question.id.answer]
          }
        }
      }
    default:
      return state
  }
}
