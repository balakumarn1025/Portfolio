import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Education.css";

const educationData = [{
    id: 1,
    degree: "Master of Computer Science",
    field: "Computer Science",
    institution: "Annai voilet arts and science college",
    location: "Tamil Nadu, India",
    year: "2026 – 2027",
    grade: "",
    icon: "🎓",
    color: "#E6F1FB",
    iconColor: "#185FA5",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications",
    field: "Computer Applications",
    institution: "Alpha arts and science college",
    location: "Tamil Nadu, India",
    year: "2022 – 2025",
    grade: "7.5 CGPA",
    icon: "🎓",
    color: "#E6F1FB",
    iconColor: "#185FA5",
  },
  {
    id: 3,
    degree: "Higher Secondary (12th)",
    field: "Computer Applications Group",
    institution: "Sathya Matriculation Higher Secondary School",
    location: "Tamil Nadu, India",
    year: "2021 – 2022",
    grade: "75%",
    icon: "📘",
    color: "#EAF3DE",
    iconColor: "#3B6D11",
  },
  {
    id: 3,
    degree: "Secondary (10th)",
    field: "General Studies",
    institution: "Sathya Matriculation Higher Secondary School",
    location: "Tamil Nadu, India",
    year: "2019 – 2020",
    grade: "57%",
    icon: "📗",
    color: "#FAEEDA",
    iconColor: "#854F0B",
  },
];

const certifications = [
  { title: "Python – Multimise ", year: "2024", icon: "🐍" },
  { title: "MERN Stack – Multimise", year: "2025", icon: "💻" },
  { title: "JavaScript Essentials – W3schools", year: "2024", icon: "🟨" }
];

const Education = () => {
  return (
    <>
      {/* Hero */}
      <section className="edu-hero">
        <div className="edu-hero-inner">
          <p className="section-label">Academic background</p>
          <h1 className="edu-title">Education</h1>
          <div className="gold-bar"></div>
          <p className="edu-subtitle">
            My academic journey and certifications that shaped my skills.
          </p>
        </div>
        <div className="edu-blob b1"></div>
        <div className="edu-blob b2"></div>
      </section>

      {/* Timeline */}
      <section className="edu-body">
        <Container>
          <div className="section-header">
            <p className="section-label">Qualifications</p>
            <h2 className="edu-section-title">Academic Timeline</h2>
            <div className="gold-bar-left"></div>
          </div>

          <div className="timeline">
            {educationData.map((edu, idx) => (
              <div className="timeline-item" key={edu.id}>
                <div className="timeline-dot" style={{ background: edu.iconColor }}></div>
                {idx < educationData.length - 1 && <div className="timeline-line"></div>}
                <div className="timeline-content">
                  <Card className="edu-card">
                    <Card.Body className="p-4">
                      <div className="edu-card-top">
                        <div
                          className="edu-icon"
                          style={{ background: edu.color, color: edu.iconColor }}
                        >
                          {edu.icon}
                        </div>
                        <div className="edu-year-badge">{edu.year}</div>
                      </div>
                      <h5 className="edu-degree">{edu.degree}</h5>
                      <p className="edu-field">{edu.field}</p>
                      <div className="edu-meta">
                        <span className="edu-inst">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                          {edu.institution}
                        </span>
                        <span className="edu-loc">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                          {edu.location}
                        </span>
                      </div>
                      <div className="edu-grade">
                        <span className="grade-label">Grade</span>
                        <span className="grade-value">{edu.grade}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="section-header mt-5">
            <p className="section-label">Extra learning</p>
            <h2 className="edu-section-title">Certifications</h2>
            <div className="gold-bar-left"></div>
          </div>

          <Row className="g-3">
            {certifications.map((cert) => (
              <Col md={4} sm={6} key={cert.title}>
                <Card className="cert-card h-100">
                  <Card.Body className="p-3">
                    <div className="cert-icon">{cert.icon}</div>
                    <p className="cert-title">{cert.title}</p>
                    <p className="cert-year">{cert.year}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className="page-footer">
        <p>Designed & Built by <strong>Balakumar N</strong> · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default Education;
