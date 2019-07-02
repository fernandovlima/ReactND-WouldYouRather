import React, { Component } from "react"
import { connect } from "react-redux"

class AnswerQuestion extends Component {
  state = {}
  componentDidMount() {
    console.log("props", this.props)
    console.log("questionOK", this.props.questionOk)
    console.log("id_question", this.props.id_question)
  }
  render() {
    return <div>TESTE</div>
  }
}

const mapStateToProps = (store, props) => {
  const questions = store
  const id_question = props.match.params.question_id
  //const questionOk = questions.filter(question => question.id === id_question)

  return {
    questions,
    id_question
    //questionOk
  }
}
export default connect(mapStateToProps)(AnswerQuestion)
