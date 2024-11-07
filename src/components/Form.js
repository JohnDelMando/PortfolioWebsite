/**
 * Author: John Pangilinan
 */
import "./Form.css"

import React from 'react';

const Form = () => {
  return (
    <div className="form">
      <h2>SEND ME A MESSAGE!</h2>
      <label>Your Name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="email"></input>
      <label>Subject</label>
      <input type="text"></input>
      <label>Message</label>
      <textarea rows="6" placeholder="Type here..." />
      <button className="button">SUBMIT</button>
    </div>
  )
}

export default Form;
