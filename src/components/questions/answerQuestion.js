import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllQuestionsAPI } from "../../actions/questions"
import { Form, Button } from "react-bootstrap"

class AnswerQuestion extends Component {
  state = {
    selectedOption: "question1"
  }
  componentDidMount() {
    this.props.dispatch(getAllQuestionsAPI())
  }

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  handleSubmit = e => {}

  render() {
    const question =
      this.props.questionOK !== "undefined" ? this.props.questionOK : {}
    console.log("question ok em props", question)
    console.log("Loading em props", this.props.loading)
    const loading = this.props.loading
    return (
      <div>
        {loading ? (
          <div className="container">
            <div>
              <div className="question-user">
                <h5>{question.author} says...</h5>
              </div>

              <h5>Would you rather</h5>
              <Form>
                <Form.Check
                  type="radio"
                  label={question.optionOne.text}
                  value="question1"
                  id="questionOne"
                  checked={this.state.selectedOption === "question1"}
                  onChange={this.handleOptionChange}
                />

                <Form.Check
                  type="radio"
                  value="question2"
                  label={question.optionTwo.text}
                  id="questionTwo"
                  checked={this.state.selectedOption === "question2"}
                  onChange={this.handleOptionChange}
                />
                <Button type="submit">SUBMIT</Button>
              </Form>
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
  const { questions } = store

  console.log("questions", questions)
  const id_question = props.match.params.question_id
  const questionOK = questions[id_question]
  console.log("question em mapstate", questionOK)

  const loading = typeof questionOK !== "undefined" ? true : false
  return {
    questions,
    id_question,
    questionOK,
    loading
  }
}
export default connect(mapStateToProps)(AnswerQuestion)
