import React from "react";
import { Link } from "gatsby";
import styled, { withTheme } from "styled-components";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import {
  FaFacebookSquare,
  FaTwitterSquare,
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
        <SocialIcon href="https://discord.gg/KwTX26Q" target="_blank">
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

          <Link className="hvr-underline-from-center" to="/courses">
            Courses
          </Link>

          <Link className="hvr-underline-from-center" to="/schedule">
            University Schedule
          </Link>

          <Link className="hvr-underline-from-center" to="/academy-schedule">
            High School Schedule
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
