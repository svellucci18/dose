import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap/";
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import {ADD_CONSUMABLE} from '../../utils/mutations';
// import ConsumableList from '../ConsumableList'

const DoseModal = (props) => {
  const [nameState, setNameState] = useState('');
  const [dosageState, setDosageState] = useState('');
  const [noteState, setNoteState] = useState('');
  
  const [addConsumable] = useMutation(ADD_CONSUMABLE);

  // for submitting the form and pushing the data to the database
  const handleFormSubmit =  async (event) => {
    const {data} = await addConsumable({
      variables: {
        
      },
    });
    console.log("consumable added");
  };

  //for filling out the form with user input typing
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setNameState(value);
    }
    if (name === 'dosage') {
      setDosageState(value);
    } 
    if (name === 'note') {
      setNoteState(value);
    };  

  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className="mx-auto">
        <Modal.Title>
          Add a new consumable!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
      <Form >
  <Form.Group className="mx-auto" controlId="exampleForm.ControlInput1">
    <Form.Label name="name" value={nameState} className="mx-auto" onChange={handleChange}>Consumable name</Form.Label>
    <Form.Control/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label name="dosage" value={dosageState}  className="mx-auto" onChange={handleChange}>Dosage amount</Form.Label>
    <Form.Control/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label  name="note" value={noteState} onChange={handleChange}>Leave a note for yourself</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

        <Button
          onClick={() => {
            handleFormSubmit();
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
