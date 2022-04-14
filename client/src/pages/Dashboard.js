import { Container, Row, Col, Button } from "react-bootstrap/";
import DoseForm from '../components/DoseForm'


const Dashboard = () => {

  

  return (
    <Container>
        <Row>
            <h1 className="text-center mt-5">Welcome! { }</h1>
        </Row>
      <Row className="mt-5">

        <Col className="mx-auto col-lg-6">
          <Button className="col-lg-6" variant="dark" size="lg">
            Track new dose
          </Button>{" "}
        </Col>
        <Col >
          <Button className="col-lg-6" variant="dark" size="lg">
            View doses
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
      </Row>

<DoseForm/>






    </Container>
  );
};
export default Dashboard;
