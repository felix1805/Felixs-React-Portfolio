import React from 'react';
import Footer from '../Footer';

const styles = {
  body: {
    backgroundColor: '#EF6F6C',
    display: 'flex',
    alignItems: 'center',

  },
  h1: {
  color: '#465775'
  },
  p: {
    color: '#56E39F',
    display: 'flex',
    alignText: 'center',
  },
  image: {
    width: '18rem',
  },
}

export default function About() {
  return (
    <div class='card' style={styles.body}>
      <h1 style={styles.h1}>About Page</h1>
      <img style={styles.image} src="https://avatars.githubusercontent.com/u/1591804?s=400&u=1c35e78aa9bb071b7a10f3f22d1f88e7c01e1331&v=4"  width="100"/>
      <p style={styles.p}>
      Full time Coding Bootcamp Student @ UNCC. Interested in JavaScript, jQuery, HTML, CSS and everything Coding Related!
      </p>
      <Footer />
    </div>
  );
}
