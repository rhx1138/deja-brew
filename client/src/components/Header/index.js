import React from "react";
import Auth from '../../utils/auth';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faD, faB } from "@fortawesome/free-solid-svg-icons";


function Header() {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
      <Navbar expand ="md" fixed="top" className="sticky">
        <Container>
            <Navbar.Brand className="d-flex">
                <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/">
                    <FontAwesomeIcon style={{ marginRight: "3px" }} icon= { faD }/><FontAwesomeIcon icon= { faB }/>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto mx-5">
                    <NavLink to="/" className="nav" style={({ isActive }) => ({ 
                        color: isActive ? 'white' : 'gray', textDecoration: 'none' })}>
                        Home
                    </NavLink>
                    {Auth.loggedIn() ? (
                        <>
                            <NavLink to="/Profile" className="nav" style={({ isActive }) => ({ 
                                color: isActive ? 'white' : 'gray', textDecoration: 'none' })}>
                                Profile
                            </NavLink>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                        ) : (
                        <>
                            <NavLink to="/login" className="nav" style={({ isActive }) => ({ 
                                color: isActive ? 'white' : 'gray', textDecoration: 'none' })}>
                                Login
                            </NavLink>
                            <NavLink to="/signup" className="nav" style={({ isActive }) => ({ 
                                color: isActive ? 'white' : 'gray', textDecoration: 'none' })}>
                                Signup
                            </NavLink>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;