import React from "react";
import { Card } from "react-bootstrap";
import JsPDF from 'jspdf';

const generatePDF = () => {

  const report = new JsPDF('portrait','pt','a4');
  report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
  });}

const StepFive = ({ values }) => {

    //destructuring the object from values
  const { firstName, lastName,phone,email,address,city,state,objectives, university, degree , syear, eyear, jobtitle,organisation, startyear,endyear, keyskills1, keyskills2, keyskills3, keyskills4} = values;
  return (
    <div>
<div id="report">
      <Card style={{ marginTop: 100, textAlign: "left"}}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Telephone :</strong> {phone}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Address :</strong> {address}{" "}
          </p>
          <p>
            <strong>City :</strong> {city}{" "}
          </p>
          <p>
            <strong>Objectives :</strong> {objectives}{" "}
          </p>
          <p>
            <strong>State :</strong> {state}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>University :</strong> {university}{" "}
          </p>
          <p>
            <strong>Degree :</strong> {degree}{" "}
          </p>
          <p>
          <p>
            <strong>Start Year :</strong> {syear}{" "}
          </p>
          <p>
            <strong>End Year :</strong> {eyear}{" "}
          </p>
            <strong>Job Title :</strong> {jobtitle}{" "}
          </p>
          <p>
            <strong>Organisation  :</strong> {organisation}{" "}
          </p>
          <p>
            <strong>Start Year :</strong> {startyear}{" "}
          </p>
          <p>
            <strong>End Year :</strong> {endyear}{" "}
          </p>
          <p>
            <strong>Key Skill :</strong> {keyskills1}{" "}
          </p>
          <p>
            <strong>Key Skill :</strong> {keyskills2}{" "}
          </p>
          <p>
            <strong>Key Skill :</strong> {keyskills3}{" "}
          </p>
          <p>
            <strong>Key Skill :</strong> {keyskills4}{" "}
          </p>
        </Card.Body>
      </Card>
    </div>
    <button id="Button" onClick={generatePDF} type="button">Export PDF</button>
    <br /> <br /> <br /> <br />
    </div>
    
  );
};

export default StepFive;
