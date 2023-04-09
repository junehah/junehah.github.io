import React from 'react';
import { Link } from 'react-router-dom';
import 'devicon'

const home = () => {
  return (
    <div className="home-page">
    <header className="App-header">
      <div>June Hah</div>
      <div className="brief-description">I'm a Full Stack Engineer and a Gamer who has passion for automation</div>
      <div className="button-container">
        <Link to="about">
            <i class="devicon-react-original"></i>
        </Link>
        <a href="https://www.linkedin.com/in/june-hah-02a92776/" target="_blank" rel="noreferrer">
            <i class="devicon-linkedin-plain"> 
            </i>
        </a>
        <a href="https://github.com/junehah" target="_blank" rel="noreferrer">
            <i class="devicon-github-original"></i>
        </a>
        <a href="mailto:someone@yoursite.com">
            <i class="devicon-google-plain"></i>
        </a>  
      </div>
    </header>
  </div>
  )
}

export default home