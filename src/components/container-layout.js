import React from "react"
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../styles/gatsby.css"
import "../styles/main.css"

const ContainerLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="content-wrapper">{children}</Container>
      <Footer/>
    </>
  )
}

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerLayout
