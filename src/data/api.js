import {
  _setLogin,
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function setLogin(id) {
  return _setLogin(id);
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function getUsers() {
  return Promise.all([_getUsers()]).then(([users]) => ({
    users
  }));
}

export function getQuestions() {
  return Promise.all([_getQuestions()]).then(([questions]) => ({
    questions
  }));
}

export function saveQuestionAnswerAPI(user, qid, answer) {
  const data = {
    authedUser: user,
    qid,
    answer
  };

  return _saveQuestionAnswer(data);
}
