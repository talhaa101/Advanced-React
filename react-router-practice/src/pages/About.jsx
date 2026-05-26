import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>


      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <button onClick={() => navigate(1)}>
        Forward
      </button>
    </div>
  )
}

export default About
