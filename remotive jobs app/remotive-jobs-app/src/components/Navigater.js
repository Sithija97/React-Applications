import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./common.styles.css";
function Navigater() {
  return (
    <>
      <Navbar expand="sm" className="color-nav" variant="light">
        <Container>
          <Navbar.Brand href="/home">
            <b>REMOTIVE</b>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigater;
