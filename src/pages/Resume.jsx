import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Resume.css";

const experienceData = [
  {
    id: 1,
    role: "MERN Stack Developer (Intern)",
    company: "Your Company Name",
    duration: "Jan 2024 – Apr 2024",
    location: "Chennai, India",
    type: "Internship",
    points: [
      "Built responsive frontend components using React.js and Bootstrap",
      "Developed RESTful APIs with Node.js and Express.js",
      "Integrated MongoDB for data storage using Mongoose",
      "Collaborated with team members using Git and GitHub",
    ],
    color: "#E6F1FB",
    iconColor: "#185FA5",
  },
];

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "Your College Name",
    duration: "2020 – 2024",
    grade: "7.5 CGPA",
    color: "#EAF3DE",
    iconColor: "#3B6D11",
  },
  {
    id: 2,
    degree: "Higher Secondary (12th)",
    field: "Computer Science Group",
    institution: "Your School Name",
    duration: "2019 – 2020",
    grade: "75%",
    color: "#FAEEDA",
    iconColor: "#854F0B",
  },
  {
    id: 3,
    degree: "Secondary (10th)",
    field: "General Studies",
    institution: "Your School Name",
    duration: "2017 – 2018",
    grade: "80%",
    color: "#FBEAF0",
    iconColor: "#993556",
  },
];

const skillsData = [
  { category: "Frontend",      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
  { category: "Backend",       items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Database",      items: ["MongoDB", "Mongoose"] },
  { category: "Tools",         items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"] },
];

const projectsData = [
  {
    id: 1,
    name: "WeatherWeb",
    tech: "React · CSS · Bootstrap · OpenWeatherMap API",
    desc: "A responsive weather app displaying real-time temperature, humidity, and forecasts for any city.",
    github: "https://github.com/balakumarn1025/Portfolio.git",
    live: "https://web-waether.vercel.app",
  },
  {
    id: 2,
    name: "Portfolio Website",
    tech: "React · CSS · Vercel",
    desc: "Personal developer portfolio showcasing projects, skills, and contact information.",
    github: "https://github.com/balakumarn1025/Portfolio.git",
    live: "",
  },
];

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Replace with your actual resume PDF path inside /public folder
    const link = document.createElement("a");
    link.href = "/Balakumar_Resume.pdf";
    link.download = "Balakumar_N_Resume.pdf";
    link.click();
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="resume-hero">
        <div className="resume-hero-inner">
          <p className="section-label">My CV</p>
          <h1 className="resume-title">Resume</h1>
          <div className="gold-bar"></div>
          <p className="resume-subtitle">
            A complete overview of my education, skills, and projects.
          </p>
          <div className="hero-btns">
            <button className="btn-download" onClick={handleDownload}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </button>
            <button className="btn-contact" onClick={() => navigate("/contact")}>
              Hire Me →
            </button>
          </div>
        </div>
        <div className="res-blob b1"></div>
        <div className="res-blob b2"></div>
      </section>

      {/* ── Resume Body ── */}
      <section className="resume-body">
        <Container>
          <Row className="g-5">

            {/* ── LEFT COLUMN ── */}
            <Col lg={4}>

              {/* Profile */}
              <div className="res-block">
                <div className="block-label">
                  <span className="block-icon">👤</span>
                  <h5 className="block-title">Profile</h5>
                </div>
                <div className="gold-bar-left mb-3"></div>
                <Card className="profile-card">
                  <Card.Body className="p-3">
                    <p className="profile-name">Balakumar N</p>
                    <p className="profile-role">MERN Stack Developer</p>
                    <div className="profile-details">
                      <div className="profile-row">
                        <span className="pr-icon">📧</span>
                        <span className="pr-val">balakumarn1025@gmail.com</span>
                      </div>
                      <div className="profile-row">
                        <span className="pr-icon">📍</span>
                        <span className="pr-val">Chennai, Tamil Nadu, India</span>
                      </div>
                      <div className="profile-row">
                        <span className="pr-icon">💻</span>
                        <a href="https://github.com/balakumarn1025" target="_blank" rel="noreferrer" className="pr-link">
                          github.com/balakumarn1025
                        </a>
                      </div>
                      <div className="profile-row">
                        <span className="pr-icon">🎓</span>
                        <span className="pr-val">Fresher · Open to work</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Skills */}
              <div className="res-block">
                <div className="block-label">
                  <span className="block-icon">🛠️</span>
                  <h5 className="block-title">Skills</h5>
                </div>
                <div className="gold-bar-left mb-3"></div>
                {skillsData.map((cat) => (
                  <div className="skills-group" key={cat.category}>
                    <p className="skills-cat">{cat.category}</p>
                    <div className="skills-tags">
                      {cat.items.map((item) => (
                        <span className="skill-pill" key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Strengths */}
              <div className="res-block">
                <div className="block-label">
                  <span className="block-icon">⭐</span>
                  <h5 className="block-title">Strengths</h5>
                </div>
                <div className="gold-bar-left mb-3"></div>
                <ul className="strengths-ul">
                  {[
                    "Strong problem-solving skills",
                    "Quick learner & adaptable",
                    "Team player & communicator",
                    "Continuous learner",
                    "Leadership (College Vice-Captain)",
                  ].map((s) => (
                    <li key={s} className="strength-li">
                      <span className="strength-dot"></span>{s}
                    </li>
                  ))}
                </ul>
              </div>

            </Col>

            {/* ── RIGHT COLUMN ── */}
            <Col lg={8}>

              {/* Summary */}
              <div className="res-block">
                <div className="block-label">
                  <span className="block-icon">📝</span>
                  <h5 className="block-title">Professional Summary</h5>
                </div>
                <div className="gold-bar-left mb-3"></div>
                <Card className="summary-card">
                  <Card.Body className="p-4">
                    <p className="summary-text">
                      Motivated and detail-oriented <strong>MERN Stack Developer</strong> with
                      hands-on experience in building full-stack web applications. Proficient in
                      JavaScript, React.js, Node.js, Express.js, MongoDB, HTML, CSS, and RESTful
                      API development. Passionate about building modern web applications and eager
                      to contribute to innovative projects as an entry-level developer.
                    </p>
                  </Card.Body>
                </Card>
              </div>

              {/* Experience */}
              <div className="res-block">
                <div className="block-label">
                  <span className="block-icon">💼</span>
                  <h5 className="block-title">Experience</h5>
                </div>
                <div className="gold-bar-left mb-3"></div>
                <div className="timeline">
                  {experienceData.map((exp) => (
                    <div className="tl-item" key={exp.id}>
                      <div className="tl-dot" style={{ background: exp.iconColor }}></div>
                      <div className="tl-content">
                        <Card className="tl-card">
                          <Card.Body className="p-3">
                            <div className="tl-top">
                              <div>
                                <h6 className="tl-role">{exp.role}</h6>
                                <p className="tl-company">{exp.company} · {exp.location}</p>
                              </div>
                              <div className="tl-right">
                                <span className="tl-duration">{exp.duration}</span>
                                <span className="tl-type">{exp.type}</span>
                              </div>
                            </div>
                            <ul className="tl-points">
                              {exp.points.map((pt) => (
                                <li key={pt}>{pt}</li>
                              ))}
                            </ul>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="res-block">
                <div className="block-label">
                  <span className="block-icon">🎓</span>
                  <h5 className="block-title">Education</h5>
                </div>
                <div className="gold-bar-left mb-3"></div>
                <div className="timeline">
                  {educationData.map((edu) => (
                    <div className="tl-item" key={edu.id}>
                      <div className="tl-dot" style={{ background: edu.iconColor }}></div>
                      <div className="tl-content">
                        <Card className="tl-card">
                          <Card.Body className="p-3">
                            <div className="tl-top">
                              <div>
                                <h6 className="tl-role">{edu.degree}</h6>
                                <p className="tl-company">{edu.field} · {edu.institution}</p>
                              </div>
                              <div className="tl-right">
                                <span className="tl-duration">{edu.duration}</span>
                                <span className="tl-type">{edu.grade}</span>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="res-block">
                <div className="block-label">
                  <span className="block-icon">🚀</span>
                  <h5 className="block-title">Projects</h5>
                </div>
                <div className="gold-bar-left mb-3"></div>
                <Row className="g-3">
                  {projectsData.map((proj) => (
                    <Col sm={6} key={proj.id}>
                      <Card className="proj-card h-100">
                        <Card.Body className="p-3">
                          <h6 className="proj-name">{proj.name}</h6>
                          <p className="proj-tech">{proj.tech}</p>
                          <p className="proj-desc">{proj.desc}</p>
                          <div className="proj-links">
                            <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">
                              GitHub ↗
                            </a>
                            {proj.live && (
                              <a href={proj.live} target="_blank" rel="noreferrer" className="proj-link gold-link">
                                Live ↗
                              </a>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Download CTA ── */}
      <section className="download-cta">
        <Container className="text-center">
          <h3 className="cta-title">Like what you see?</h3>
          <p className="cta-sub">Download my full resume or get in touch directly.</p>
          <div className="cta-btns">
            <button className="btn-download" onClick={handleDownload}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </button>
            <button className="btn-contact" onClick={() => navigate("/contact")}>
              Contact Me →
            </button>
          </div>
        </Container>
      </section>

      <footer className="page-footer">
        <p>Designed & Built by <strong>Balakumar N</strong> · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default Resume;
