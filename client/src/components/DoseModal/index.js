import React from "react";
import { Form, Button, Modal } from "react-bootstrap/";
import '../../styles/modal.css';

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
      <Modal.Header  className="mx-auto">
        <Modal.Title className="fs-2">
          Add a new consumable!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mt-4">
      <Form >
  <Form.Group className="mx-auto mb-4" controlId="exampleForm.ControlInput1">
    <Form.Label className="mx-auto fs-4">Consumable name</Form.Label>
    <Form.Control/>
  </Form.Group>

  <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
    <Form.Label className="mx-auto fs-4">Dosage amount</Form.Label>
    <Form.Control/>
  </Form.Group>

  <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
    <Form.Label className="fs-4">Leave a note for yourself</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

        <Button
          onClick={() => {
            addConsumable();
          }}
        className="text-end submitBtn">
          
          Submit
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button className="cancelBtn" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DoseModal;
