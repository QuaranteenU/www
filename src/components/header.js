import { Link } from "gatsby"
import React from "react"
import Image from "./image"

import "../styles/main.css"

const Header = () => (
  <header>
    <div className="header-container">
      <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
        <Link to="/">
          <Image />
        </Link>
      </div>


    </div>
  </header>
);

export default Header
