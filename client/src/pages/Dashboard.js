import { Container, Row, Col, Button, Card } from "react-bootstrap/";
import DoseModal from "../components/DoseModal";
import MoodModal from "../components/MoodModal";
import { useState } from "react";
import useDate from "../utils/useDate";

import ConsumableList from "../components/ConsumableList";
import Auth from '../utils/auth';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

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

  // broken code by s, k, and m
  // if (!user?.username) {
  //   return (
  //     // <h4>
  //     //   You need to be logged in to see this. Use the navigation links above to
  //     //   sign up or log in!
  //     // </h4>
  //         <Container>
  //         <Card className="mx-auto" style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F254242341451286817%2F&psig=AOvVaw3UGJl2STSkczE0UPq_8mwI&ust=1650428320992000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJigjuCin_cCFQAAAAAdAAAAABAQ" />
  //       <Card.Body>
  //           <Card.Title>Card Title</Card.Title>
  //         <Card.Text>
  //     You need to be logged in to see this. Use the navigation links above to sign up or log in!
  //         </Card.Text>
  //         <Button variant="primary">login</Button>
  //         </Card.Body>
  //           </Card>
  //           </Container>
  //   );
  // }


  
  

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

          <MoodModal show={openMood} onHide={() => setOpenMood(false)} />
        </Col>
      </Row>
    </Container>
    

    <Container>
      <Row>

        <Col>
        <ConsumableList/>
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
