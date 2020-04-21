import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Footer from "./Footer";
import { GlobalStyle } from "../styles/global";

import "../styles/gatsby.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentWrapper = styled(Container)`
  flex: 1 0 auto;
  margin-top: 25px;
`;

const Layout = withTheme(props => (
  <React.Fragment>
    <GlobalStyle theme={props.theme} />
    <Header />
    <ContentWrapper>{props.children}</ContentWrapper>
    <Footer />
  </React.Fragment>
));

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
