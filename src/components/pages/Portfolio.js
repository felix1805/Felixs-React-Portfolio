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
    color: '#EF6F6C',
    justifyContent: 'center',
    backgroundColor: '#004B52',
  },
  cardBody: {
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#EF6F6C',
  },
  pic: {
    width: '100%',
    maxWidth: '300px',
    marginRight: '5px',
    marginTop: '15px',
  },
  body: {
    backgroundColor: '#EF6F6C',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

  },
  h1: {
    color: '#DEDFE3'

  },
  h2: {
    color: '#465775',

  },
  p: {
    color: '#56E39F',
    display: 'flex',
    textAlign: 'center',
    fontSize: '20px',
  },
  image: {
    width: '16rem',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h2}>Portfolio Page</h1>
      <div style={styles.container}>
        <div className="card" style={styles.card}>
          <a href='https://felix1805.github.io/Felix-Web-Development-Portfolio/'>
            <img src="https://res.cloudinary.com/dsvhebfu6/image/upload/v1651097680/portfolioscreenshot_gid1yp.jpg" style={styles.pic} width="105" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.h1} className="card-title">Web Development Portfolio</h5>
            <p style={styles.p} className="card-text">This is my personal web development portfolio.</p>
            <a href="https://github.com/felix1805/Felix-Web-Development-Portfolio" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <a href='https://felix1805.github.io/State-Park-Weather/'>
            <img src="https://res.cloudinary.com/dsvhebfu6/image/upload/v1651094522/State_Park_Weather_vam1p9.jpg" style={styles.pic} width="106" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.h1} className="card-title">Group Project 1</h5>
            <p style={styles.p}  className="card-text">This is my first group project from the 2022 UNCC Coding Bootcamp.</p>
            <a href="https://github.com/felix1805/State-Park-Weather" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <a href='https://sheltered-sands-52656.herokuapp.com/'>
            <img src="https://res.cloudinary.com/dsvhebfu6/image/upload/v1651094157/start_screen_zpeiij.jpg" style={styles.pic} width="107" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.h1} className="card-title">Note Taking Application</h5>
            <p style={styles.p}  className="card-text">This tool can be used to take and save notes within a web application.</p>
            <a href="https://github.com/felix1805/Note-Taking-Application" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <a href='https://still-anchorage-60847.herokuapp.com/'>
            <img src="https://res.cloudinary.com/dsvhebfu6/image/upload/v1651094837/Homepage_snippet_ngw4xc.jpg" style={styles.pic} width="108" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.h1} className="card-title">Group Project 2</h5>
            <p style={styles.p}  className="card-text">This is my second group project from the 2022 UNCC Coding Bootcamp.</p>
            <a href="https://github.com/Rich-afk/lfgg" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <a href='https://felix1805.github.io/Workday-Calendar/'>
            <img src="https://res.cloudinary.com/dsvhebfu6/image/upload/v1651095040/Workday_Planner_mxigqs.jpg" style={styles.pic} width="109" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.h1} className="card-title">Workday Scheduler</h5>
            <p style={styles.p}  className="card-text">This scheduler is designed to keep track of an average workday, with individual timeslots.</p>
            <a href="https://github.com/felix1805/Workday-Calendar" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <a href='https://felix1805.github.io/password-generator/'>
            <img src="https://res.cloudinary.com/dsvhebfu6/image/upload/v1651095175/password_generator_2_qtxogh.jpg" style={styles.pic} width="110" alt="Card image cap" />
          </a>
          <div className="card-body" style={styles.cardBody}>
            <h5 style={styles.h1} className="card-title">Password Generator</h5>
            <p style={styles.p}  className="card-text">This is a tool that can be used to generate a password from 8 to 128 characters in length.</p>
            <a href="https://github.com/felix1805/password-generator" className="btn btn-primary">View GitHub Repo</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}