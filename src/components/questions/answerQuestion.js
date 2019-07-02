import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllQuestionsAPI } from "../../actions/questions"

class AnswerQuestion extends Component {
  state = {}
  componentDidMount() {
    const questions = this.props.dispatch(getAllQuestionsAPI())
    console.log("QUESTIONS", questions)
    const questionOK = Object.values(questions).filter(
      question => question.id === this.props.id_question
    )
    console.log("QUESTION OK", questionOK)
    console.log("id do props", this.props.id_question)
  }
  render() {
    return <div>TESTE</div>
  }
}

const mapStateToProps = (store, props) => {
  const questions = store
  const id_question = props.match.params.question_id

  return {
    questions,
    id_question
  }
}
export default connect(mapStateToProps)(AnswerQuestion)
