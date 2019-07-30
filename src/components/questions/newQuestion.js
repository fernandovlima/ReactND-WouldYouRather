import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import { handleAddQuestion } from "../../actions/questions"
import { connect } from "react-redux"

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
    // authedUser: this.props.authedUser
  }

  //handle inputs changes
  handleChange = e => {
    // const option = e.target.value
    const { name, value } = e.target

    this.setState({
      // ...this.state,
      [name]: value
    })
    //console.log(this.state)
  }

  //handle form submit for add a new question
  handleSubmit = e => {
    e.preventDefault()

    // optionOneText, optionTwoText, author
    const newQuestion = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authedUser
    }

    const { dispatch } = this.props
    console.log("handle submit", newQuestion)
    dispatch(handleAddQuestion(newQuestion))
  }

  render() {
    return (
      <div className="new-question-form">
        <h2>Create the Question</h2>
        <p>complete the question:</p>
        <h5>Would you rather?</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="optionOne">
            <Form.Control
              type="text"
              name="optionOne"
              placeholder="enter option one text here"
              value={this.state.optionOne}
              onChange={this.handleChange}
            />
          </Form.Group>
          <p>OR</p>

          <Form.Group controlId="optionTwo">
            <Form.Control
              type="text"
              name="optionTwo"
              placeholder="enter optin two text here"
              value={this.state.optionTwo}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
         
      </div>
    )
  }
}

const mapStateToProps = (store, props) => {
  const { user, questions } = store
  const { authedUser } = user
  return {
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(NewQuestion)
