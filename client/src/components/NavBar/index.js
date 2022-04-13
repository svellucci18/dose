import React from 'react';
import {  Container, Navbar, Offcanvas, Nav, Link, NavDropdown, Form, FormControl, Button, Image, Row  } from "react-bootstrap/";

import Auth from '../../utils/auth';


// import images
import mushroom from '../../assets/images/mushroom.png';

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar id="doseNav" className="py-2" expand={false}>
  <Container fluid>
    <Navbar.Brand className= "mx-auto navTitle" href="#">dose.</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      
      
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">
          <Container >
            
              <p className="fs-6">
                login
              </p>
              <img src={mushroom} width="40" height="40" alt="mushroom"/>
              <p className="fs-6">
                logout
              </p>
         
          </Container>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 ">
          <Nav.Link href="#action1" id="home" className="whiteText fs-1 text-center py-5">home</Nav.Link>
          <Nav.Link href="#action2" id="learn" className="whiteText text-decoration-none fs-1 text-center pe-2">learn</Nav.Link>
          <Nav.Link href="#action2" id="about" className="whiteText text-decoration-none fs-1 text-center pe-2">about</Nav.Link>
          <Nav.Link href="#action2" id="dose" className="whiteText text-decoration-none fs-1 text-center pe-2">dose</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  );
};

export default NavBar;
