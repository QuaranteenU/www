import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Container from "react-bootstrap/Container";
import Header from "../components/header";
import Footer from "../components/footer";
import { GlobalStyle } from "../styles/global"

import "../styles/gatsby.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

const ContainerLayout = withTheme((props) => (
  <>
    <GlobalStyle theme={props.theme} />
    <Header />
    <Container className="content-wrapper">{props.children}</Container>
    <Footer/>
  </>
));

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerLayout;