import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Andrei Da Silva's Portfolio. Built with React + Vite.</p>
      </div>
    </footer>
  )
}

export default Footer
