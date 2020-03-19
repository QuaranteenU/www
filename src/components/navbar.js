import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => (
  <Container className="navbar">
    <Button variant="primary">About Us</Button>
    
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Courses
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Lmao</Dropdown.Item>
        <Dropdown.Item href="#/action-2">We're not a real university</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sorry</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Link to="/register">
      Commencement 2020
    </Link>
  </Container>
);

export default Navbar
