import { Container, Row, Col, Button } from "react-bootstrap/";
import DoseModal from '../components/DoseModal'
import MoodModal from '../components/MoodModal'
import { useState } from "react";

const Dashboard = () => {

  const [openModal, setOpenModal] = useState(false);
  

  return (
    <Container>
        <Row>
            <h1 className="text-center mt-5">Welcome! { }</h1>
        </Row>
      <Row className="mt-5">

        <Col className="mx-auto col-lg-6">

        <Button variant="dark" size="lg" onClick={() => {
          setOpenModal(true);
        }} >
       Track new dose
        </Button >

        <DoseModal
        show={openModal}
        onHide={() => setOpenModal(false)}/>

        </Col>

        <Col >

        <Button variant="dark" size="lg" onClick={() => {
          setOpenModal(true);
        }} >
       Track new mood
        </Button >
        
        <MoodModal show={openModal}
        onHide={() => setOpenModal(false)}/>

        </Col>


      </Row>
      <Row>
        <Col>
        {/* list of user drugs */}
        
        </Col>
      </Row>








    </Container>
  );
};
export default Dashboard;
