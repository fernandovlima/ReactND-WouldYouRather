import { SET_AUTHED_USER, GET_ALL_USERS } from "../actions/user"
import { SAVE_QUESTION_ANSWER, ADD_QUESTION } from "../actions/questions"

export default function user(state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      //console.log("TESTE DE STATE: ", action)
      return {
        ...state,
        authedUser: action.payload
      }
    case GET_ALL_USERS:
      return {
        ...state,
        ...action.payload.users
      }
    case SAVE_QUESTION_ANSWER:
      const { qid, answer, user } = action.payload
      return {
        ...state,
        [user]: {
          ...state[user],
          answers: {
            ...state[user].answers,
            [qid]: answer
          }
        }
      }
    case ADD_QUESTION:
      console.log("payload", action.payload)
      const { question } = action.payload
      const { author, id } = question
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    default:
      return state
  }
}
