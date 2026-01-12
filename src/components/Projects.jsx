function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a placeholder project. Replace this with your actual project description, technologies used, and key features.',
      technologies: ['React', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Another placeholder project. Add your real projects here as you complete them throughout the semester!',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Keep adding your projects here. Each project should showcase different skills and technologies you\'ve learned.',
      technologies: ['React', 'API Integration'],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of my projects. I'll be adding more throughout the semester!
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <div className="project-body">
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
