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
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  h1: {
    color: '#545863',
    backgroundColor: "#59C9A5",
    textAlign: 'center',
    marginBottom: '0',
    fontSize: '50px',
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1 style={styles.h1}>Felix Petzsche</h1>
      <header style={styles.header}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              style={styles.navItem}
            >
              About Me
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
        </ul>
      </header>
    </div >
  );
}

export default NavTabs;
