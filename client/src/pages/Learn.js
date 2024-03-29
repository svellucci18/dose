import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/learn.css';
import {  Container, Nav, Tab, Tabs, Form, FormControl, Button, Image, Col, Row  } from "react-bootstrap/";

import orangeFloral from '../assets/images/orangepsychedelicFloral.jpg';

const Learn = () => {
    return (
        <>
            <div className="blueMiniHeader d-flex justify-content-center align-items-center">
                <h6 className="mx-auto pb-4 my-2"> ✨ Highlight of the Week: Learn How to Grow Your Own Medicine ✨</h6>
            </div>

            {/* Main Header with Image */}

            <Container className="headerContainer">
                <Row className="mb-5">
                    <Col sm={8}>
                        <img src={orangeFloral} alt="orange floral psychedlic art" className="orangeFloralImage img-fluid" />
                    </Col>

                    <Col sm={4} className="d-flex align-items-center justify-content-end ">

                        <h3 className="">Educational Resources to help you decide if microdosing is for you </h3>

                    </Col>
                </Row>
            </Container>


            {/* Tabbed Content */}
            <div className="my-5 ms-5 mx-auto ">
            <Tab.Container  defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column tabContainer">
                        <Nav.Item>
                        <Nav.Link className="p-3 tabOne" eventKey="first">
                            <h6> History </h6>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="p-3 tabTwo" eventKey="second">
                            <h6> Getting Started </h6>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="p-3 tabThree" eventKey="third">
                            <h6> Tips / Tricks </h6>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="p-3 Tab4" eventKey="fourth">
                            <h6> Medical Research</h6>
                        </Nav.Link>


                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="fourth" className="fs-6">
                        Clinical relevancy for psychedlic use is increasing by the minute thanks to places like the Johns Hopkins Center for Psychadelic & Consciousness Research. "<a href="https://hopkinspsychedelic.org/index/#research">Findings</a> showed that participants who received immediate psilocybin-assisted therapy compared with delayed treatment showed improvement in blinded clinician rater–assessed depression severity and in self-reported secondary outcomes through the 1-month follow-up. In the overall sample, 71% at 1 month had a clinically significant response to the intervention, and 54% at 1 month were in remission. Findings suggest that psilocybin with therapy is efficacious in treating Major Depressive Disorder, thus extending the results of previous studies of this intervention in patients with cancer and depression and of a nonrandomized study in patients with treatment-resistant depression."
                        </Tab.Pane>

                        <Tab.Pane eventKey="third" className="fs-6">
                            There are many resources online and elsewhere focused on how to grow your own psychedelics, for research purposes of course. Double blind has a course that you can <a href="https://doubleblindmag.com/courses/how-to-grow-mushrooms/">enroll</a> in. 
                        </Tab.Pane>

                        <Tab.Pane eventKey="second" className="fs-6">
                            Do your <a href="https://pubmed.ncbi.nlm.nih.gov/30925850/">research</a> before making the decision to attempt microdosing. Some people shouldn't microdose. People with a history of schizophrenia, bi-polar disorder, and some other mental illnesses are recommended to avoid the use of psychedelics. 
                        </Tab.Pane>

                        <Tab.Pane eventKey="first" className="fs-6">
                            The earliest evidence of psychadelic mushroom use was found in a Northern Australia cave. The mural depicts mushrooms and psychedelic illustrations. Check out <a href="https://www.mushroomrevival.com/blogs/blog/the-history-of-psilocybin-magic-mushroom-use-through-the-ages">this</a> reference for historical use of psychedlics. 
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