import React from "react"
import Questions from "./question"

const QuestionPoll = props => {
  return (
    <div className="questions-list">
      {Object.values(props.idQuestions).map(question => (
        <Questions key={question} idQuestion={question} />
      ))}
    </div>
  )
}

export default QuestionPoll
