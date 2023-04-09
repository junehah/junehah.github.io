import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../images/favicon.ico';

const home = () => {
  return (
    <div className="App">
    <header className="App-header">
      <div>June Hah</div>
      <div className="briefDescription">I'm a Full Stack Engineer and a Gamer who has passion for automation</div>
      <Link to="about">
        <img src={reactLogo} alt="reactLogo" />
      </Link>
    </header>
  </div>
  )
}

export default home