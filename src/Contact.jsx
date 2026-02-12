import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-2">Contact Me</h1>
      <p className="text-center text-muted mb-4">
        Feel free to reach out for opportunities or collaborations
      </p>

      <Row className="g-4">
        {/* Contact Form */}
        <Col md={7}>
          <Card className="shadow-sm">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                </Form.Group>

                <Button variant="success" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Details */}
        <Col md={5}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h5 className="mb-3">Contact Details</h5>
              <p className="mb-2">📧 balakumarn1025@gmail.com</p>
              <p className="mb-2">📍 Chennai, India</p>
              <p className="mb-0">
                💻{" "}
                <a
                  href="https://github.com/balakumarn1025"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
