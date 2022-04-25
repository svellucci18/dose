import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { ADD_USER } from '../utils/mutations';
import Signup from './Signup.js';

import '../styles/login.css';
import {  Container, Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image, Col, Row  } from "react-bootstrap/";


import Auth from '../utils/auth';





const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }


  };

  return (
    
    <>

        <Container fluid className="rainbowLoginHeader ">

          <Row className="">

            <Col xs={6} className="signUpHeader d-flex align-items-center justify-content-center">
              <h3 className="">New Around Here?</h3>
            </Col>

            <Col xs={6} className="d-flex align-items-center justify-content-center">
              <h3 className="text-center">Login to see your Dosing Data</h3> 
            </Col>
            

          </Row>
        </Container>


      {/* form container */}

      <Container className="mb-5 "> 
        <Row>

          {/* Create Account Form */}

          <Col xs={12} md={6}>
            
             <Signup />

          
          </Col>


          {/* LOGIN Form */}
          <Col xs={12} md={6}>           
              <div className="card signuploginCards ">
                <h4 className="text-center mb-5 signuploginTitle">Login</h4>
                <div className="card-body ">
                  {data ? (
                    <p>
                      Success! You may now head{' '}
                      <Link to="/">back to the homepage.</Link>
                    </p>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="text-center">                   
                      <h5 className="mt-3"> Email Address </h5>
                      <input
                        className="form-input pe-5"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                      <br/>
                      <br/>

                      <h5>Username</h5>
                      <input
                        className="form-input pe-5"
                        placeholder="Username"
                        name="username"
                        type="username"
                        value={formState.username}
                        onChange={handleChange}
                      />
                      <br/>
                      <br/>
                          
                      <h5>Password</h5>
                      <input
                        className="form-input pe-5"
                        placeholder="******"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                      <br/>
                      <br/>
                      <button
                        className="btn-lg btn-block loginButton mt-4 fs-6"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  )}

                  {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                      {error.message}
                    </div>
                  )}
                </div>
              </div>
            
          </Col>



        </Row>
      </Container>

   </>


    

  );
};

export default Login;
