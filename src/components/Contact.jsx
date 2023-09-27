import React, { useState } from 'react';
import './Contact.css'; 
import { FaPhone,FaEnvelope } from "react-icons/fa6";
import Zoom from 'react-reveal/Zoom';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (    
    <div className="contact-form-container" id='contact'>
    <Zoom>
      <h2 className="center events-title" style={{'fontWeight':'300'}}><strong>CONTACT US</strong></h2>
      <div className="contact-details">
        <div className="contact-detail left">
          <span><FaPhone style={{"fontSize":"0.8rem"}}/> +91 7249735828</span>
        </div>
        <div className="contact-detail right">
          <span><FaEnvelope style={{"fontSize":"0.8rem","marginRight":"5px"}}/> crce.algozenith@gmail.com</span>
        </div>
      </div>
      <form className="form" action="https://formsubmit.co/crce.algozenith@gmail.com" method="POST">
      <Zoom>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <div className="inline-fields">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="input-field"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="submit-button register">Submit</button>
      </Zoom>
      </form>
    </Zoom>
    </div>
  );
}

export default ContactForm;
