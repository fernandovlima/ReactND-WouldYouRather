import React from "react"
import { connect } from "react-redux"
import { Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { setAuthedUser } from "../../actions/user"

const Header = ({ authedUser, ...props }) => {
  const handleLogout = () => {
    props.dispatch(setAuthedUser(""))
    this.props.history.push("/dashboard")
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Would You Rather APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/dashboard" className="nav-link">
              HOME
            </NavLink>
            <NavLink to="/add" className="nav-link">
              NEW QUESTION
            </NavLink>
            <NavLink to="/leaderboard" className="nav-link">
              LEADERBOARD
            </NavLink>
            <div className="nav-link user-logged ">Hello {authedUser}</div>
            <NavLink to="" className="nav-link" onClick={handleLogout}>
              LOGOUT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = (store, props) => {
  const question = store.questions[props.idQuestion]
  const user =
    typeof question !== "undefined" ? store.user[question.author] : ""

  const loading = user === "" ? true : false
  const { authedUser } = store.user

  return {
    question,
    user,
    loading,
    authedUser
  }
}

export default connect(mapStateToProps)(Header)
