import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MessengerChat from "../components/MessengerChat";
import { GlobalStyle, ContentWrapperStyle } from "../styles/global";

import "../styles/gatsby.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentWrapper = styled.main`
  ${ContentWrapperStyle}
`;

const Layout = withTheme((props) => (
  <>
    <GlobalStyle theme={props.theme} />
    <Header />
    <ContentWrapper>{props.children}</ContentWrapper>
    <MessengerChat />
    <Footer/>
  </>
));

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
