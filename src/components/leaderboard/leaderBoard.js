import React from "react"
import { connect } from "react-redux"

const LeaderBoard = ({ user, loading, props }) => {
  return <div className="question-wraper">Lista de lideres</div>
}

const mapStateToProps = (store, props) => {}
export default connect(mapStateToProps)(LeaderBoard)
