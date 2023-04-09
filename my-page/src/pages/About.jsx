import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../images/favicon.ico';

const About = () => {
  return (
    <div className="AboutPage">
      <Link to="/">
        <img src={reactLogo} alt="reactLogo"/>
      </Link>
    </div>

  )
}

export default About