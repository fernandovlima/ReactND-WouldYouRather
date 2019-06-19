import React from "react"
import { Form, Button } from "react-bootstrap"

const NewQuestion = () => {
  return (
    <div className="new-question-form">
      <h2>Create the Question</h2>
      <p>complete the question:</p>
      <Form>
        <Form.Group controlId="optionOne">
          <Form.Control type="text" placeholder="enter optin one text here" />
        </Form.Group>
        <span>OR</span>
        <Form.Group controlId="optionTwo">
          <Form.Control type="text" placeholder="enter optin two text here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
       
    </div>
  )
}
