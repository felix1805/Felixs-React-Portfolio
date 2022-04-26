import React, { useState } from 'react';
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
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    }
  };
  const handleMessageChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // Based on the input type, we set the state of either email, username, and password
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














