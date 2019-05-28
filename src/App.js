import React, { Component } from "react"
import "./App.css"
import { connect } from "react-redux"
import { handleInitialData } from "./actions/shared"
//loading bar component from react-redux-loading
import { LoadingBar } from "react-redux-loading-bar"

class App extends Component() {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <LoadingBar />
        <h3>Would you rather?</h3>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
