import React from "react"
import { connect } from "react-redux"

const AnswerQuestion = ({ props, questions }) => {
  //const question_id = props.match.params.question_id
  //console.log("id da questao", question_id)
  console.log("props", props)

  //   const question = questions.filter(id => {
  //     if (id === question_id) {
  //       return question
  //     }
  //   })

  return <div>vc esta em {props.question_id}</div>
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
