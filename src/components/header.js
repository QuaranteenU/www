import React from "react"
import { Link } from "gatsby"
//import Navbar from './navbar'
import Logo from "./logo"
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare, FaDiscord, FaTwitch } from 'react-icons/fa';
import { OutboundLink } from "gatsby-plugin-google-analytics"

import styled from "styled-components"

import "../styles/header.css"

const TomatoButton = styled(Button)`
  color: tomato;
  background: tomato;
`;

const Header = () => (
  <header>
    <div className="header-container">
      <Link className="home-link" to="/">
        <Logo/>
        <h1 className="hvr-underline-from-center">Quaranteen University</h1>
      </Link>
        
      <div>
        <OutboundLink href="https://discord.gg/mhH65sR" target="_blank">
          <FaDiscord className="header-icon"/>
        </OutboundLink>
        <OutboundLink href="https://www.facebook.com/quaranteenu" target="_blank">
          <FaFacebookSquare className="header-icon"/>
        </OutboundLink>
        <OutboundLink href="https://twitter.com/QuaranteenU" target="_blank">
          <FaTwitterSquare className="header-icon"/>
        </OutboundLink>
        <OutboundLink href="https://www.twitch.tv/QuaranteenU" target="_blank">
          <FaTwitch className="header-icon"/>
        </OutboundLink>
        <OutboundLink href="mailto:admissions@quaranteen.university?subject=Virtual Commencement 2020" target="_blank">
          <FaEnvelopeSquare className="header-icon"/>
        </OutboundLink>
      </div>
    </div>

    <Navbar className="container" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Link className="hvr-underline-from-center" to="/about">
            About Us
          </Link>
          <Link className="hvr-underline-from-center" to="/courses">
            Courses
          </Link>
          <Link className="hvr-underline-from-center" to="/livestream">
            Livestream
          </Link>

          <NavDropdown title="Events" alignRight>
            <NavDropdown.Item as="button">
              <Link className="hvr-underline-from-center" to="/register">
                QU Commencement
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="button">
              <Link className="hvr-underline-from-center" to="/academy">
                QUA Graduation
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header
