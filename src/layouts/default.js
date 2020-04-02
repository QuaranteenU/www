import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/gatsby.css";
import "../styles/main.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="content-wrapper">{children}</main>
    <Footer/>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
