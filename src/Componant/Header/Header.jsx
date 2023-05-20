import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import img from '../images/icon.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import '../Header/Header.css'
import Button from 'react-bootstrap/esm/Button';

const Header = () => {

  const [user] = useAuthState(auth);
  // console.log(user);

  //Sing out function
  const handleSingOut = () => {
    signOut(auth);
  }


  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className='nav-link' to="#home">
            <img src={img} alt="" className='img-fluid mx-auto logo' />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className='nav-link' to="/">home</NavLink>
              <NavLink className='nav-link' to="/About">about</NavLink>
              <NavLink className='nav-link' to="/experience">experience</NavLink>
              <NavLink className='nav-link' to="/service">service</NavLink>
              <NavLink className='nav-link' to="/Portfolio">portfolio</NavLink>

              {user ? (
                <Button className="btn sing_out" onClick={handleSingOut}>sing out</Button>
              ) : (

                <NavLink className="nav-link sing_in" to="/">sing in</NavLink>
              )
              }

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;