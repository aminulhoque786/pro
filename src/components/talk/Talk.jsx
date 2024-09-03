import React, { useState } from "react";
import "./talk.css"
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Col, Container, Row } from 'react-bootstrap'
const Talk = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      // Function to handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      // Function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form data submission
        console.log('Form Data Submitted:', formData);
      };
    
      // Inline styles for the form
      const formStyle = {
        backgroundColor: 'black',
        padding: '20px',
        borderRadius: '8px',
        color: 'white',
        maxWidth: '400px',
        margin: 'auto',
      };
    
      const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#333',
        color: 'white',
      };
    
      const placeholderStyle = {
        color: 'white',
        opacity: '0.7',
      };
    
      const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#444',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      };
    
  return (
   <section id="talk">

<Container>
    <Row>

<Col lg={7}>
    <div className="yah">
<div className="top">

<h1 className="gradient-text">Let’s work together!</h1>
<h4>I design and code beautifully simple things and i love what i do. Just simple like that!</h4>
</div>
<form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={{ ...inputStyle, ...placeholderStyle }}
          required
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={{ ...inputStyle, ...placeholderStyle }}
          required
        />
      </div>
      <div>
        <label htmlFor="phone"></label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          style={{ ...inputStyle, ...placeholderStyle }}
          required
        />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, ...placeholderStyle }}
          required
        />
      </div>
      <div className="tio">
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
</Col>
<Col lg={5}>
<div className="uru">
    <a href="tel:01758725000"><FaPhoneVolume /></a>
    <h4>+8801758725000</h4>
</div>
<div className="utu">
    <a href="mailto:aminulhoque12321@gmail.com"><MdEmail /></a>
    <h4>aminulhoque12321@gmail.com</h4>
</div>
<div className="utu">
    <a href="hussainidalan"><FaLocationDot /></a>
    <h4>Lalbagh</h4>
</div>

</Col>



</Row>



</Container>

   </section>
  )
}

export default Talk