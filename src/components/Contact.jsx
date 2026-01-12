import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions.
            </p>
            <div className="contact-links">
              <a href="mailto:a.petru.dasilva@gmail.com" className="contact-link">
                📧 a.petru.dasilva@gmail.com
              </a>
              <a href="https://github.com/adasilva752" target="_blank" rel="noopener noreferrer" className="contact-link">
                💻 GitHub Profile
              </a>
              <a href="https://linkedin.com/in/andreidasilva" target="_blank" rel="noopener noreferrer" className="contact-link">
                💼 LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
