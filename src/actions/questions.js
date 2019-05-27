export const GET_QUESTION = "GET_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS"

export function getQuestion(question) {
  return {
    type: GET_QUESTION,
    payload: question
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: question
  }
}

export function getAllQuestions() {
  return {
    type: GET_ALL_QUESTIONS
  }
}
