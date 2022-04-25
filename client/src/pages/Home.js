import { Carousel, Card, Container, Row, Col } from "react-bootstrap/";
import carousel1 from "../assets/images/dopeDose.png";
import enlightend from "../assets/images/lakeguy.png";
import meditate from "../assets/images/happyhiker1.jpg";
import mushroomvariety from '../assets/images/mushroomvariety.jpg';
import focusflora from '../assets/images/focusflora.jpg';
import mushroomcal from '../assets/images/mushroomcal.jpg';
import "../styles/Home.css";



const Home = () => {
  return (
<>

    <Container >
      <Row className="my-5">

        <Col sm={7} md={8} className="col-xs-pull-12">
         
          <Carousel fluid data-aos='fade-left'  data-aos-duration='900'>

            <Carousel.Item interval={5000}>
              <img className="d-block img-fluid"  src={mushroomvariety} alt="different types of mushrooms" />
              <Carousel.Caption className="text-bg">
                <h3>Microdosing</h3>
                <p>
                  Self-care meets the scientific method.
                </p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={5000}>
              <img className="d-block img-fluid" src={focusflora} alt="flower bush"  />

              <Carousel.Caption className="text-bg">
                <h3>Isolate a variable</h3>
                <p> Look for trends in your mood </p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={5000}>
              <img className="d-block img-fluid" src={mushroomcal} alt="mushrooms next to a calendar on an ipad"  />


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

        
        <Col sm={5} md={4} className="col-xs-push-12 mx-auto d-flex align-items-center justify-content-end  homeHeader">
        <Card className="mt-5 mx-auto headerCard" >
          <Card.Body className="text-center cardBody">
            Gain Insight on how Microdosing is Affecting your Moods
            
            </Card.Body>
        </Card>
        </Col>

      </Row>
      <Row>
      <Card className="my-5 mx-auto dose">
          <Card.Body >
            <h2 className="text-center">Welcome to dose.</h2> 
            Microdosing psychedelics is the practice of consuming very low, 
            sub-hallucinogenic doses of a psychedelic substance, such as lysergic acid diethylamide (LSD) or psilocybin-containing mushrooms. Microdosing has seen a rapid explosion of popularity in recent years. Individuals who microdose report minimal acute effects from these substances yet claim a range of long-term general health and wellbeing benefits. With Dose you can track your own experience with microdosing and the effects it has had on your health!
            
            </Card.Body>
        </Card>
      </Row>
    </Container>
</>
  );
};

export default Home;
