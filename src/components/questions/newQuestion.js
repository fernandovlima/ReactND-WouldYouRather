import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import { handleAddQuestion } from "../../actions/questions"

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
    const { dispatch, id } = this.props
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
              placeholder="enter optin one text here"
              value={this.state.optionOne}
            />
          </Form.Group>
          <p>OR</p>

          <Form.Group controlId="optionTwo">
            <Form.Control
              type="text"
              placeholder="enter optin two text here"
              value={this.state.optionTwo}
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

export default NewQuestion
