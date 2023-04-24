import React from 'react'

const projectsItem = ({ company, title, description}) => {
  return (
    <div> 
      <p> {company} </p>
      <p> {title} </p>
      <p> {description}</p>
    </div>
  )
}

export default projectsItem