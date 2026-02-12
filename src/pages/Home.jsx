import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "../assets/profile.png";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  
  return (
    <>
      {/* HERO SECTION */}
      <Container className="mt-5">
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col md={6}>
            <h1>
              Hi, I'm <span className="text-success">Balakumar</span>
            </h1>
            <h3 className="mt-2">MERN Stack Developer (Fresher)</h3>
            <p className="mt-3">
              Passionate about building modern web applications using React,
              Node.js, and MongoDB.
            </p>

            <Button variant="success" className="me-3" onClick={()=>navigate("/download_resume")}>
              Download Resume
            </Button>

            <Button variant="outline-success" onClick={()=>navigate("/projects")}>View Projects</Button>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={4} className="text-center">
            <img src={profile} alt="Developer" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* ABOUT PREVIEW SECTION */}
      <Container className="mt-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  Motivated and detail-oriented MERN Stack Developer with
                  hands-on experience in building full-stack web applications.
                  Proficient in JavaScript, React.js, Node.js, Express.js,
                  MongoDB, HTML, CSS, and RESTful API development with a strong
                  passion for building modern web applications.. Eager to
                  contribute to innovative projects as an entry-level developer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/*Career objective section*/}
      <Container className="mt-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Career Objective</Card.Title>
                <Card.Text>
                  Seeking a challenging position as a MERN Stack Developer to
                  utilize my skills in JavaScript, React.js, Node.js, and
                  MongoDB to build innovative web applications. Eager to
                  contribute to a dynamic team and grow as a developer while
                  delivering high-quality solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/*what i do */ }
          <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>What I Do</Card.Title>

              <ul className="mt-3">
                <li>Build responsive UIs using React.js and Bootstrap</li>
                <li>Develop backend APIs using Node.js and Express.js</li>
                <li>Work with MongoDB for data storage and management</li>
                <li>Integrate frontend and backend using RESTful APIs</li>
                <li>Write clean and maintainable code</li>
              </ul>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    

    {/* strenght */ }
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Strengths</Card.Title> 
              <ul className="mt-3">
                <li>Strong problem-solving skills</li>
                <li>Quick learner and adaptable</li>
                <li>Clear and improving communication skills</li>
                <li>Passion for continuous learning and growth</li>
                <li>Leadership experience as a college vice-captain</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> 
    </>
  );
};

export default Home;
