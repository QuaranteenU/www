import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalStyle, ContentWrapperStyle } from "../styles/global";

import "../styles/gatsby.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentWrapper = styled(Container)`
  ${ContentWrapperStyle}
`;

const ContainerLayout = withTheme((props) => (
  <>
    <GlobalStyle theme={props.theme} />
    <Header />
    <ContentWrapper>{props.children}</ContentWrapper>
    <Footer/>
  </>
));

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerLayout;