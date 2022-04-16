import { Container, Row, Col, Button } from "react-bootstrap/";
import DoseModal from "../components/DoseModal";
import MoodModal from "../components/MoodModal";
import { useState } from "react";
import useDate from "../utils/useDate";

// import css
import '../styles/dashboard.css';


const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMood, setOpenMood] = useState(false);

  const { date, time, wish } = useDate();

  return (

    <>
     <div className="rainbowMiniHeader d-flex justify-content-between align-items-center">
        <div className="arrow">
            <h4 className="pb-4 pt-4">  {wish} [username] -- {time} {date}</h4>
        </div>
      </div>

    <Container>

      <Row className="mt-5 ">

        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <Button
           className="p-3 fs-2"
            variant="dark"
            size="lg"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Track new dose

             
          </Button>
 <DoseModal show={openModal} onHide={() => setOpenModal(false)} />
        

        </Col>

        <Col xs={6} className="d-flex align-items-center justify-content-center">
          <Button
            className="p-3 fs-2"
            variant="dark"
            size="lg"
            onClick={() => {
              setOpenMood(true);
            }}
          >
            Track new mood
          </Button>

          <MoodModal show={openMood}
        onHide={() => setOpenMood(false)}/> 

        </Col>

      </Row>
    </Container>
    

    <Container>
      <Row>

        <Col>
        {/* list of user drugs */}
        </Col>

      </Row>
    </Container>

    </>
  );
};
export default Dashboard;
