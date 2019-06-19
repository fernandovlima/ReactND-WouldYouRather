import React from "react"

const AnswerQuestion = props => {
  console.log("props em question: ", props)
  return <div>vc esta em {props.match.params.question_id}</div>
}
export default AnswerQuestion
