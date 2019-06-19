import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllQuestionsAPI } from "../actions/questions"
//components
import QuestionPoll from "./questions/questionPoll"

class Dashboard extends Component {
  componentWillMount() {
    if (typeof this.props.authedUser === "undefined") {
      this.props.history.push("/")
    }
  }
  componentDidMount() {
    this.props.dispatch(getAllQuestionsAPI())
  }

  render() {
    const { answers, unanswered } = this.props

    return (
      <div>
        <QuestionPoll idQuestions={answers} />
        <QuestionPoll idQuestions={unanswered} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  const { authedUser } = store.user
  const { questions } = store
  const user = store.user[authedUser]
  const unanswered = Object.keys(questions).filter(
    id => typeof user.answers[id] === "undefined"
  )

  return {
    authedUser: store.user.authedUser,
    answers: typeof user !== "undefined" ? Object.keys(user.answers) : {},
    unanswered,
    user
  }
}
export default connect(mapStateToProps)(Dashboard)
