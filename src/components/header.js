import React from "react"
import { Link } from "gatsby"
import Navbar from './navbar'
import Logo from "./logo"
import { FaDiscord, FaFacebookSquare, FaTwitch } from 'react-icons/fa';
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
        <OutboundLink href="https://www.facebook.com/quaranteenu">
          <FaFacebookSquare className="header-icon"/>
        </OutboundLink>
        <OutboundLink href="https://www.twitch.tv/">
          <FaTwitch className="header-icon"/>
        </OutboundLink>
        <OutboundLink href="https://discordapp.com/">
          <FaDiscord className="header-icon"/>
        </OutboundLink>
      </div>
    </div>

      <Navbar />
  </header>
);

export default Header
