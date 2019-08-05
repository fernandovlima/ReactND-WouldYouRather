import React from "react"
import { connect } from "react-redux"

const LeaderBoard = ({ user, leaderboard }) => {
  // console.log("QUESTIONS:", this.props.questions)
  //console.log("USER: ", user)
  return (
    <div className="leaderboard-wraper">
      <div className="leaderboard-title">
        <h3>LeaderBoard</h3>
      </div>
      {leaderboard.map(user => (
        <div key={user.id} className="leaderboard-list">
          <div className="leaderboard-user">
            <div className="user-avatar-leaderboard">
              <strong>{user.name}</strong>
              <img src={user.avatarURL} alt="avatar" />
            </div>
            <div className="user-info">
              <p>Ansered questions {user.answered}</p>
              <p>Created questions {user.created}</p>
            </div>
            <div className="user-total">
              <strong>TOTAL: {user.score}</strong>
            </div>
          </div>
        </div>
      ))}
      <div />
    </div>
  )
}

const mapStateToProps = (store, props) => {
  const { user } = store
  //const { answers } = user
  //const userAnsweredQuestions = Object.values(user).map(user => user.answers)

  //remove id authedUser from user list
  const { authedUser, ...users } = user

  const leaderboard = Object.values(users)
    .map(user => {
      const { id, avatarURL, name, questions, answers } = user
      const created = typeof questions !== "undefined" ? questions.length : 0
      const answered =
        typeof answers !== "undefined" ? Object.keys(answers).length : 0

      return {
        id,
        avatarURL,
        name,
        created,
        answered,
        score: created + answered
      }
    })
    .sort((a, b) => b.score - a.score)

  return {
    user,
    leaderboard
  }
}
export default connect(mapStateToProps)(LeaderBoard)
