import { useState } from 'react';
import { Link } from 'react-router-dom';


import '../styles/about.css';
import {  Container, Carousel, Image, Col, Card, Row, ListGroup, ListGroupItem } from "react-bootstrap/";

// import images
import mushroom from '../assets/images/mushroom.png';
import Lo from '../assets/images/lo.png';
import Sam from '../assets/images/sam.png';
import Michael from '../assets/images/michael.png';
import Sean from '../assets/images/sean.png';
import Kasai from '../assets/images/kasai.png';



const About = () => {
    return (
        <>
            {/* About Rainbow Header */}
            <div className="rainbowAboutHeader d-flex justify-content-center align-items-center">
                <div className="">
                    <h4 className="pb-4 pt-4 aboutHeading text-center">  About Dose </h4>
                </div>
            </div>

            {/* About Text and Mushroom Image Container */}
            <Container>
                <Row>
                    <div className="fs-4 text-center">
                    Dose is an intent-based, though-provoking app, designed to educate and support the use of microdosing to aid with mental health struggles and self-awareness.
                    <br/>
                    <br/>
                    By using dose, you can document your dosing journey, track your moods, and through our analytical insights see how your moods are changing over time.
                    </div>
                </Row>

                <Row className="py-5 mushroomImageRow">
                    <div className="d-flex justify-content-center align-items-center ">
                        <img src={mushroom} width="100" height="100" alt="mushroom"  />
                    </div>
                </Row>
            </Container>
                
            <Container className="topBorder">
                <Row >
                    <h1 className="mt-5 d-flex justify-content-center align-items-center">The Creators</h1>
        
                </Row>

                <Row className="d-flex justify-content-center align-items-center">
                    <Carousel variant="dark" className="bg-white carouselStyle" >
                    

                    <Carousel.Item interval={5000}>
                    <Container>
                            <Row >
                                <Col xs={12}  className="text-center mt-3">
                                    <Image className="mt-2 img-fluid headshot" src={Kasai} />
                                </Col>

                                <Col xs={12} className="d-block text-center mt-4">
                                <h3 >Kasai Preston</h3>

                                <a className="githublink text-decoration-none  me-3" href="https://github.com/kasai-codes">GitHub</a>
                                <a className="linkedinlink text-decoration-none  me-3" href="https://www.linkedin.com/in/kasai-preston-b62167224/">LinkedIn</a>
                                
                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                    <Container>
                            <Row >
                                <Col xs={12}  className="text-center mt-3">
                                    <Image className="mt-2 img-fluid headshot" src={Lo} />
                                </Col>

                                <Col xs={12} className="d-block text-center mt-4">
                                <h3 >Lo Selby</h3>

                                <a className="githublink text-decoration-none  me-3" href="https://github.com/lonewolfco">GitHub</a>
                                <a className="linkedinlink text-decoration-none  me-3" href="https://www.linkedin.com/in/loselby/">LinkedIn</a>

                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                    <Container>
                            <Row >
                                <Col xs={12}  className="text-center mt-3">
                                    <Image className="mt-2 img-fluid headshot" src={Michael} />
                                </Col>

                                <Col xs={12} className="d-block text-center mt-4">
                                <h3 >Michael Iringan</h3>

                                <a className="githublink text-decoration-none  me-3" href="https://github.com/miringan">GitHub</a>
                                <a className="linkedinlink text-decoration-none  me-3" href="https://www.linkedin.com/in/michael-iringan/">LinkedIn</a>

                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                        <Container>
                             <Row >
                                <Col xs={12}  className="text-center mt-3">
                                    <Image className="mt-2 img-fluid headshot" src={Sam} />
                                </Col>

                                <Col xs={12} className="d-block text-center mt-4">
                                <h3 >Sam Vellucci</h3>

                                <a className="githublink text-decoration-none  me-3" href="https://github.com/svellucci18">GitHub</a>
                                <a className="linkedinlink text-decoration-none  me-3" href="https://www.linkedin.com/in/samantha-vellucci-89640574/">LinkedIn</a>

                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                    <Container>
                            <Row >
                                <Col xs={12}  className="text-center mt-3">
                                    <Image className="mt-2 img-fluid headshot" src={Sean} />
                                </Col>

                                <Col xs={12} className="d-block text-center mt-4">
                                <h3 >Sean Ashby</h3>
                                
                                <a className="githublink text-decoration-none me-3" href="https://github.com/seanrashby">GitHub</a>
                                <a className="linkedinlink text-decoration-none me-3" href="https://www.linkedin.com/in/sean-ashby-86b02716/">LinkedIn</a>

                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>
                    </Carousel>

                </Row>

            </Container>




        </>
    );
};


export default About;