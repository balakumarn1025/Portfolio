import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "WeatherWeb",
    description:
      "A responsive weather app using the OpenWeatherMap API to display real-time temperature, humidity, and forecasts for any searched city worldwide.",
    tech: ["React.js", "CSS", "Bootstrap", "Weather API", "Git", "Vercel"],
    github: "https://github.com/balakumarn1025/WeatherWeb.git",
    live: "https://web-waether.vercel.app",
    featured: true,
    iconBg: "#E6F1FB",
    iconColor: "#185FA5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 0 0 1.8-9.7A7 7 0 1 0 3 15z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Portfolio Website",
    description:
      "A personal developer portfolio showcasing projects, skills, and contact info — built with React and styled for a clean, professional look.",
    tech: ["React", "CSS", "Vercel","bootstrap", "JavaScript", "HTML", "Git"],
    github: "https://github.com/balakumarn1025/Portfolio.git",
    live: "",
    featured: false,
    iconBg: "#EAF3DE",
    iconColor: "#3B6D11",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "E-commerce UI",
    description:
      "A modern e-commerce front-end interface with product listings, cart functionality, and responsive layout built using React and Bootstrap.",
    tech: ["React", "Bootstrap", "CSS", "JavaScript", "HTML", "Git", "Vercel","node.js","Express.js","MongoDB","REST APIs","JWT Authentication ","ui materialize"],
    github: "https://github.com/balakumarn1025/First-Project.git",
    live: "",
    featured: false,
    iconBg: "#FBEAF0",
    iconColor: "#993556",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  
];

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <p className="section-label">Work</p>
      <h2 className="section-title">Featured projects</h2>
      <p className="section-sub">Things I've built — from weather apps to full portfolio sites.</p>
      <div className="gold-bar"></div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-num">3+</div>
          <div className="stat-lbl">Projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">2</div>
          <div className="stat-lbl">Live demos</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">5+</div>
          <div className="stat-lbl">Tech used</div>
        </div>
      </div>

      <div className="proj-grid">
        {projects.map((project) => (
          <div className="proj-card" key={project.id}>
            <div className="card-top">
              <div
                className="proj-icon"
                style={{ background: project.iconBg, color: project.iconColor }}
              >
                {project.icon}
              </div>
              {project.featured && (
                <span className="featured-badge">Featured</span>
              )}
            </div>

            <p className="proj-name">{project.name}</p>
            <p className="proj-desc">{project.description}</p>

            <div className="tech-row">
              {project.tech.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>

            <div className="card-links">
              {project.github && (
                <a
                  className="link-btn"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  className="link-btn gold"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalIcon /> Live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
