import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Education = () => {
  return (
    <div>
      <h1 className="text-center">Education</h1>
      <Container className="mt-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>PG</Card.Title>
                <Card.Text>
                  <p>Master of Computer Science</p>
                  <p>Institution:Annai Voilet Arts and Science College</p>
                  <p>Present year:2026</p>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>UG</Card.Title>
                <Card.Text>
                  <p>Bachelor of Computer Application</p>
                  <p>Institution:Alpha Arts and Science College</p>
                  <p>Passing Year:2025</p>
                  <p>CGPA:8.5</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>12th</Card.Title>
                <Card.Text>
                  <p>Higher Secondary School Certificate</p>
                  <p>Institution:Sathyaa Matric HR Sec School</p>
                   <p>Passing Year:2022</p>
                  <p>percentage:76%</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>10th</Card.Title>
                <Card.Text>
                  <p>Secondary School Leaving Certificate</p>
                  <p>Institution:Sathyaa Matric HR Sec School</p>
                   <p>Passing Year:2020</p>
                  <p>percentage:57%</p>
                 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
