import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontSize: 50 }}>
          My Reads
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/reading" style={{ fontSize: 20 }}>
            Reading
          </Link>
          <Link className="nav-link" to="/complete" style={{ fontSize: 20 }}>
            Complete
          </Link>
          <Link className="nav-link" to="/to-read" style={{ fontSize: 20 }}>
            To Read
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
