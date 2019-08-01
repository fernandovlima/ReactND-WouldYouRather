import React from "react"
import { connect } from "react-redux"

const LeaderBoard = ({ user }) => {
  // console.log("QUESTIONS:", this.props.questions)
  //console.log("USER: ", user)
  return (
    <div className="question-wraper">
      <div className="leaderboard-title">
        <h3>LeaderBoard</h3>
        {user.map(user => (
          <div className="leaderboard-list">
            <div className="leaderboard-user">
              <div className="user-avatar">
                <img src={user.avatarURL} alt="avatar" />
              </div>
              <div classname="user-info">
                <p>Ansered questions {user.answers.lenght}</p>
                <p>Created questions {user.questions.lenght}</p>
              </div>
              <div className="user-total">TOTAL</div>
            </div>
          </div>
        ))}
        <div />
      </div>
    </div>
  )
}

const mapStateToProps = (store, props) => {
  const { user } = store
  //const { answers } = user
  console.log("USER", user)
  const userAnsweredQuestions = Object.values(user).map(user => user.answers)
  console.log("total answers:", userAnsweredQuestions)
  return {
    user,
    userAnsweredQuestions
  }
}
export default connect(mapStateToProps)(LeaderBoard)
