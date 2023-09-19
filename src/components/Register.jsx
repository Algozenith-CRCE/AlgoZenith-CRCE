import React, { useState } from 'react';
import './Register.css'; 
import Fade from 'react-reveal/Fade';
// import {app} from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';



function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    rollNumber: '',
    year: '',
    branch:''
  });


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if(formData.name==='' || formData.email==='' || formData.phoneNumber==='' || formData.rollNumber==='' || formData.year==='' || formData.branch==='')
    {
      alert("Some fields are incomplete");
    }
    else{
      try{
        /*eslint-disable*/ 
        const docRef = addDoc(collection(db,"collections"), 
        /*eslint-enable*/ 
        {
              name:formData.name,
              email:formData.email,
              phoneNumber:formData.phoneNumber,
              rollNumber:formData.rollNumber,
              year:formData.year,
              branch:formData.branch,
            
            });
            console.log("successfully data stored")
            alert("Registration successful")
        } catch(e)
        {
        console.log("Couldnot store data")
        }
        };
       }
          

    

  return (
    <Fade bottom>
      <div className="register-form-container" id='contact'>
        <h2 className="center events-title">Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(event)=>setFormData((prev) => ({...prev, name: event.target.value}))}
            className="i-field"
          />
          <div className="inline-fields">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(event)=>setFormData((prev) => ({...prev, email: event.target.value}))}
              className="i-field"
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(event)=>setFormData((prev) => ({...prev, phoneNumber: event.target.value}))}
              className="i-field"
            />
          </div>
          <div className="inline-fields">
            <input
              type="number"
              name="roll-no"
              placeholder="Roll No.(4-digit)"
              onChange={(event)=>setFormData((prev) => ({...prev, rollNumber: event.target.value}))}
              className="i-field"
            />
            
            <select name="year" id="year" className='s-field' onChange={(event)=>setFormData((prev) => ({...prev, year: event.target.value}))}>
              <option disabled selected value="">Select a year</option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select> 
            
            <select name="branch" id="branch" className='s-field' onChange={(event)=>setFormData((prev) => ({...prev, branch: event.target.value}))}>
              <option disabled selected value="">Select a Branch</option>
              <option value="ComputerA">Computer A</option>
              <option value="ComputerB">Computer B</option>
              <option value="AIDS">AI-DS</option>
              <option value="ECS">ECS</option>
              <option value="Mechanical">Mechanical</option>
            </select>
          </div>
          
        <button type="submit" className="sub-button">Submit</button>
        </form>
      </div>
    </Fade>
  );
}

export default Register;
