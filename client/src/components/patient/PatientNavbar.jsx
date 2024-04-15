import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          className="text-danger text-center fw-bold fst-italic"
          href="/patient-dashboard/emergency"
        >
          Request Emergency Assistance
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/patient-dashboard/fitness-games">
              Fitness Games
            </Nav.Link>
            <Nav.Link href="/patient-dashboard/daily-checklist">
              Daily Checklist
            </Nav.Link>
            <Nav.Link href="/patient-dashboard/covid-checklist">
              Covid-19 Checklist
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
