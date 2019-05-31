import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllQuestionsAPI } from "../actions/questions"

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getAllQuestionsAPI())
  }
  render() {
    const { user } = this.props
    return <div>{user.avatarURL}</div>
  }
}

const mapStateToProps = store => {
  const { authedUser } = store.user
  const user = store.user[authedUser]
  return {
    authedUser: store.user.authedUser,
    user
  }
}
export default connect(mapStateToProps)(Dashboard)
