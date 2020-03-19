import { Link } from "gatsby"
import React from "react"

import "../styles/main.css"

const Header = () => (
  <header>
    <div className="header-container">
      <Link to="/">
        Logo
      </Link>
    </div>
  </header>
);

export default Header
