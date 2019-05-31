import React from "react"
import { connect } from "react-redux"
const Dashboard = props => {
    componentDidMount() {
        
    }
  return (
    <div>
      {props.user.avatarURL}
      <div>{JSON.stringify(props.user)}</div>
    </div>
  )
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
