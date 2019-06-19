import React, { Component, Fragment } from "react"
import "./App.css"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
//loading bar component from react-redux-loading-bar
import { LoadingBar } from "react-redux-loading-bar"
//components
import Login from "./components/login"
import Dashboard from "./components/dashboard"
import Header from "./components/header/header"
import NewQuestion from "./components/questions/newQuestion"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Header />

          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/new" component={NewQuestion} />
          {/* <div className="App">
            <h2>Would you rather?</h2>
          </div> */}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
