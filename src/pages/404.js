import React from "react";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import showBSOD from "../util/bsod.js";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" route="/404" />
    <h1 className="fontalicious">
      <span role="img" aria-label="sad">
        😔
      </span>{" "}
      Aww
    </h1>
    <p>
      Unfortunately, we didn't have the budget to create the page you were
      looking for. However, I did find this button our developer left behind in
      the source code. Not too sure what it does...
    </p>
    <Button variant="danger" onClick={showBSOD}>
      DO NOT CLICK
    </Button>
  </Layout>
);

export default NotFoundPage;
