import React from 'react';
import {  Container, Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image, Col, Row  } from "react-bootstrap/";

import Auth from '../../utils/auth';


 

// import images
import mushroom from '../../assets/images/mushroom.png';

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar id="doseNav" className="py-2" expand={false} >
  <Container fluid>
    <Navbar.Brand className= "text-center mx-auto navTitle ps-5" href="/">dose.</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      
      
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"> </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3  ">

          <a href="/" id="home" className="whiteText fs-1 text-center py-5 text-decoration-none">home</a>

          <a href="/learn" id="learn" className="whiteText text-decoration-none fs-1 text-center pe-2">learn</a>

          <a href="/about" id="about" className="whiteText text-decoration-none fs-1 text-center pe-2">about</a>

          <a href="/dashboard" id="dashboard" className="whiteText text-decoration-none fs-1 text-center pe-2">dashboard</a>

          <div className=" ">
          <Container className="mx-auto pb-2 loginContainer" >
            <Row >
              {Auth.loggedIn() ? (
                <Button className= "fs-5 text-decoration-none whiteText align-content-start loginButton" onClick={logout}>logout</Button>
                      ) : (
                        <><Col xs={4}>

                        <a href="/login" className="fs-5 text-decoration-none whiteText align-content-start loginLink ">
                          login
                        </a>  
                      </Col>

                      <Col xs={4}>

                          <img src={mushroom} width="60" height="60" alt="mushroom" />

                        </Col><Col xs={4}>

                        <a href="/login" className="fs-5 text-decoration-none whiteText align-content-end loginLink">
                            signup
                          </a>

                        </Col></>


                      ) }
            </Row>
          </Container>
          </div>
        
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  );
};

export default NavBar;
