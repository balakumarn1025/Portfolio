
import "./Projects.css";

const Projects = () => {
  
  return (
    <section className="projects-section">
      <div className="projects-container">

        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          Some of the projects I have built using the MERN stack
        </p>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <h3>Mini E-Commerce Dress Store</h3>
            <p>
              A full-stack MERN application with user authentication,
              product listing, cart management, and order handling.
            </p>

            <p className="tech-stack">
              <strong>Tech:</strong> React, Node.js, Express, MongoDB
            </p>

            <div className="project-links">
              <a
                href="https://github.com/balakumarn1025/First-Project.git"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio website built using React to showcase
              my skills, projects, and contact information.
            </p>

            <p className="tech-stack">
              <strong>Tech:</strong> React, CSS, Bootstrap
            </p>

            <div className="project-links">
              <a
                href="https://github.com/balakumarn1025/Portfolio.git"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://portfolio-mbdx.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
