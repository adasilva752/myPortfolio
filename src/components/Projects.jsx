import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Keratoconus Awareness Campaign',
      description: 'Highschool project focused on raising awareness about keratoconus, a degenerative eye disease. Built A website and youtube videos to educate people about the disease and how to prevent it.',
      company: 'The Pine School Capstone',
      technologies: ['Web Developmenmt'],
      website: 'https://keratoconuswebsite.github.io/',
      github: 'https://github.com/keratoconuswebsite/keratoconuswebsite.github.io',
    },
    {
      id: 2,
      title: 'Osu! Term Project',
      class: 'Fundamendals of Programming (15-112)',
      description: 'Term project for the Fundamentals of Programming course. Built the rythm game Osu! using 15112 python graphics package',
      technologies: ['Python', '15-112 Graphics Package'],
      demo: 'https://www.youtube.com/watch?v=f8e8ZmNEVqo'
    },
    {
      id: 3,
      title: 'How to Debug',
      company: 'CMU CS Academy',
      description: 'Created a youtube video series to teach teachers and students how to effectively debug in python. Wrote in english and spanish to reach all stakeholders.',
      technologies: ['Python'],
      'video-english': 'https://www.youtube.com/watch?v=W3slZ3Zw078',
      'video-spanish': 'https://www.youtube.com/watch?v=W3slZ3Zw078',
    },
    {
      id: 4,
      title: 'Malloc Lab',
      company: "Computer Systems (18-213)",
      description: 'Built a 64-bit, segregated free list dynamic memory allocator in C, implementing malloc, free, realloc & calloc, achieving throughput of 6000 Kops/s. Created a custom heap checker to automate integrity validation & discover subtle memory bugs.',
      technologies: ['C'],
    },
    {
      id: 5,
      title: 'FantasyHoops - Best System Design Award',
      company: "SEO",
      description: 'Built a fantasy basketball website using HTML, CSS, and Python. All players are pulled from the NBA 2k API and the game is simulated using a custom algorithm using a database from the 2023-2024 NBA season.',
      technologies: ['Python', 'HTML', 'CSS', 'Database', 'API'],
      github: 'https://github.com/6uan/fantasy-hoops',
    },
    {
      id: 6,
      title: 'Flappy Bird',
      company: "CMU CS Academy",
      description: 'Built a flappy bird game using Python and CMU CS Academy Graphics Package. The game is a simple flappy bird game that is played by clicking the spacebar to flap the bird.',
      technologies: ['Python', 'CMU CS Academy Graphics Package'],
      video: 'https://www.youtube.com/watch?v=fMjOyuUZVsY',
    },
    {
      id: 7,
      title: 'Atari Breakout',
      class: 'Structure and Design of Digital Systems (18-240)',
      description: 'Programmed an FPGA to display a breakout game using a VGA controller SystemVerilog file. Implemented ball collisions by calculating the location of each pixel & comparing it to the positions of blocks. Calculated the direction & speed of the ball based on current states using a finite state machine.',
      technologies: ['System Verilog'],
    },
    {
      id: 8,
      title: 'Wack-A-Mole',
      company: 'Sigma Phi Epsilon SCC Booth',
      description: 'Created a wack-a-mole game using an Arduino and Solenoids as an atraction for a carnival booth at CMU.',
      technologies: ['C++', 'Solenoids', 'Arduino'],
    },
    {id: 8,
      title: 'Load Time Reduction for Microfrontends',
      company: 'PNC Financial Services',
      description: 'Vastly improved user experience through a 34% reduction in loading speeds of the various microfrontends through code\-splitting and prefetching. Leveraged Redux and local storage to save redundant API calls, user preferences, and user activity.',
      technologies: ['React', 'Typescript', 'Redux'],
    },
    {
      id: 10,
      title: 'Distributed Bitcoin Miner',
      class: 'Distributed Systems (15-440)',
      description: 'Built a custom, reliable UDP-based protocol with features like connection handling, traffic control, and message retransmission. Used Go\'s concurrency primitives to manage parallel tasks and prevent race conditions. Developed a scalable client-server system capable of assigning mining tasks to multiple worker nodes.' ,
      technologies: ['Go'],
      Github: "https://github.com/adasilva752/p1-15440-f25-team-name"
    },
    {
      id: 11,
      title: 'RAFT',
      class: 'Distributed Systems (15-440)',
      description: 'Implemented the Raft distributed consensus protocol in Go, including leader election, log replication, and fault tolerance, validated through concurrency and race-condition testing.',
      technologies: ['Go'],
      Github: "https://github.com/adasilva752/p2-15440-f25-adasilva752"
    },
    {
      id: 12,
      title: 'CMUD',
      class: 'Distributed Systems (15-440)',
      description: 'Implemented a distributed key\-value store in Go, using an actor-based concurrency model, custom RPCs, and extensive race-condition testing under simulated network faults.',
      technologies: ['Go'],
      Github: "https://github.com/adasilva752/p3-15440-f25-samuel"
    },
    {
      id: 13,
      title: 'MinusAI',
      description: 'Created a Chrome extension that stops the automatic AI response from gemini to help conserve water and resources. This is to help those who care about the environment.',
      technologies: ['React'],
      Github: "https://github.com/adasilva752/minusAI"
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
          {projects.reverse().map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <div className = "project-subheader">
                <h4>
                  {project.company && <span className="company-tag">{project.company}</span>}
                  {project.class && <span className="company-tag">{project.class}</span>}
                </h4>
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
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    Demo
                  </a>
                )}
                {project.video && (
                  <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link">
                    Video
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link">
                    Website
                  </a>
                )}
                {project['video-english'] && (
                  <a href={project['video-english']} target="_blank" rel="noopener noreferrer" className="project-link">
                    Video (English)
                  </a>
                )}
                {project['video-spanish'] && (
                  <a href={project['video-spanish']} target="_blank" rel="noopener noreferrer" className="project-link">
                    Video (Spanish)
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
