import React from 'react'
import profileImage from '../images/chat_edit_image_20251114_141313.png'

function About() {
  const skills = [
    'JavaScript',
    'React',
    'Go',
    'Python',
    'Git',
    'Problem Solving',
    'Team Collaboration'
  ]

  const interests = [
    'Web Development',
    'UI/UX Design',
    'Distributed Systems',
    'Blockchain',
    'Learning New Technologies',
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="About me" />
          </div>
          <div className="about-text">
            <p className="bio">
              Welcome to my portfolio! I'm a passionate developer excited about building 
              software solutions and tacklingprojects that solve real-world problems. 
              I enjoy creating user-friendly applications and continuously expanding my 
              skills in modern web and software systems technologies.
            </p>
            
            <div className="skills-section">
              <h3>Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="interests-section">
              <h3>Interests</h3>
              <ul className="interests-list">
                {interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
