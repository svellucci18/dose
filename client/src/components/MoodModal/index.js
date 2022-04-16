import React from "react";
import { Form, Button, Modal, ButtonGroup } from "react-bootstrap/";

import '../../styles/modal.css';

const MoodModal = (props) => {
  
  const addMood = () => {
    console.log("mood added");
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
        <Form>
          <Form.Group className="mb-5 text-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-4">Did you dose?</Form.Label>
            <div className="mx-auto">  
              <Button className="me-2 btn-dark moodBtn">Yes</Button>
             <Button className="me-2 btn-dark moodBtn">No</Button>
            </div>
          </Form.Group>


          <Form.Group className="mb-5 text-center" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-4" >How do you feel today? Rate how you feel mentally below.</Form.Label>
          <div className="mx-auto">
              <Button className="mx-2 btn-dark moodBtn" value="1">1</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="2">2</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="3">3</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="4">4</Button> 
              <Button className="mx-2 btn-dark moodBtn" value="5">5</Button>
          </div>

          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fs-4">Leave a note for yourself</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <Button
          onClick={() => {
            addMood();
          }}
          className="text-end submitBtn"
        >
          Submit
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button className="cancelBtn" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoodModal;
