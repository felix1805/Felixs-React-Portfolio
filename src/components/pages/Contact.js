import React from 'react';
import Footer from '../Footer';
import Form from '../Form';

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
  image: {
    width: '18rem',
  },
}

export default function Contact() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Contact Page</h1>
      <Form />
      <Footer />
    </div>
  );
}