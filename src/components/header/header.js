import React from "react"
import { connect } from "react-redux"
import { Nav, Navbar } from "react-bootstrap"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Would You Rather APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/dashboard">HOME</NavLink>
            <NavLink to="/add">NEW QUESTION</NavLink>
            <NavLink to="/leaderboard">LEADERBOARD</NavLink>
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

  return {
    question,
    user,
    loading
  }
}

export default connect(mapStateToProps)(Header)
