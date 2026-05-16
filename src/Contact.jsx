import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <p className="section-label">Get in touch</p>
          <h1 className="contact-title">Contact Me</h1>
          <div className="gold-bar"></div>
          <p className="contact-subtitle">
            Feel free to reach out for opportunities or collaborations
          </p>
        </div>
        <div className="hero-blob b1"></div>
        <div className="hero-blob b2"></div>
      </section>

      {/* ── Main Content ── */}
      <section className="contact-body">
        <Container>
          <Row className="g-4 align-items-stretch">

            {/* ── Contact Form ── */}
            <Col md={7}>
              <Card className="form-card h-100">
                <Card.Body className="p-4">
                  <h5 className="card-heading">Send a Message</h5>
                  <p className="card-sub">I'll get back to you as soon as possible.</p>

                  {submitted && (
                    <div className="success-banner">
                      ✅ Message sent! I'll reply soon.
                    </div>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-lbl">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Balakumar N"
                        required
                        className="styled-input"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="form-lbl">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="styled-input"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="form-lbl">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        className="styled-input"
                      />
                    </Form.Group>

                    <Button type="submit" className="btn-send">
                      Send Message →
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* ── Contact Details ── */}
            <Col md={5}>
              <div className="d-flex flex-column gap-3 h-100">

                {/* Details card */}
                <Card className="details-card flex-grow-1">
                  <Card.Body className="p-4">
                    <h5 className="card-heading">Contact Details</h5>
                    <p className="card-sub">Reach me directly through any of these.</p>

                    <div className="detail-list">
                      <a href="mailto:balakumarn1025@gmail.com" className="detail-item">
                        <div className="detail-icon" style={{ background: "#E6F1FB", color: "#185FA5" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                          </svg>
                        </div>
                        <div>
                          <p className="detail-lbl">Email</p>
                          <p className="detail-val">balakumarn1025@gmail.com</p>
                        </div>
                      </a>

                      <div className="detail-item non-link">
                        <div className="detail-icon" style={{ background: "#FAEEDA", color: "#854F0B" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                        </div>
                        <div>
                          <p className="detail-lbl">Location</p>
                          <p className="detail-val">Chennai, Tamil Nadu, India</p>
                        </div>
                      </div>

                      <a href="https://github.com/balakumarn1025" target="_blank" rel="noreferrer" className="detail-item">
                        <div className="detail-icon" style={{ background: "#f0f0f0", color: "#1a1a2e" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="detail-lbl">GitHub</p>
                          <p className="detail-val">github.com/balakumarn1025</p>
                        </div>
                      </a>
                    </div>
                  </Card.Body>
                </Card>

                {/* Availability card */}
                <Card className="avail-card">
                  <Card.Body className="p-4">
                    <div className="avail-row">
                      <span className="avail-dot"></span>
                      <div>
                        <p className="avail-title">Available for work</p>
                        <p className="avail-sub">Open to full-time, internships & freelance roles</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Footer ── */}
      <footer className="contact-footer">
        <p>Designed & Built by <strong>Balakumar N</strong> · {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};

export default Contact;
