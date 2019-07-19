import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const Question = ({ user, loading, question, ...props }) => {
  return (
    <div className="question-wraper">
      {loading ? (
        "Carregando..."
      ) : (
        <div className="questions-list-container">
          <div className="question-user">
            <h5>{user.name} says...</h5>
          </div>
          <div className="user-avatar">
            <img src={user.avatarURL} alt="avatar" />
          </div>
          <div className="question_info">
            <h5>Would you rather</h5>
            <p>... {question.optionOne.text} ...</p>
          </div>

          <Link
            className="btn btn-default"
            label="View Poll"
            to={`/questions/${question.id}`}
          >
            View Poll
          </Link>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (store, props) => {
  const question = store.questions[props.idQuestion]
  const user =
    typeof question !== "undefined" ? store.user[question.author] : ""

  const loading = user === "" ? true : false

  return {
    question,
    user,
    loading
  }
}
export default connect(mapStateToProps)(Question)
