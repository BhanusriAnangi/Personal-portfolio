import React from 'react';
import './Home.css';

const RecentWork = () => {
  const projects = [
    {
      title: "Consultancy Agency Website",
      description: "A professional consultancy agency website showcasing innovative IT solutions and services. The platform highlights the firm's expertise in providing specialized labor and consulting services across various domains including management, engineering, and technology. Features include service showcases, expert profiles, and client testimonials.",
      image: process.env.PUBLIC_URL + "/images/Consultancy-project1.png",
      link: "https://consuling-project.web.app"
    },
    {
      title: "Restaurant Website",
      description: "A modern restaurant website designed to showcase the restaurant's menu, ambiance, and dining experience. Features include an interactive menu gallery, online reservation system, special offers section, and customer reviews. The design focuses on creating an appetizing visual experience with high-quality food imagery and elegant typography.",
      image: process.env.PUBLIC_URL + "/images/Restaurent.png",
      link: "https://restaurant-de8eb.web.app"
    },
   
  ];

  return (
    <div className="recent-work-container">
      <h2 className="section-title">Recent Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
