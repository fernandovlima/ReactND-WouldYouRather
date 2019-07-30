import React, { Component } from "react"
import { connect } from "react-redux"
import {
  getAllQuestionsAPI,
  handleSaveQuestionAnswer
} from "../../actions/questions"
import { Form, Button, ProgressBar } from "react-bootstrap"
import { id } from "postcss-selector-parser"

class AnswerQuestion extends Component {
  state = {
    selectedOption: "optionOne",
    isAnswered: true
  }

  componentDidMount() {
    this.props.dispatch(getAllQuestionsAPI())
  }

  handleOptionChange = e => {
    const value = e.target.value
    this.setState({ selectedOption: value })
    console.log("Answer: ", this.state.selectedOption)
    console.log("VALUE ", e.target.value)
  }
  handleSubmit = e => {
    e.preventDefault()
    const { id_question, authedUser } = this.props
    const answer = this.state.selectedOption

    this.props.dispatch(
      handleSaveQuestionAnswer(authedUser, id_question, answer)
    )
    this.setState({ isAnswered: false })
  }

  render() {
    const question =
      this.props.questionOK !== "undefined" ? this.props.questionOK : {}
    console.log("question ok em props", question)
    const loading = this.props.loading
    return (
      <div>
        {loading ? (
          <div className="container">
            <div>
              <div className="question-user">
                <h5>Asked by {question.author} </h5>
              </div>

              <h5>Would you rather</h5>
              {!this.state.isAnswered ? (
                <div className="answered-question">
                  <div className="answer-option">
                    <span>Would you rather {question.optionOne.text} ?</span>
                    <ProgressBar
                      now={question.optionOne.votes.length}
                      label={`${question.optionOne.votes.length}%`}
                      variant={this.state.isAnswered ? "success" : "info"}
                    />
                    <p>
                      {question.optionOne.votes.length} of{" "}
                      {question.optionOne.votes.length +
                        question.optionTwo.votes.length}{" "}
                      votes!
                    </p>
                  </div>
                  <div className="answer-option">
                    <span>Would you rather {question.optionTwo.text} ? </span>
                    <ProgressBar
                      now={question.optionTwo.votes.length}
                      label={`${question.optionOne.votes.length}%`}
                      variant={this.state.isAnswered ? "success" : "info"}
                    />
                    <p>
                      {question.optionOne.votes.length} of{" "}
                      {question.optionOne.votes.length +
                        question.optionTwo.votes.length}{" "}
                      votes!
                    </p>
                  </div>
                </div>
              ) : (
                <Form onSubmit={this.handleSubmit}>
                  <Form.Check
                    type="radio"
                    label={question.optionOne.text}
                    value="optionOne"
                    id="optionOne"
                    checked={this.state.selectedOption === "optionOne"}
                    onChange={this.handleOptionChange}
                  />

                  <Form.Check
                    type="radio"
                    value="optionTwo"
                    label={question.optionTwo.text}
                    id="optionTwo"
                    checked={this.state.selectedOption === "optionTwo"}
                    onChange={this.handleOptionChange}
                  />
                  <Button type="submit" onClick={this.handleSubmit}>
                    SUBMIT
                  </Button>
                </Form>
              )}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (store, props) => {
  const { questions, user } = store
  const { authedUser } = user

  const id_question = props.match.params.question_id
  const questionOK = questions[id_question]
  console.log("USER EM MAPSTATE", user)
  console.log(user.answers)

  const answerByUser = Object.values(user).map(
    user => user.answers === id_question
  )

  console.log("ANSWER BY USER ", answerByUser)

  const loading = typeof questionOK !== "undefined" ? true : false
  return {
    questions,
    id_question,
    questionOK,
    authedUser,
    loading
  }
}
export default connect(mapStateToProps)(AnswerQuestion)
