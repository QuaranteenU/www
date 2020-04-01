import React from "react"
import { Link } from "gatsby"
import Navbar from './navbar'
import Logo from "./logo"
import { FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare, FaDiscord, FaTwitch } from 'react-icons/fa';
import { OutboundLink } from "gatsby-plugin-google-analytics"

import "../styles/header.css"

const Header = () => (
  <header>
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>

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
    <Navbar />
  </header>
);

export default Header
