import React from "react"
import { connect } from "react-redux"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Would You Rather APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">HOME</Nav.Link>
            <Nav.Link href="/add">NEW QUESTION</Nav.Link>
            <Nav.Link href="/leaderboard">LEADERBOARD</Nav.Link>
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
