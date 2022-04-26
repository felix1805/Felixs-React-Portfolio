import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css';
function Form() {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === 'name' ? setName(value) : setName('');
  };
  const handleEmailChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    }
    validateEmail(email);
  };
  const handleMessageChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${userName}.`);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div>
      <p>
        Hello {userName}
      </p>
      <form className="form">
        <input
          value={userName}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleEmailChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleMessageChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;