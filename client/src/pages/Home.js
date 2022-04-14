import { Carousel, Card, Container, Row, Col } from "react-bootstrap/";
import carousel1 from "../assets/images/happyhiker1.jpg";
import enlightend from "../assets/images/enlightend.jpg";
import meditate from "../assets/images/meditate.png";
import "../styles/Home.css";



const Home = () => {
  return (
    <Container fluid data-aos='fade-left'  data-aos-duration='900'>
      <Row>
        <Col>
          {" "}
          <Carousel>
            <Carousel.Item interval={5000}>
              <img className="d-block " src={carousel1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block" src={meditate} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img className="d-block " src={enlightend} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* carousel end */}
        <Col m={12}>
        <Card className="mt-5 mx-auto">
          <Card.Body>
            <h1 className="text-center">Welcome to dose.</h1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?</Card.Body>
        </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Home;
