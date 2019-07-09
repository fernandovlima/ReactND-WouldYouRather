import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const Question = ({ user, loading, question, ...props }) => {
  return (
    <div className="question-wraper">
      {loading ? (
        "Carregando..."
      ) : (
        <div>
          <div className="question-user">
            <h5>{user.name} says...</h5>
          </div>
          <div className="user-avatar">
            <img src={user.avatarURL} alt="avatar" />
          </div>
          <h5>Would you rather</h5>
          <p>... {question.optionOne.text} ...</p>

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
