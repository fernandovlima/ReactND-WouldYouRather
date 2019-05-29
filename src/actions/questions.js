import { saveQuestion } from "../data/api"
//loading bar component from react-redux-loading-bar
import { showLoading, hideLoading } from "react-redux-loading-bar"

export const GET_QUESTION = "GET_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS"

export function getQuestion(question) {
  return {
    type: GET_QUESTION,
    payload: question
  }
}

export function addQuestion(question, user) {
  return {
    type: ADD_QUESTION,
    payload: {
      question,
      user
    }
  }
}

export function getAllQuestions() {
  return {
    type: GET_ALL_QUESTIONS
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return {
      question
    }
      .then(question => dispatch(saveQuestion(question, authedUser)))
      .then(() => dispatch(hideLoading()))
  }
}
