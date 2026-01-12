function About() {
  const skills = [
    'JavaScript',
    'React',
    'HTML/CSS',
    'Git',
    'Problem Solving',
    'Team Collaboration'
  ]

  const interests = [
    'Web Development',
    'UI/UX Design',
    'Learning New Technologies',
    'Open Source'
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          <div className="about-text">
            <p className="bio">
              Welcome to my portfolio! I'm a passionate developer learning web development 
              and building projects that solve real-world problems. I enjoy creating 
              user-friendly applications and continuously expanding my skills in modern 
              web technologies.
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
