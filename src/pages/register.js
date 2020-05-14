import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Registration = ({ location }) => (
  <Layout>
    <SEO title="Register" route="/register" />
    <h1>Registration Closed!</h1>
    <p className="lead">
      Although registration has closed, due to a technical issue with our email
      system we're opening up the RSVP to all interested students instead of
      only those who had already registered. You can find the RSVP form{" "}
      <Link to="/newgrad">here</Link>!
    </p>
  </Layout>
);

export default Registration;
