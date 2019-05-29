import React, { Component, Fragment } from "react"
import "./App.css"
import { connect } from "react-redux"
import { handleInitialData } from "./actions/shared"
//loading bar component from react-redux-loading-bar
import { LoadingBar } from "react-redux-loading-bar"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />

        <div className="App">
          <h2>Would you rather?</h2>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
