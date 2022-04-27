import React from 'react';

const styles = {
  navTabs: {
    margin: '5px',
    color: '#59C9A5',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#59C9A5',
    display: 'flex',
    alignItems: 'center',
  },
  h1: {
    color: '#5B6C5D',
    textAlign: 'center',
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.h1}>Felix Petzsche</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              style={styles.navItem}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              style={styles.navItem}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              style={styles.navItem}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              style={styles.navItem}
            >
              Contact
            </a>
          </li>
    </ul>
      </header>
    </div >
  );
}

export default NavTabs;
