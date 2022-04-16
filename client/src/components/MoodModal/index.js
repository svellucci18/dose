import React from "react";
import { Form, Button, Modal, ButtonGroup } from "react-bootstrap/";

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
        <Modal.Title>Track your current mood</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label >Did you dose?</Form.Label>
            <div>  <Button className="m-3">Yes</Button>
             <Button>No</Button>
            </div>
          </Form.Group>


          <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlInput1">
            <Form.Label >How do you feel today? Rate how you feel mentally below.</Form.Label>
          <div>
              <Button className="mx-auto">1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button> <Button>5</Button>
          </div>
    
 

          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Leave a note for yourself</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <Button
          onClick={() => {
            addMood();
          }}
          className="text-end"
        >
          Submit
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoodModal;
