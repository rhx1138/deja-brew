// import React from 'react';
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

// const Header = () => {
//   const logout = event => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   return (
//     <header className="bg-secondary mb-4 py-2 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <Link to="/">
//           <h1>Deep Thoughts</h1>
//         </Link>

//         <nav className="text-center">
//           {Auth.loggedIn() ? (
//             <>
//               <Link to="/profile">Me</Link>
//               <a href="/" onClick={logout}>
//                 Logout
//               </a>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Signup</Link>
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


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
      <Navbar expand ="md" fixed="top">
        <Container>
            <Navbar.Brand className="logo">
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
                        color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
                        Home
                    </NavLink>
                    {Auth.loggedIn() ? (
                        <>
                            <NavLink to="/profile" className="nav" style={({ isActive }) => ({ 
                                color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
                                Profile
                            </NavLink>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                        ) : (
                        <>
                            <NavLink to="/contact" className="nav" style={({ isActive }) => ({ 
                                color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
                                Login
                            </NavLink>
                            <NavLink to="/portfolio" className="nav" style={({ isActive }) => ({ 
                                color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
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
  