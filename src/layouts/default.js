import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import { GlobalStyle } from "../styles/global"

import "../styles/gatsby.css";
import "../styles/main.css";

const Layout = withTheme((props) => (
  <>
    <GlobalStyle theme={props.theme} />
    <Header />
    <main className="content-wrapper">{props.children}</main>
    <Footer/>
  </>
));

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
