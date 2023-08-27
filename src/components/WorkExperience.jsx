import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import SideList from "../SideNav/SideList";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values}) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.jobtitle) || 
      validator.isEmpty(values.organisation) ||
      validator.isEmpty(values.startyear) ||
      validator.isEmpty(values.endyear) 
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <SideList/>
      <Card style={{ marginTop: 100,position:'absolute',left:'32%',width:'45%' }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
          <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.jobtitle}
                type="text"
                placeholder="jobtitle"
                onChange={handleFormData("jobtitle")}
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
              <Form.Label>Organisation</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.organisation}
                type="text"
                placeholder="Organisation"
                onChange={handleFormData("organisation")}
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
              <Form.Label>Start Year</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.startyear}
                type="Date"
                placeholder="Start Year"
                onChange={handleFormData("startyear")}
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
              <Form.Label>End Year</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={values.endyear}
                type="Date"
                placeholder="End Year"
                onChange={handleFormData("endyear")}
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
              Continue
            </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepThree;