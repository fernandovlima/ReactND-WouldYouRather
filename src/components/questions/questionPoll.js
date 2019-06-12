import React from "react"
import Questions from "./question"

const QuestionPoll = props => {
  return (
    <div>
      {Object.keys(props.idQuestions).map(question => (
        <Questions key={question} idQuestion={question} />
      ))}
    </div>
  )
}

export default QuestionPoll
