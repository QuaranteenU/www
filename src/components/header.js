import React from "react";
import { Link } from "gatsby";
import styled, { withTheme } from "styled-components";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

const HeaderContainer = styled.div`
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

const HomeLink = withTheme(styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.theme.palette.mainBrand};

  &:hover {
    color: ${props => props.theme.palette.mainBrand};
    text-decoration: none;
  }

  & > * {
    padding: 10px;
  }

  & > h1 {
    font-family: "Libre Baskerville", serif;
  }

  & > h1.hvr-underline-from-center:before {
    background: ${props => props.theme.palette.mainBrand};
  }
`);

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialIcon = withTheme(styled(OutboundLink)`
  & > svg {
    font-size: 2rem;
    margin: 0 5px;
    color: ${props => props.theme.palette.mainBrand};
  }
`);

const Header = () => (
  <header>
    <HeaderContainer>
      <HomeLink to="/">
        <Logo />
        <h1 className="hvr-underline-from-center">Quaranteen University</h1>
      </HomeLink>

      <SocialLinks>
        <SocialIcon href="https://discord.gg/UbrvVcU" target="_blank">
          <FaDiscord />
        </SocialIcon>
        <SocialIcon href="https://www.facebook.com/quaranteenu" target="_blank">
          <FaFacebookSquare />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/QuaranteenU" target="_blank">
          <FaTwitterSquare />
        </SocialIcon>
        <SocialIcon href="https://www.twitch.tv/QuaranteenU" target="_blank">
          <FaTwitch />
        </SocialIcon>
        <SocialIcon
          href="mailto:admissions@quaranteen.university?subject=Virtual Commencement 2020"
          target="_blank"
        >
          <FaEnvelopeSquare />
        </SocialIcon>
        <ThemeToggler />
      </SocialLinks>
    </HeaderContainer>

    <Navbar className="container" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Link className="hvr-underline-from-center" to="/about">
            About Us
          </Link>
          <Link className="hvr-underline-from-center" to="/schedule">
            Schedule
          </Link>
          <Link className="hvr-underline-from-center" to="/instructions">
            How to Join the Server
          </Link>
          <Link className="hvr-underline-from-center" to="/livestream">
            Livestream
          </Link>
          <Link className="hvr-underline-from-center" to="/courses">
            Courses
          </Link>


          <NavDropdown title="Ceremonies" alignRight>
            <NavDropdown.Item as="button">
              <Link className="hvr-underline-from-center" to="/newgrad">
                University
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="button">
              <Link className="hvr-underline-from-center" to="/academygrad">
                High School
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
