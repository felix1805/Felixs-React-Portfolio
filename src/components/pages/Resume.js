import React from 'react';
import Footer from '../Footer';
import myResume from '../../../src/assets/myResume.pdf';

const styles = {
  body: {
    backgroundColor: '#EF6F6C',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  h1: {
  color: '#465775'
  },
  p: {
    color: '#00E8FC',
    display: 'flex',
    textAlign: 'center',
    fontSize: '30px',
  },
  ul: {
    color: '#00E8FC',
    padding: '0',
    margin: '0',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    fontWeight: 'bold',
    fontSize: '30px',
  },
}

export default function Resume() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>Resume Page</h1>
      <div style={styles.body}>
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
        <li style={styles.p}>
          Express
        </li>
        <li style={styles.p}>
          MongoDB
        </li>
        <li style={styles.p}>
          PWA
        </li>
        <li style={styles.p}>
          NodeJS
        </li>
        <li style={styles.p}>
          OOP
        </li>
        <br></br>
      <a href={myResume} download="Felix Petzsche Resume" target="_blank">
        <p style={styles.link}>
        Click to download my Resume!
        </p>
        </a>

      </ul>
      </div>
      <Footer />
    </div>
  );
}
