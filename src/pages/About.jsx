import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import "./About.css";

const highlights = [
  { icon: "🎓", label: "Degree",     value: "M.Sc. Computer Science" },
  { icon: "📍", label: "Location",   value: "Chennai, Tamil Nadu" },
  { icon: "💼", label: "Status",     value: "Fresher · Open to work" },
  { icon: "🌐", label: "Languages",  value: "Tamil, English" },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="section-label">Who I am</p>
          <h1 className="about-title">About Me</h1>
          <div className="gold-bar"></div>
          <p className="about-subtitle">
            A passionate developer, lifelong learner, and team player.
          </p>
        </div>
        <div className="about-blob b1"></div>
        <div className="about-blob b2"></div>
      </section>

      {/* Main */}
      <section className="about-body">
        <Container>
          <Row className="g-5 align-items-center">
            {/* Photo */}
            <Col md={5} className="text-center">
              <div className="about-photo-wrap">
                <div className="about-photo-ring"></div>
                <div className="about-photo-circle">
                  <img src={profile} alt="Balakumar N" className="about-photo" />
                </div>
                <div className="about-avail-badge">
                  <span className="green-dot"></span> Available for work
                </div>
              </div>
            </Col>

            {/* Text */}
            <Col md={7}>
              <p className="section-label">My story</p>
              <h2 className="about-section-title">Hi, I'm Balakumar N</h2>
              <div className="gold-bar-left"></div>
              <p className="about-para">
                I'm a motivated and detail-oriented <strong>MERN Stack Developer</strong> with
                hands-on experience in building full-stack web applications. I'm proficient in
                JavaScript, React.js, Node.js, Express.js, MongoDB, HTML, CSS, and RESTful
                API development.
              </p>
              <p className="about-para">
                I have a strong passion for building modern web applications and I'm eager to
                contribute to innovative projects as an entry-level developer. I served as a
                <strong> college vice-captain</strong>, which strengthened my leadership,
                teamwork, and communication skills.
              </p>
              <p className="about-para">
                When I'm not coding, I enjoy exploring new technologies, reading tech blogs,
                and continuously leveling up my skillset.
              </p>

              <div className="about-btns">
                <button className="btn-gold-solid" onClick={() => navigate("/contact")}>
                  Hire Me
                </button>
                <button className="btn-navy-outline" onClick={() => navigate("/projects")}>
                  My Projects
                </button>
              </div>
            </Col>
          </Row>

          {/* Highlight cards */}
          <Row className="g-3 mt-5">
            {highlights.map((h) => (
              <Col md={3} sm={6} key={h.label}>
                <Card className="highlight-card h-100 text-center">
                  <Card.Body className="p-3">
                    <div className="highlight-icon">{h.icon}</div>
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-value">{h.value}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Career Objective */}
          <div className="objective-section">
            <p className="section-label">My goal</p>
            <h2 className="about-section-title">Career Objective</h2>
            <div className="gold-bar-left"></div>
            <Card className="objective-card mt-3">
              <Card.Body className="p-4">
                <span className="objective-quote">"</span>
                <p className="objective-text">
                  Seeking a challenging position as a MERN Stack Developer to utilize my skills
                  in JavaScript, React.js, Node.js, and MongoDB to build innovative web
                  applications. Eager to contribute to a dynamic team and grow as a developer
                  while delivering high-quality solutions.
                </p>
              </Card.Body>
            </Card>
          </div>

          {/* Strengths */}
          <div className="strengths-section">
            <p className="section-label">My edge</p>
            <h2 className="about-section-title">Strengths</h2>
            <div className="gold-bar-left"></div>
            <div className="strengths-list mt-3">
              {[
                { icon: "🧠", text: "Strong problem-solving skills" },
                { icon: "⚡", text: "Quick learner and adaptable" },
                { icon: "💬", text: "Clear and improving communication skills" },
                { icon: "📈", text: "Passion for continuous learning and growth" },
                { icon: "🏆", text: "Leadership experience as a college vice-captain" },
              ].map((s) => (
                <div className="strength-row" key={s.text}>
                  <span className="strength-icon">{s.icon}</span>
                  <span className="strength-text">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <footer className="page-footer">
        <p>Designed & Built by <strong>Balakumar N</strong> · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default About;
