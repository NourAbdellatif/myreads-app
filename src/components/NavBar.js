import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">My Reads</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
