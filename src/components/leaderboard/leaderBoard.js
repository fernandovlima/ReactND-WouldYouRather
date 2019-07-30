import React from "react"
import { connect } from "react-redux"

const LeaderBoard = props => {
  // console.log("QUESTIONS:", this.props.questions)
  // console.log("USER: ", this.props.user)
  return (
    <div className="question-wraper">
      <div className="leaderboard-title">
        <h3>LeaderBoard</h3>
      </div>
    </div>
  )
}

const mapStateToProps = (store, props) => {
  const { user, questions, autheduser } = store
  console.log("USER", store)

  return {
    user,
    questions,
    autheduser
  }
}
export default connect(mapStateToProps)(LeaderBoard)
