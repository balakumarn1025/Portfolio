import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={NavLink} to="/" className="nav-brand">
          BK<span className="brand-dot">.</span>
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="main-nav" className="custom-toggle">
          <span className="tog-line"></span>
          <span className="tog-line"></span>
          <span className="tog-line"></span>
        </Navbar.Toggle>

        {/* Links */}
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-1">
            {[
              { to: "/",          label: "Home"      },
              { to: "/about",     label: "About"     },
              { to: "/education", label: "Education" },
              { to: "/skills",    label: "Skills"    },
              { to: "/projects",  label: "Projects"  },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-item-link ${isActive ? "active-link" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Contact as CTA button */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-cta ${isActive ? "nav-cta-active" : ""}`
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
