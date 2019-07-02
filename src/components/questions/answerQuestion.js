import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllQuestionsAPI } from "../../actions/questions"

class AnswerQuestion extends Component {
  state = {}

  componentDidMount() {
    this.props.dispatch(getAllQuestionsAPI())
  }
  render() {
    const question = this.state.questionOK
    console.log("question ok em props", question)
    return (
      <div>
        {/* <div>
          <div className="question-user">
            <h5>{question.author} says...</h5>
          </div>
          <div className="user-avatar">
            <img src={question.id} alt="avatar" />
          </div>
          <h5>Would you rather</h5>
          <p>{question.optionOne}</p>
          <p>OR</p>
          <p>{question.optionTwo}</p>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = (store, props) => {
  const { questions } = store

  console.log("questions", questions)
  const id_question = props.match.params.question_id
  const questionOK = questions[id_question]
  console.log("question em mapstate", questionOK)
  return {
    questions,
    id_question,
    questionOK
  }
}
export default connect(mapStateToProps)(AnswerQuestion)
