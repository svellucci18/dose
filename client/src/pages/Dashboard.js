import { Container, Row, Col, Button, Card } from "react-bootstrap/";
import DoseModal from "../components/DoseModal";
import MoodModal from "../components/MoodModal";
import { useState } from "react";
import useDate from "../utils/useDate";
import Auth from '../utils/auth';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';



// import css
import '../styles/dashboard.css';

import DataChart from "../components/Chart";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const [openMood, setOpenMood] = useState(false);

  const { date, time, wish } = useDate();
  
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  
  if (!user?.username) {
    return (
  
      <Container style={{ width: '25rem', marginTop: "100px" }}>
          
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Train_wreck_at_Montparnasse_1895.jpg" />
        <Card.Body>
           
        <h1>You need to be logged in to see this!</h1>
          <Link className="btn btn-outline-dark mt-3" to="/login">login</Link>
          </Card.Body>
              </Container>
    );
  }


  
  

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

    <div>
      <DataChart />
    </div>

    </>
  );
};
export default Dashboard;
