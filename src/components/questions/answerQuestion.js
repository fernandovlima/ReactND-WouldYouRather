import React from "react"
import { connect } from "react-redux"

const AnswerQuestion = ({ props, questions }) => {
  const question_id = props.match.params.question_id
  console.log("id da questao", question_id)
  console.log("props", props)

  const question = questions.filter(id => {
    if (id === question_id) {
      return question
    }
  })

  console.log("====================================")
  console.log(question)
  console.log("====================================")

  return <div>vc esta em {props.match.params.question_id}</div>
}

const mapStateToProps = store => {
  const { questions } = store

  return {
    questions
  }
}
export default connect(mapStateToProps)(AnswerQuestion)
