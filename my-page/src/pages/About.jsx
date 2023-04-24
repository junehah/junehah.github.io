import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../images/favicon.ico';
import Projects from '../components/projects';

const About = () => {
  return (
    <div className="about-page">
      <Projects></Projects>
      <Link to="/">
        <img src={reactLogo} alt="reactLogo"/>
      </Link>
    </div>
  )
}

export default About