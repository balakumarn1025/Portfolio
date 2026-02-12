import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">

        <h1 className="skills-title">Skills</h1>
        <p className="skills-subtitle">
          Technologies and tools I work with
        </p>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>React Router</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
              <li>JWT Authentication</li>
            </ul>
          </div>

          {/* Database */}
          <div className="skill-card">
            <h3>Database</h3>
            <ul>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>VS Code</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
