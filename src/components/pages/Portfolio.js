import React from 'react';
import Footer from '../Footer';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '5px',
    width: '45%',
    minWidth: '100px',
  },
  cardBody: {
    padding: '0',
  },
  pic: {
    width: '100%',
    maxWidth: '300px',
    marginRight: '5px',
  },
};

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div style={styles.container}>
        <div className="card" style={styles.card}>
          <a href='https://felix1805.github.io/Felix-Web-Development-Portfolio/'>
            <img src="https://res.cloudinary.com/dsvhebfu6/image/upload/v1651089633/Bootcamp%202022/portfolioscreenshot_qasfcv.jpg" style={styles.pic} width="105" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Web Development Portfolio</h5>
            <p className="card-text">This is my personal web development portfolio.</p>
            <a href="https://github.com/felix1805/Felix-Web-Development-Portfolio" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
        <a href='https://google.com'>
          <img src="https://picsum.photos/301" style={styles.pic} width="106" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Group Project 1</h5>
            <p className="card-text">This is my first group project from our 2022 Coding Bootcamp.</p>
            <a href="https://github.com/felix1805/State-Park-Weather" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
        <a href='https://google.com'>
          <img src="https://picsum.photos/302" style={styles.pic} width="107" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 3</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/felix1805" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
        <a href='https://google.com'>
          <img src="https://picsum.photos/303" style={styles.pic} width="108" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 4</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/felix1805" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
        <a href='https://google.com'>
          <img src="https://picsum.photos/304" style={styles.pic} width="109" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 5</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/felix1805" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
        <a href='https://google.com'>
          <img src="https://picsum.photos/305" style={styles.pic} width="110" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 className="card-title">Project 6</h5>
            <p className="card-text">This is a description about the project.</p>
            <a href="https://github.com/felix1805" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}