import React, { Component } from "react"
import { connect } from "react-redux"
import {
  getAllQuestionsAPI,
  handleSaveQuestionAnswer
} from "../../actions/questions"
import { Form, Button, ProgressBar } from "react-bootstrap"

class AnswerQuestion extends Component {
  state = {
    selectedOption: "optionOne"
  }

  componentDidMount() {
    this.props.dispatch(getAllQuestionsAPI())
  }

  handleOptionChange = e => {
    const value = e.target.value
    this.setState({ selectedOption: value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { id_question, authedUser } = this.props
    const answer = this.state.selectedOption

    this.props.dispatch(
      handleSaveQuestionAnswer(authedUser, id_question, answer)
    )
  }

  render() {
    const {
      questionOK,
      isAnswered,
      voteOne,
      voteTwo,
      voteTotal,
      loading
    } = this.props

    return (
      <div>
        {!loading ? (
          <div className="container">
            <div>
              <div className="question-user">
                <h5>Asked by {questionOK.author} </h5>
              </div>

              <h5>Would you rather</h5>
              {isAnswered ? (
                <div className="answered-question">
                  <div className="answer-option">
                    <span>Would you rather {questionOK.optionOne.text} ?</span>
                    <ProgressBar
                      now={(voteOne / voteTotal) * 100}
                      label={`${Math.floor((voteOne / voteTotal) * 100)}%`}
                      variant={isAnswered ? "success" : "info"}
                    />
                    <p>{`${voteOne} of ${voteTotal} votes!`}</p>
                  </div>
                  <div className="answer-option">
                    <span>Would you rather {questionOK.optionTwo.text} ? </span>
                    <ProgressBar
                      now={(voteTwo / voteTotal) * 100}
                      label={`${Math.floor((voteTwo / voteTotal) * 100)}%`}
                      variant={isAnswered ? "success" : "info"}
                    />
                    <p>{`${voteTwo} of ${voteTotal} votes!`}</p>
                  </div>
                </div>
              ) : (
                <Form onSubmit={this.handleSubmit}>
                  <Form.Check
                    type="radio"
                    label={questionOK.optionOne.text}
                    value="optionOne"
                    id="optionOne"
                    checked={this.state.selectedOption === "optionOne"}
                    onChange={this.handleOptionChange}
                  />

                  <Form.Check
                    type="radio"
                    value="optionTwo"
                    label={questionOK.optionTwo.text}
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

  const { answers } = typeof user !== "undefined" ? user[authedUser] : {}
  const loading = typeof questionOK === "undefined" ? true : false

  let voteOne,
    voteTwo,
    voteTotal = 0
  if (!loading) {
    voteOne = questionOK.optionOne.votes.length
    voteTwo = questionOK.optionTwo.votes.length
    voteTotal = voteOne + voteTwo
  }

  return {
    questions,
    id_question,
    questionOK,
    authedUser,
    voteOne,
    voteTwo,
    voteTotal,
    isAnswered: typeof answers[id_question] !== "undefined" ? true : false,
    loading
  }
}
export default connect(mapStateToProps)(AnswerQuestion)
