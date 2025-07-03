import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern React portfolio website built with Vite, featuring responsive design and dark/light theme toggle.",
      technologies: ["React", "Vite", "CSS", "JavaScript"],
      github: "https://github.com/btranTFT/cs-portfolio",
      live: "#",
      image: "/src/assets/react.svg"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of your second project. Add details about what you built and what you learned.",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      github: "#",
      live: "#",
      image: "/src/assets/react.svg"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of your third project. Highlight your skills and achievements.",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      github: "#",
      live: "#",
      image: "/src/assets/react.svg"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 