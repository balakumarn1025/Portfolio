import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "../assets/profile.png";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center" style={{ minHeight: "90vh" }}>
            {/* LEFT */}
            <Col md={6} className="hero-left">
              <p className="hero-greeting">👋 Hello, I'm</p>
              <h1 className="hero-name">
                Bala<span className="gold-text">kumar</span>
              </h1>
              <h3 className="hero-role">MERN Stack Developer</h3>
              <div className="hero-badge">Fresher · Open to opportunities</div>
              <p className="hero-bio">
                Passionate about building modern web applications using React,
                Node.js, and MongoDB. I love turning ideas into clean,
                responsive digital experiences.
              </p>
              <div className="hero-btns">
                <Button
                  className="btn-gold me-3"
                  onClick={() => navigate("/download_resume")}
                >
                  Download Resume
                </Button>
                <Button
                  className="btn-navy-outline"
                  onClick={() => navigate("/projects")}
                >
                  View Projects
                </Button>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-num">4+</span>
                  <span className="stat-lbl">Projects</span>
                </div>
                <div className="stat-sep"></div>
                <div className="hero-stat">
                  <span className="stat-num">5+</span>
                  <span className="stat-lbl">Tech skills</span>
                </div>
                <div className="stat-sep"></div>
                <div className="hero-stat">
                  <span className="stat-num">1+</span>
                  <span className="stat-lbl">Years exp.</span>
                </div>
              </div>
            </Col>

            {/* RIGHT — Photo */}
            <Col md={6} className="text-center hero-right">
              <div className="photo-wrapper">
                <div className="photo-ring-outer"></div>
                <div className="photo-ring-inner"></div>
                <div className="photo-circle">
                  <img src={profile} alt="Balakumar" className="profile-img" />
                </div>
                <div className="available-badge">
                  <span className="green-dot"></span> Available for work
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </section>

      {/* ── ABOUT ME ── */}
      <section className="cards-section">
        <Container>
          <div className="section-header">
            <p className="section-label">Know me</p>
            <h2 className="section-title">About Me</h2>
            <div className="gold-bar"></div>
          </div>
          <Row>
            <Col md={8} className="mx-auto">
              <Card className="info-card">
                <Card.Body>
                  <div className="card-icon-wrap">
                    <span className="card-icon">👨‍💻</span>
                  </div>
                  <Card.Text className="card-text">
                    Motivated and detail-oriented{" "}
                    <strong>MERN Stack Developer</strong> with hands-on
                    experience in building full-stack web applications.
                    Proficient in JavaScript, React.js, Node.js, Express.js,
                    MongoDB, HTML, CSS, and RESTful API development with a
                    strong passion for building modern web applications. Eager
                    to contribute to innovative projects as an entry-level
                    developer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── CAREER OBJECTIVE ── */}
      <section className="cards-section alt-bg">
        <Container>
          <div className="section-header">
            <p className="section-label">Direction</p>
            <h2 className="section-title">Career Objective</h2>
            <div className="gold-bar"></div>
          </div>
          <Row>
            <Col md={8} className="mx-auto">
              <Card className="info-card">
                <Card.Body>
                  <div className="card-icon-wrap">
                    <span className="card-icon">🎯</span>
                  </div>
                  <Card.Text className="card-text">
                    Seeking a challenging position as a{" "}
                    <strong>MERN Stack Developer</strong> to utilize my skills
                    in JavaScript, React.js, Node.js, and MongoDB to build
                    innovative web applications. Eager to contribute to a
                    dynamic team and grow as a developer while delivering
                    high-quality solutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="cards-section">
        <Container>
          <div className="section-header">
            <p className="section-label">Services</p>
            <h2 className="section-title">What I Do</h2>
            <div className="gold-bar"></div>
          </div>
          <Row className="g-3 justify-content-center">
            {[
              {
                icon: "⚛️",
                title: "Frontend Development",
                desc: "Build responsive UIs using React.js and Bootstrap",
              },
              {
                icon: "🛠️",
                title: "Backend Development",
                desc: "Develop backend APIs using Node.js and Express.js",
              },
              {
                icon: "🗄️",
                title: "Database",
                desc: "Work with MongoDB for data storage and management",
              },
              {
                icon: "🔗",
                title: "API Integration",
                desc: "Integrate frontend and backend using RESTful APIs",
              },
              {
                icon: "✨",
                title: "Clean Code",
                desc: "Write clean, readable, and maintainable code",
              },
            ].map((item) => (
              <Col md={4} sm={6} key={item.title}>
                <Card className="do-card h-100">
                  <Card.Body>
                    <div className="do-icon">{item.icon}</div>
                    <h6 className="do-title">{item.title}</h6>
                    <p className="do-desc">{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── STRENGTHS ── */}
      <section className="cards-section alt-bg">
        <Container>
          <div className="section-header">
            <p className="section-label">My edge</p>
            <h2 className="section-title">Strengths</h2>
            <div className="gold-bar"></div>
          </div>
          <Row>
            <Col md={8} className="mx-auto">
              <div className="strengths-grid">
                {[
                  { icon: "🧠", text: "Strong problem-solving skills" },
                  { icon: "⚡", text: "Quick learner and adaptable" },
                  { icon: "💬", text: "Clear and improving communication skills" },
                  { icon: "📈", text: "Passion for continuous learning and growth" },
                  { icon: "🏆", text: "Leadership experience as a college vice-captain" },
                ].map((s) => (
                  <div className="strength-item" key={s.text}>
                    <span className="strength-icon">{s.icon}</span>
                    <span className="strength-text">{s.text}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <p>
          Designed & Built by <strong>Balakumar N</strong> ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default Home;
