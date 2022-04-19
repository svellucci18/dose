import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap/";
import { useMutation } from '@apollo/client';
import {ADD_CONSUMABLE} from '../../utils/mutations';
import Auth from '../../utils/auth';
// import ConsumableList from '../ConsumableList'
import '../../styles/modal.css';

const DoseModal = (props) => {
  const [name, setNameState] = useState('');
  const [dosage, setDosageState] = useState('');
  const [note, setNoteState] = useState('');
  
  const [addConsumable] = useMutation(ADD_CONSUMABLE);

  // for submitting the form and pushing the data to the database
  const handleFormSubmit =  async (event) => {
    event.preventDefault();
    console.log(name);
    console.log(dosage);
    console.log(note);

    const {data} = await addConsumable({
      variables: {
        name,
        dosage,
        note,
      },
    });
    console.log(data)
    setNameState('');
    setDosageState('');
    setNoteState('');

    console.log("consumable added");
  };

  //for filling out the form with user input typing
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
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
        <Modal.Title className="fs-2">
          Add a new consumable!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mt-4">
      <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mx-auto mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label className="mx-auto fs-4">Consumable name</Form.Label>
            <Form.Control name="name" value={name} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label className="mx-auto fs-4">Dosage amount</Form.Label>
            <Form.Control name="dosage" value={dosage} onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fs-4">Leave a note for yourself</Form.Label>
            <Form.Control as="textarea" rows={3} name="note" value={note} onChange={handleChange} />
          </Form.Group>

          {/* should this button be inside or outside of the form? */}
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

export default DoseModal;
