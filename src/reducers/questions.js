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
        ...state,
        [action.payload.question.id]: action.payload.question
      }
    case GET_ALL_QUESTIONS:
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
      const { qid, answer, user } = action.payload
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([user])
          }
        }
      }
    default:
      return state
  }
}
