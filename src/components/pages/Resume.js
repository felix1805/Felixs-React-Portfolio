import React from 'react';
import Footer from '../Footer';
import myResume from '../../../src/assets/myResume.pdf';

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
  ul: {
    color: '#56E39F',
    padding: '0',
    margin: '0',
    fontWeight: 'bold',
  },
}

export default function Resume() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Resume Page</h1>
      <div style={styles.body}>
      <a href={myResume} download="Felix Petzsche Resume" target="_blank">
        Click to download my Resume!</a>
      <ul style={styles.ul}>
        <li style={styles.p}>
          HTML
        </li>
        <li style={styles.p}>
          CSS
        </li>
        <li style={styles.p}>
          JavaScript
        </li>
        <li style={styles.p}>
          React
        </li>
        <li style={styles.p}>
          MySQL
        </li>

      </ul>
      </div>
      <Footer />
    </div>
  );
}
