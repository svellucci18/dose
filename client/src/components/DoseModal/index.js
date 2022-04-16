import React from "react";
import { Form, Button, Modal } from "react-bootstrap/";

const DoseModal = (props) => {


  const addConsumable = () => {
    console.log("consumable added");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className="text-center">
        <Modal.Title>
          Add a new consumable!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Consumable name</Form.Label>
    <Form.Control/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Dosage amount</Form.Label>
    <Form.Control/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Leave a note for yourself</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

        <Button
          onClick={() => {
            addConsumable();
          }}
        className="text-end">
          
          Submit
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DoseModal;
