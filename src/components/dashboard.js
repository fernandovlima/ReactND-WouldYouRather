import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllQuestionsAPI } from "../actions/questions"
//components
import QuestionPoll from "./questions/questionPoll"

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getAllQuestionsAPI())
  }

  render() {
    const { answers, unanswered } = this.props
    console.log("TESTETESTEW: ", this.props.unanswered)
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
    answers: user.answers,
    unanswered
  }
}
export default connect(mapStateToProps)(Dashboard)
