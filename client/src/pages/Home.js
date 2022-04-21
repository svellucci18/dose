import { Carousel, Card, Container, Row, Col } from "react-bootstrap/";
import carousel1 from "../assets/images/dopeDose.png";
import enlightend from "../assets/images/lakeguy.png";
import meditate from "../assets/images/happyhiker1.jpg";
import "../styles/Home.css";



const Home = () => {
  return (
<>

    <Container fluid data-aos='fade-left'  data-aos-duration='900'>
      <Row className="text-center">
        <Col>
         
          <Carousel>
            <Carousel.Item interval={5000}>
              <img className="d-block"  src={carousel1} alt="girl smiling in nature" />
              <Carousel.Caption className="text-bg">
                <h3>Microdosing</h3>
                <p>
                  Self-care meets the scientific method.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block" src={meditate} alt="Sman meditating in field" />

              <Carousel.Caption className="text-bg">
                <h3>Isolate a variable</h3>
                <p> Look for trends in your mood </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block " src={enlightend} alt="man standing at edge of dock on a lake" />

              <Carousel.Caption className="text-bg">
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
        <Card className="mt-5 mx-auto dose" style={{height: '393px'}}>
          <Card.Body>
            <h1 className="text-center">Welcome to <spane className="micro">dose.</spane></h1> Microdosing psychedelics is the practice of consuming very low, 
            sub-hallucinogenic doses of a psychedelic substance, such as lysergic acid diethylamide (LSD) or psilocybin-containing mushrooms. Microdosing has seen a rapid explosion of popularity in recent years. Individuals who microdose report minimal acute effects from these substances yet claim a range of long-term general health and wellbeing benefits. With <spane className="microDose">dose.</spane> you can track your own experience with microdosing and the effects it has had on your health!
            
            </Card.Body>
        </Card>
        </Col>

      </Row>
    </Container>
</>
  );
};

export default Home;
