import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import SideList from "../SideNav/SideList";

// creating functional component ans getting props from app.js and destucturing them
const StepFour = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (
      validator.isEmpty(values.keyskills1) || 
      validator.isEmpty(values.keyskills2) || 
      validator.isEmpty(values.keyskills3) || 
      validator.isEmpty(values.keyskills4)
      ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
    <SideList/>
      <Card style={{ marginTop: 100,position:'absolute',left:'32%',width:'45%'}}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Key Skill </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                defaultValue={values.keyskills1}
                placeholder="Key Skill"
                onChange={handleFormData("keyskills1")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Key Skill </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                defaultValue={values.keyskills2}
                placeholder="Key Skill"
                onChange={handleFormData("keyskills2")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Key Skill </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                defaultValue={values.keyskills3}
                placeholder="Key Skill"
                onChange={handleFormData("keyskills3")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Key Skill </Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                defaultValue={values.keyskills4}
                placeholder="Key Skill"
                onChange={handleFormData("keyskills4")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepFour;