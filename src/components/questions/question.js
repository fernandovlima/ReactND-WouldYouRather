import React from "react"
import { connect } from "react-redux"

const Question = props => {
  return <div />
}

const mapStateToProps = store => {
  const { user } = store.user
  const { questions } = store.questions

  return {
    questions,
    user
  }
}
export default connect(mapStateToProps)(Question)
