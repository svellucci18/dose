import React, { useState } from "react";
import { Form, Button, Modal, ButtonGroup } from "react-bootstrap/";
import { useMutation } from '@apollo/client';
import {ADD_MOOD} from '../../utils/mutations';
import '../../styles/modal.css';

const MoodModal = (props) => {
  const [dosed, setDosedState] = useState('');
  const [depressants, setDepressantsState] = useState('');
  const [lifestyle, setLifestyleState] = useState('');
  const [physicalHealth, setPhysicalHealthState] = useState('');
  const [mentalHealth, setMentalHealthState] = useState('');
  const [comment, setCommentState] = useState('');

  const [addConsumable] = useMutation(ADD_MOOD);
  
   // for submitting the form and pushing the data to the database
   const handleFormSubmit =  async (event) => {
    event.preventDefault();
    console.log(dosed);

    const {data} = await addConsumable({
      variables: {
        dosed,
        depressants,
        lifestyle,
        physicalHealth,
        mentalHealth,
        comment,
      },
    });
    console.log(data)
    setDosedState('');
    setDepressantsState('');
    setLifestyleState('');
    setPhysicalHealthState('');
    setMentalHealthState('');
    setCommentState('');

    console.log("mood added");
  };

    //for filling out the form with user input typing
    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(name, value);
      if (name === 'dosed') {
        setDosedState(value);
      }
      if (name === 'depressants') {
        setDepressantsState(value);
      } 
      if (name === 'lifestyle') {
        setLifestyleState(value);
      };  
      if (name === 'physicalHealth') {
        setPhysicalHealthState(value);
      }
      if (name === 'mentalHealth') {
        setMentalHealthState(value);
      } 
      if (name === 'comment') {
        setCommentState(value);
      };
  
    };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="mx-auto">
        <Modal.Title className="fs-2">Track your current mood</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mt-4">
        <Form onSubmit={handleFormSubmit}>
          {/* PUT DROPDOWN */}      
          <Form.Group>
            <Form.Label>What dosing trial is this mood associated with?
              <Form.Control/>
            </Form.Label>
          </Form.Group>
          {/* Did you dose */}
          <Form.Group className="mb-5 text-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-4">Did you dose?</Form.Label>
            <div className="mx-auto">  
              <Button className="me-2 btn-dark moodBtn">Yes</Button>
              <Button className="me-2 btn-dark moodBtn">No</Button>
            </div>
          </Form.Group>
          {/* Depressants */}
          <Form.Group className="mb-5 text-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-4">Did you take any depressants today (ie alcohol/medications)?</Form.Label>
            <div className="mx-auto">  
              <Button className="me-2 btn-dark moodBtn">Yes</Button>
              <Button className="me-2 btn-dark moodBtn">No</Button>
            </div>
          </Form.Group>       
          {/* Lifestyle  */}
          <Form.Group className="mb-5 text-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-4" >Rate the healthiness of your lifestyle today.</Form.Label>
          <div className="mx-auto">
              <Button className="mx-2 btn-dark moodBtn" value="1">Goblin Mode</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="2">Couch Potato</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="3">Average</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="4">Trying</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="5">Healthy Bitch</Button>
          </div>
          </Form.Group>
          {/* Physical  */}
          <Form.Group className="mb-5 text-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-4" >How does your physical body feel today?</Form.Label>
          <div className="mx-auto">
              <Button className="mx-2 btn-dark moodBtn" value="1">Barely Alive</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="2">Pain (tip to taint)</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="3">Average</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="4">Pissing Excellence</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="5">Strong AF</Button>
          </div>
          </Form.Group>
          {/* Mental  */}
          <Form.Group className="mb-5 text-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-4" >How do you feel today? Rate your mental health?</Form.Label>
          <div className="mx-auto">
              <Button className="mx-2 btn-dark moodBtn" value="1">Barely Alive</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="2">Debbie Downer</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="3">Average</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="4">Elated Eleanor</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="5">High AF</Button>
          </div>
          </Form.Group>
          {/* Comments */}
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fs-4">Detail your experience today including highs and/or lows.</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button type="submit"
          className="text-end submitBtn">
            Submit
          </Button>

        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button className="cancelBtn" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoodModal;
