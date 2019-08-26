import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// { logout } from '../../actions/user';

const Header = ({ authedUser, dispatch, history }) => {
  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Would You Rather APP</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink to='/dashboard' className='nav-link'>
              HOME
            </NavLink>
            <NavLink to='/add' className='nav-link'>
              NEW QUESTION
            </NavLink>
            <NavLink to='/leaderboard' className='nav-link'>
              LEADERBOARD
            </NavLink>
            {authedUser && (
              <div>
                <div className='nav-link user-logged '>
                  Hello {authedUser}
                  <Navbar.Brand className='nav-link header-link ' href='/'>
                    LOGOUT
                  </Navbar.Brand>
                </div>
              </div>
            )}

            {/* <NavLink to='/' className='nav-link'>
              LOGOUT
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (store, props) => {
  const question = store.questions[props.idQuestion];
  const user =
    typeof question !== 'undefined' ? store.user[question.author] : '';

  const loading = user === '' ? true : false;
  const { authedUser } = store.user;

  return {
    question,
    user,
    loading,
    authedUser
  };
};

export default connect(mapStateToProps)(Header);
