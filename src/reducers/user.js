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
      const { authedUser } = action.payload
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([action.payload.id])
        }
      }
    default:
      return state
  }
}
