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
      image: "/portfolioimg.jpg"
    },
    {
      id: 2,
      title: "SMILES Molecule Generation",
      description: "Research project exploring deep generative models (CharRNN, GAN, VAE) to generate valid and novel molecules represented as SMILES strings for drug discovery applications.",
      technologies: ["Python", "PyTorch", "Deep Learning", "Chemistry", "Machine Learning"],
      github: "https://github.com/AbogAscended/Drug-Discovery",
      live: "#",
      image: "/drugimg.jpg"
    },
    {
      id: 3,
      title: "RoomTracker Web Service",
      description: "A web service prototype demonstrating frontend-backend communication for room availability tracking in libraries, featuring real-time status monitoring and modern UI design.",
      technologies: ["Node.js", "Express.js", "JavaScript", "HTML5", "CSS3", "REST API"],
      github: "https://github.com/SatelliteGear/RoomTracker",
      live: "#",
      image: "/roomimg.jpg"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title thurkle">My Projects</h2>
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