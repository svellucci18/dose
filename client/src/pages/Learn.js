import { useState } from 'react';
import { Link } from 'react-router-dom';


import './learn.css';
import {  Container, Nav, Tab, Tabs, Form, FormControl, Button, Image, Col, Row  } from "react-bootstrap/";

import orangeFloral from '../assets/images/orangepsychedelicFloral.jpg';

const Learn = () => {
    return (
        <>
            <div className="blueMiniHeader d-flex justify-content-center align-items-center">
                <h3 className="mx-auto pt-4"> ✨ Highlight of the Week: Learn How to Grow Your Own Medicine</h3>
            </div>

            {/* Main Header with Image */}

            <Container className="headerContainer">
                <Row className="mb-5">
                    <Col xs={5} md={8}>
                        <img src={orangeFloral} alt="orange floral psychedlic art" className="orangeFloralImage" />
                    </Col>

                    <Col  xs={5} md={4} className="d-flex align-items-center justify-content-end ">

                        <h1 className="">Educational Resources to help you decide if microdosing is for you </h1>

                    </Col>
                </Row>
            </Container>


            {/* Tabbed Content */}
            <div className="my-5 ms-5 mx-auto ">
            <Tab.Container  defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                    <Nav variant="pills" className="flex-column tabContainer">
                        <Nav.Item>
                        <Nav.Link className="p-3 tabOne" eventKey="first">
                            <h4> History </h4>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="p-3 tabTwo" eventKey="second">
                            <h4> Getting Started </h4>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="p-3 tabThree" eventKey="third">
                            <h4> Tips/Tricks </h4>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="p-3 Tab4" eventKey="fourth">
                            <h4> Medical Research</h4>
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" className="fs-5">
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit la
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            TEST TWO
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>

                </div>

        </>
    );
};


export default Learn;