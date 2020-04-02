import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/gatsby.css";
import "../styles/main.css";

const ContainerLayout = ({ children }) => (
  <>
    <Header />
    <Container className="content-wrapper">{children}</Container>
    <Footer/>
  </>
);

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerLayout;