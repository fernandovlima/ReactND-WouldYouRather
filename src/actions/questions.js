import { saveQuestion, getQuestions } from "../data/api"
//loading bar component from react-redux-loading-bar
import { showLoading, hideLoading } from "react-redux-loading-bar"

export const GET_QUESTION = "GET_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS"
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER"

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

export function getAllQuestions(questions) {
  return {
    type: GET_ALL_QUESTIONS,
    payload: questions
  }
}

export function saveQuestionAnswer(qid, user, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    payload: {
      qid,
      user,
      answer
    }
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion(question)
      .then(question => dispatch(addQuestion(question, authedUser)))
      .then(() => dispatch(hideLoading()))
  }
}

export function getAllQuestionsAPI() {
  return dispatch => {
    dispatch(showLoading())
    return getQuestions()
      .then(questions => dispatch(getAllQuestions(questions)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveQuestionAnswer(qid, user, answer) {
  return dispatch => {
    dispatch(showLoading())
    return
  }
}
