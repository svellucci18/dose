import { Carousel, Card, Container, Row, Col } from "react-bootstrap/";
import carousel1 from "../assets/images/happyhiker1.jpg";
import lakeguy from "../assets/images/lakeguy.png";
import enlight from "../assets/images/enlightend.jpg";
import "../styles/Home.css";


const styles = {
 carouselContent: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
color: "white",
}
}


const Home = () => {
  return (
    <Container fluid data-aos='fade-left'  data-aos-duration='900'>
      <Row className="text-center">
        <Col>
          {" "}
          <Carousel  >
            <Carousel.Item interval={5000} >
              <img className="d-block"  src={carousel1} alt="First slide" />
              <Carousel.Caption   style={styles.carouselContent}>
                <h3>Microdosing</h3>
                <p>
                  Self-care meets the scientific method.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block" src={enlight} alt="Second slide" />

              <Carousel.Caption style={styles.carouselContent}>
                <h3>Isolate a variable</h3>
                <p> Look for trends in your mood </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block " src={lakeguy} alt="Third slide" />

              <Carousel.Caption style={styles.carouselContent}>
                <h3>Record daily</h3>
                <p>
                Turn self-care into a habit
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

        
        <Col m={12}>
        <Card className="mt-5">
          <Card.Body>
            <h1 >Welcome to dose.</h1>The phenomenon of ‘microdosing’, that is, regular ingestion of very small quantities of psychedelic substances, has seen a rapid explosion of popularity in recent years. Individuals who microdose report minimal acute effects from these substances yet claim a range of long-term general health and wellbeing benefits. Finally with Dose you can actively data log your own personal usage of microdosing psychedelics as a means to improve mental and physical health. </Card.Body>
        </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Home;
