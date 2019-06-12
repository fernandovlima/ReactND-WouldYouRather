import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllUser, setAuthedUser } from "../actions/user"
import { Form, Button } from "react-bootstrap"

class Login extends Component {
  state = {
    user: ""
  }

  componentDidMount() {
    this.props.dispatch(getAllUser())
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.user))
    this.props.history.push("/dashboard")
  }

  handleChange = event => {
    this.setState({
      user: event.target.value
    })
  }

  render() {
    const { user } = this.props
    console.log("props em login: ", this.props)
    console.log("USER AVATAR URL: ", user.avatarURL)
    return (
      <div className="login-container">
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Select the user:
            <select onChange={this.handleChange}>
              <option>Select a user to login</option>
              {typeof user !== "undefined" &&
                Object.values(user).map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
            </select>
          </label>
          <button className="btn" type="submit">
            Login
          </button>
        </form> */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Would You Rather - Login in:</Form.Label>
            <Form.Control as="select" onChange={this.handleChange}>
              <option>Select a user</option>
              {typeof user !== "undefined" &&
                Object.values(user).map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
            </Form.Control>
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)
