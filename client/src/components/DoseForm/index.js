
import React, {useState} from 'react';
import {  Form, Button } from "react-bootstrap/";




const DoseList = () => {








return( 








<Form>
    <Form.Group className="mb-3">
      <Form.Label>Consumable Name</Form.Label>
      <Form.Control placeholder="LSD" />
    </Form.Group>
  
    <Form.Group className="mb-3">
      <Form.Label>Dose</Form.Label>
      <Form.Control placeholder="0.5mg" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Note</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>


    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>)
  

}


    



export default DoseList;

