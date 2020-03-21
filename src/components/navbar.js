import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container";

const Navbar = () => (
  <Container className="navbar">
    <Link to="/" className="d-none d-sm-block">
      Home
    </Link>
    <Link to="/about">
      About Us
    </Link>
    <Link to="/courses">
      Courses
    </Link>
    <Link to="/register">
      Commencement 2020
    </Link>
  </Container>
);

export default Navbar
