import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import { handleAddQuestion } from "../../actions/questions"
import { connect } from "react-redux"

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  }

  handleChange = e => {
    const option = e.target.value

    this.setState({
      optionOne: option,
      optionTwo: option
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props
    dispatch(handleAddQuestion())
    this.setState({
      optionOne: "",
      optionTwo: ""
    })
  }

  render() {
    return (
      <div className="new-question-form">
        <h2>Create the Question</h2>
        <p>complete the question:</p>
        <h5>Would you rather?</h5>
        <Form onClick={this.handleSubmit}>
          <Form.Group controlId="optionOne">
            <Form.Control
              type="text"
              placeholder="enter option one text here"
              value={this.state.optionOne}
              onChange={this.handleChange}
            />
          </Form.Group>
          <p>OR</p>

          <Form.Group controlId="optionTwo">
            <Form.Control
              type="text"
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

export default connect()(NewQuestion)
