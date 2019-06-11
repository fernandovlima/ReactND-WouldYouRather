import React from "react"
import { connect } from "react-redux"

const Question = ({ user, loading }) => {
  return (
    <div className="question-wraper">
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div className="question-user">
            <h5>{user.name}</h5>
          </div>
          <div className="user-avatar">
            <img src={user.avatarURL} alt="avatar" />
          </div>
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
