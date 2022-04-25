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

          <a href="/" id="home" className="whiteText fs-3 text-center py-5 text-decoration-none">home</a>

          <a href="/learn" id="learn" className="whiteText text-decoration-none fs-3 text-center pe-2">learn</a>

          <a href="/about" id="about" className="whiteText text-decoration-none fs-3 text-center pe-2">about</a>

          <a href="/dashboard" id="dashboard" className="whiteText text-decoration-none fs-3 text-center pe-2">dashboard</a>

          <div className=" ">
          <Container className="mx-auto pb-2 loginContainer" >
            
              {Auth.loggedIn() ? (
                <>
                <Row className="d-flex justify-content-center">
                <Image src={mushroom} className="mushroomImgLogout " alt="mushroom" />                
                </Row>

                <Row>
                <Button className= "fs-5 logoutButton" onClick={logout}>logout</Button>

                </Row>
                </>
                      ) : (
                        <>
                         <Row className="d-flex justify-content-center mb-4">
                        <Image src={mushroom} className="mushroomImgLogout " alt="mushroom" />                
                        </Row>

                        <Row>
                        <a href="/login" className="btn loginButton ">
                            login / signup
                          </a> 

                        </Row>


                        </>


                      ) }
            
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
