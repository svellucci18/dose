import { useState } from 'react';
import { Link } from 'react-router-dom';


import '../styles/about.css';
import {  Container, Carousel, Image, Col, Card, Row, ListGroup, ListGroupItem } from "react-bootstrap/";

// import images
import mushroom from '../assets/images/mushroom.png';
import Lo from '../assets/images/loselby.png';



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
                    <div className="fs-3 text-center">
                    Dose is an intent-based, though-provoking app, designed to educate and support the use of microdosing to aid with mental health struggles and self-awareness.
                    <br/>
                    <br/>
                    By using dose, you can document your dosing journey, track your moods, and through our analytical insights see how your moods are changing over time.
                    </div>
                </Row>

                <Row className="py-5 mushroomImageRow">
                    <div className="d-flex justify-content-center align-items-center ">
                        <img src={mushroom} width="140" height="140" alt="mushroom"  />
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
                                <Col xs={12} md="auto">
                                    <Image className="mt-2 img-fluid LoImage" src={Lo} />
                                </Col>

                                <Col xs={12} md="auto" className="d-block mx-auto my-auto">
                                <h2 >Kasai Preston</h2>
                                <br/>
                                <br/>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">GitHub</a>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">LinkedIn</a>

                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                    <Container>
                            <Row >
                                <Col xs={12} md="auto">
                                    <Image className="mt-2 img-fluid LoImage" src={Lo} />
                                </Col>

                                <Col xs={12} md="auto" className="d-block mx-auto my-auto">
                                <h2 >Lo Selby</h2>
                                <br/>
                                <br/>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">GitHub</a>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">LinkedIn</a>

                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                    <Container>
                            <Row >
                                <Col xs={12} md="auto">
                                    <Image className="mt-2 img-fluid LoImage" src={Lo} />
                                </Col>

                                <Col xs={12} md="auto" className="d-block mx-auto my-auto">
                                <h2 >Michael Ingrin</h2>
                                <br/>
                                <br/>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">GitHub</a>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">LinkedIn</a>

                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                        <Container>
                             <Row >
                                <Col xs={12} md={6}>
                                    <Image className="mt-2 img-fluid LoImage" src={Lo} />
                                </Col>

                                <Col xs={12} md={6} className="d-block mx-auto my-auto">
                                <h2 >Sam Velluci</h2>
                                <br/>
                                <br/>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">GitHub</a>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">LinkedIn</a>

                                </Col>
                            </Row>
                        </Container>
                        
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                    <Container>
                            <Row >
                                <Col xs={12} md={6} >
                                    <Image className="mt-2 img-fluid LoImage" src={Lo} />
                                </Col>

                                <Col xs={12} md={6} className="d-block mx-auto my-auto">
                                <h2 >Sean Ashby</h2>
                                <br/>
                                <br/>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">GitHub</a>
                                <a className="text-decoration-none text-black me-3" href="https://github.com/lonewolfco">LinkedIn</a>

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