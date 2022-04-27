import React from 'react';

const styles = {
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  link: {
    margin: '5px',
    fontWeight: 'bold',
  }
};

function Footer({ currentPage, handlePageChange }) {
  return (
    <div style={styles.footer}>
    <a href="https://github.com/felix1805">
      <p style={styles.link}>
      GitHub
    </p>
    </a>
    <a href="https://www.linkedin.com/in/felix-petzsche-334a8b66/">
      <p style={styles.link}>
      LinkedIn
    </p>
    </a>
    <a href="https://stackoverflow.com/users/18957856/felix-petzsche">
      <p style={styles.link}>
      StackOverflow
    </p>
    </a>
    </div>
  );
}

export default Footer;
