import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllUser } from "../actions/user"

class Login extends Component {
  state = {
    user: ""
  }

  componentDidMount() {
    this.props.dispatch(getAllUser())
  }
  handleSubmit = event => {
    event.preventDefault()
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select the user:
            <select onChange={this.handleChange}>
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
        </form>
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
