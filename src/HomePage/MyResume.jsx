import React from 'react'
import { useState } from "react";
import StepOne from "../components/PersonalDetails";
import StepTwo from "../components/Education";
import StepThree from "../components/WorkExperience";
import StepFour from "../components/KeySkills";
import StepFive from "../components/Finals";


function MyResume() {
   //state for steps
   const [step, setstep] = useState(1);

   //state for form data
   const [formData, setFormData] = useState({
     firstName: "",
     lastName: "",
     phone:"",
     email:"",
     address:"",
     city:"",
     state:"",
     objectives:"",
     university:"",
     degree:"",
     syear:"",
     eyear:"",
     jobtitle:"",
     organisation:"",
     startyear:"",
     endyear:"",
     keyskills1:"",
     keyskills2:"",
     keyskills3:"",
     keyskills4:"",
   })
 
   // function for going to next step by increasing step state by 1
   const nextStep = () => {
     setstep(step + 1);
   };
 
   // function for going to previous step by decreasing step state by 1
   const prevStep = () => {
     setstep(step - 1);
   };
 
   // handling form input data by taking onchange value and updating our previous form data state
   const handleInputData = input => e => {
     // input value from the form
   const {value } = e.target;
 
     //updating for data state taking previous state and then adding new value to create new object
   setFormData(prevState => ({
       ...prevState,
       [input]: value
   }));
   }
   
    switch (step) {
        case 1: return <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        case 2: return <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        case 3: return <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        case 4: return <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        case 5: return <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        default: return (<div className="App"></div>);
      }
}

export default MyResume

