import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css';

const styles = {
  body: {
    backgroundColor: '#EF6F6C',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

  },
  h1: {
  color: '#465775'
  },
  p: {
    color: '#56E39F',
    display: 'flex',
    textAlign: 'center',
  },
  form: {
    width: '18rem',
    display: 'flex',
    flexDirection: 'column',
    

  },
  image: {
    width: '18rem',
  },
  submit: {
    backgroundColor: '#EF6F6C',
    
  }
}
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
        <button style={styles.button} type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;