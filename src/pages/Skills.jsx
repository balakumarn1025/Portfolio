import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skillCategories = [
  {
    id: 1,
    category: "Frontend",
    icon: "⚛️",
    color: "#E6F1FB",
    iconColor: "#185FA5",
    skills: [
      { name: "React.js",   level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5",      level: 95 },
      { name: "CSS3",       level: 90 },
      { name: "Bootstrap",  level: 88 },
    ],
  },
  {
    id: 2,
    category: "Backend",
    icon: "🛠️",
    color: "#EAF3DE",
    iconColor: "#3B6D11",
    skills: [
      { name: "Node.js",    level: 72 },
      { name: "Express.js", level: 70 },
      { name: "REST APIs",  level: 75 },
    ],
  },
  {
    id: 3,
    category: "Database",
    icon: "🗄️",
    color: "#FAEEDA",
    iconColor: "#854F0B",
    skills: [
      { name: "MongoDB",  level: 70 },
      { name: "Mongoose", level: 68 },
    ],
  },
  {
    id: 4,
    category: "Tools & Others",
    icon: "🔧",
    color: "#FBEAF0",
    iconColor: "#993556",
    skills: [
      { name: "Git & GitHub",    level: 82 },
      { name: "VS Code",         level: 95 },
      { name: "Vercel / Netlify",level: 78 },
      { name: "Postman",         level: 72 },
    ],
  },
];

const techBadges = [
  "Python",
  "React.js","Node.js","Express.js","MongoDB","JavaScript",
  "HTML5","CSS3","Bootstrap","Git","GitHub","Postman","Vercel",
  "REST API","Mongoose","VS Code","Mysql",
];

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      {/* Hero */}
      <section className="skills-hero">
        <div className="skills-hero-inner">
          <p className="section-label">My toolkit</p>
          <h1 className="skills-title">Skills</h1>
          <div className="gold-bar"></div>
          <p className="skills-subtitle">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>
        <div className="skills-blob b1"></div>
        <div className="skills-blob b2"></div>
      </section>

      {/* Tech Badges */}
      <section className="badges-section">
        <Container>
          <div className="badges-wrap">
            {techBadges.map((t) => (
              <span className="tech-badge" key={t}>{t}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Skill Categories */}
      <section className="skills-body">
        <Container>
          <div className="section-header mb-4">
            <p className="section-label">Breakdown</p>
            <h2 className="skills-section-title">Skill Levels</h2>
            <div className="gold-bar-left"></div>
          </div>

          <Row className="g-4">
            {skillCategories.map((cat) => (
              <Col md={6} key={cat.id}>
                <Card className="skill-cat-card h-100">
                  <Card.Body className="p-4">
                    <div className="cat-header">
                      <div
                        className="cat-icon"
                        style={{ background: cat.color, color: cat.iconColor }}
                      >
                        {cat.icon}
                      </div>
                      <h5 className="cat-name">{cat.category}</h5>
                    </div>
                    <div className="skill-bars">
                      {cat.skills.map((s) => (
                        <SkillBar key={s.name} name={s.name} level={s.level} />
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Stats row */}
          <Row className="g-3 mt-4">
            {[
              { num: "3+",  lbl: "Projects built"    },
              { num: "8+",  lbl: "Technologies used" },
              { num: "6Months",  lbl: "Years of learning" },
              { num: "100%",lbl: "Dedication"        },
            ].map((s) => (
              <Col md={3} sm={6} key={s.lbl}>
                <div className="stat-card text-center">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-lbl">{s.lbl}</div>
                </div>
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

export default Skills;
