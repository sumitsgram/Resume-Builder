import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import SideList from "../SideNav/SideList";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if ( 
    validator.isEmpty(values.university) || 
    validator.isEmpty(values.degree) || 
    validator.isEmpty(values.syear) || 
    validator.isEmpty(values.eyear)
    )
        {
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
              <Form.Label>University</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="University"
                onChange={handleFormData("university")}
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
              <Form.Label>Degree</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="Degree"
                onChange={handleFormData("degree")}
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
                defaultValue={values.syear}
                type="Date"
                placeholder="Start Year"
                onChange={handleFormData("syear")}
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
                defaultValue={values.eyear}
                type="Date"
                placeholder="End Date"
                onChange={handleFormData("eyear")}
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
    </>
  );
};

export default StepTwo;
