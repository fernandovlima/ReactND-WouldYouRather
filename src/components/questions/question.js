import React from "react"
import { connect } from "react-redux"

const Question = ({ user, loading, props }) => {
  return (
    <div className="question-wraper">
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div className="question-user">
            <h5>{user.name} says...</h5>
          </div>
          <div className="user-avatar">
            <img src={user.avatarURL} alt="avatar" />
          </div>
          <div className="question-info">
            <h4>Would you rather</h4>
            <p>... question info here ...</p>
          </div>
          <button
            className="btn-default"
            label="View Poll"
            onClick={() => this.props.history.push("/")}
          >
            View Poll
          </button>
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
