import { Carousel, Card, Container, Row, Col } from "react-bootstrap/";
import carousel1 from "../assets/images/happyhiker1.jpg";
import enlightend from "../assets/images/enlightend.jpg";
import meditate from "../assets/images/meditate.png";
import "../styles/Home.css";



const Home = () => {
  return (
    <Container fluid data-aos='fade-left'  data-aos-duration='900'>
      <Row className="text-center">
        <Col>
          {" "}
          <Carousel>
            <Carousel.Item interval={5000}>
              <img className="d-block"  src={carousel1} alt="First slide" />
              <Carousel.Caption>
                <h3>Microdosing</h3>
                <p>
                  Self-care meets the scientific method.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block" src={meditate} alt="Second slide" />

              <Carousel.Caption>
                <h3>Isolate a variable</h3>
                <p> Look for trends in your mood </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block " src={enlightend} alt="Third slide" />

              <Carousel.Caption >
                <h3>Record daily</h3>
                <p>
                Turn self-care into a habit
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* carousel end */}
        <Col m={12}>
        <Card className="mt-5 mx-auto">
          <Card.Body>
            <h1 className="text-center">Welcome to dose.</h1> Humans are curious, humans are experts in identifying patterns. Dose makes collecting data about your well-being simple. Run experiments on yourself and see how the data trends.
            Create your own protocol, check-in daily to record if you've microdosed and if you've taken any depressants. Rank your lifestyle on a scale of goblin mode to healthy bitch and lastly rank your mental and physical health. </Card.Body>
        </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Home;
