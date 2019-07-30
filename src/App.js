import React, { Component, Fragment } from "react"
import "./App.css"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//loading bar component from react-redux-loading-bar
import { LoadingBar } from "react-redux-loading-bar"
//components
import Login from "./components/login"
import Dashboard from "./components/dashboard"
import Header from "./components/header/header"
import NewQuestion from "./components/questions/newQuestion"
import LeaderBoard from "./components/leaderboard/leaderBoard"
import AnswerQuestion from "./components/questions/answerQuestion"
import NoMatchPage from "./components/404 page/noMatchPage"
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Header />

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/add" component={NewQuestion} />
            <Route exact path="/leaderboard" component={LeaderBoard} />
            <Route path="/questions/:question_id" component={AnswerQuestion} />
            <Route component={NoMatchPage} />
          </Switch>
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
