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
    const inputValue = target.value;
    setEmail(inputValue);

  };
  const handleMessageChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
      setMessage(inputValue);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail(email);
    if (isValid) {
      alert(`Thank you for your message, ${userName}.`);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('invalid email');
    }
  };
  return (
    <div>
      <p>
        Hello {userName}
      </p>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        />
        <input
          value={email}
          name="email"
          onChange={handleEmailChange}
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={message}
          name="message"
          onChange={handleMessageChange}
          type="text"
          placeholder="Message"
          required
        />
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;