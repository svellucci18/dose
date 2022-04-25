// import React from "react";
import { useState } from "react";
import { Form, Button, Modal, Dropdown } from "react-bootstrap/";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_MOOD } from '../../utils/mutations';
import { QUERY_ME } from "../../utils/queries";
import '../../styles/modal.css';

const MoodModal = (props) => {
  const [dosed, setDosedState] = useState('');
  const [depressants, setDepressantsState] = useState('');
  const [lifestyle, setLifestyleState] = useState('');
  const [physicalHealth, setPhysicalHealthState] = useState('');
  const [mentalHealth, setMentalHealthState] = useState('');
  const [comment, setCommentState] = useState('');
  const [consumableId, setConsumableState] = useState('');

  const [addMood] = useMutation(ADD_MOOD);
  
   // for submitting the form and pushing the data to the database
   const handleFormSubmit =  async (event) => {
    event.preventDefault();

    const {data} = await addMood({
      variables: {
        dosed,
        depressants,
        lifestyle,
        physicalHealth,
        mentalHealth,
        comment,
        consumableId,
      },
    });
    // console.log(data)
    setDosedState('');
    setDepressantsState('');
    setLifestyleState('');
    setPhysicalHealthState('');
    setMentalHealthState('');
    setCommentState('');

    document.location.reload();
    // console.log("mood added");
  };

    //for filling out the form with user input typing
    const handleChange = (event) => {
      const { name, value } = event.target;
      // console.log(name, value);
      // if (name === 'consumableId') {
      //   setConsumableState(value);
      // };
      if (name === 'dosed') {
        console.log(value);
        setDosedState(value === 'true');
        // if (value == "true") {
        // setDosedState(true)
        // } else {
        //   setDosedState(false)
        // };
        const variable = document.getElementById("selectId");
        console.log(variable.value);
        setConsumableState(variable.value);
        console.log(dosed);
      }
      if (name === 'depressants') {
        console.log(value);
        setDepressantsState(value === 'true');
        // if (value == "true") {
        //   setDepressantsState(true)
        //   } else {
        //     setDepressantsState(false)
        //   };
        console.log(depressants);
      } 
      if (name === 'lifestyle') {
        console.log(value);
        setLifestyleState((value));
        console.log(lifestyle);
      };  
      if (name === 'physicalHealth') {
        console.log(value);
        setPhysicalHealthState(parseInt(value));
        console.log(physicalHealth);
      }
      if (name === 'mentalHealth') {
        console.log(value);
        setMentalHealthState(parseInt(value));
        console.log(mentalHealth);
      } 
      if (name === 'comment') {
        console.log(value);
        setCommentState(value);
        console.log(comment);
      };

    };

    //query the database of consumables so that we can print it in the dropdown menu
    const { data, loading } = useQuery(QUERY_ME);
    // console.log(data);

  return (
    <Modal
      {...props}
      className="modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="mx-auto">
        <Modal.Title className="fs-2">Track your current mood</Modal.Title>
      </Modal.Header>


      <Modal.Body className="mt-5">
        <Form onSubmit={handleFormSubmit}>


          {/* PUT DROPDOWN */}      
          <Form.Group className="mb-5 text-center fs-5">
          
              {/* What dosing trial is this mood associated with? */}
              {/* <Dropdown>
                <Dropdown.Toggle  className="text-wrap trialDropdown" variant="black">
                  Select Dosing Trial
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
               
                  {data.me.consumables.map((data) => (
                  <Dropdown.Item key={data._id} name={"consumableId"} value={data._id}>
                    {data.name} 
                  </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown> */}

              <Form.Label >Select Dosing Trial</Form.Label>
              <br></br>
              <select id="selectId">
                <option value="na">n/a</option>
              {data.me.consumables.map((data) => (
                  <option key={data._id} name={"consumableId"} value={data._id}>
                    {data.name} 
                  </option>
                  ))}
              </select> 

            
          </Form.Group>


          {/* Did you dose */}
          <Form.Group className="mb-5 text-center fs-5" controlId="exampleForm.ControlInput1">
            <Form.Label >Did you dose?</Form.Label>
            <div className="mx-auto">  
              <Button name="dosed" value={true} onClick={handleChange} className="me-2 btn-dark moodBtn positiveScoreHover">Yes</Button>
              <Button name="dosed" value={false} onClick={handleChange} className="me-2 btn-dark moodBtn lowScoreHover">No</Button>
            </div>
          </Form.Group>


          {/* Depressants */}
          <Form.Group className="mb-5 text-center fs-5" controlId="exampleForm.ControlInput1">
            <Form.Label >Did you take any depressants today (ie alcohol/medications)?</Form.Label>
            <div className="mx-auto">  
              <Button name="depressants" value={true} onClick={handleChange} className="me-2 btn-dark moodBtn positiveScoreHover">Yes</Button>
              <Button name="depressants" value={false} onClick={handleChange} className="me-2 btn-dark moodBtn lowScoreHover">No</Button>
            </div>
          </Form.Group> 


          {/* Lifestyle  */}
          <Form.Group className="mb-5 text-center fs-5" controlId="exampleForm.ControlInput1">
            <Form.Label >Rate the healthiness of your lifestyle today.</Form.Label>
          <div className="mx-auto">
              <Button name="lifestyle" onClick={handleChange} className="mx-2 btn-dark moodBtn lowScoreHover" value={1}>Goblin Mode</Button> 
              <Button name="lifestyle" onClick={handleChange} className="mx-2 btn-dark moodBtn lowScoreHover" value={2}>Couch Potato</Button> 
              <Button name="lifestyle" onClick={handleChange} className="mx-2 btn-dark moodBtn avgScoreHover" value={3}>Average</Button> 
              <Button name="lifestyle" onClick={handleChange} className="mx-2 btn-dark moodBtn positiveScoreHover" value={4}>Trying</Button> 
              <Button name="lifestyle" onClick={handleChange} className="mx-2 btn-dark moodBtn positiveScoreHover" value={5}>Healthy Bitch</Button>
          </div>
          </Form.Group>
          {/* Physical  */}
          <Form.Group className="mb-5 text-center fs-5" controlId="exampleForm.ControlInput1">
            <Form.Label >How does your physical body feel today?</Form.Label>
          <div className="mx-auto">
              <Button name="physicalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn lowScoreHover" value={1}>Barely Alive</Button> 
              <Button name="physicalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn lowScoreHover" value={2}>Pain (tip to taint)</Button> 
              <Button name="physicalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn avgScoreHover" value={3}>Average</Button> 
              <Button name="physicalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn positiveScoreHover" value={4}>Pissing Excellence</Button> 
              <Button name="physicalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn positiveScoreHover" value={5}>Strong AF</Button>
          </div>
          </Form.Group>
          {/* Mental  */}
          <Form.Group className="mb-5 text-center fs-5" controlId="exampleForm.ControlInput1">
            <Form.Label >How do you feel today? Rate your mental health?</Form.Label>
          <div className="mx-auto">
              <Button name="mentalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn lowScoreHover" value={1}>Barely Alive</Button> 
              <Button name="mentalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn lowScoreHover" value={2}>Debbie Downer</Button> 
              <Button name="mentalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn avgScoreHover" value={3}>Average</Button> 
              <Button name="mentalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn positiveScoreHover" value={4}>Elated Eleanor</Button> 
              <Button name="mentalHealth" onClick={handleChange} className="mx-2 btn-dark moodBtn positiveScoreHover" value={5}>High AF</Button>
          </div>
          </Form.Group>


          {/* Comments */}
          <Form.Group className="mb-4 fs-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detail your experience today including highs and/or lows.</Form.Label>
            <Form.Control as="textarea" rows={3} name="comment" value={comment} onChange={handleChange}/>
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
