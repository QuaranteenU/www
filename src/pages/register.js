import React from "react";
import { Link } from "gatsby";

import ContainerLayout from "../layouts/container"
import SEO from "../components/seo";
import SignupForm from "../components/signup";

const Registration = ({ location }) => {
  let role = null;
  if (location && location.state) {
    role = location.state.role;
  }

  const fieldNames = {
    firstName: "entry.1677400286",
    lastName: "entry.993248599",
    email: "entry.1555601280",
    timezone: "entry.1538936380",
    role: "entry.1806088227",
    domain: "entry.144425953"
  }
  
  return (
  <ContainerLayout>
    <SEO title="Register" route="/register" />
    <h1>Join the {role === "Audience" ? "Audience" : "Graduating Class"}</h1>
    <p className="lead">
      Excited for virtual commencement? Let us know, and we'll keep you updated! <br/>
      <small className="text-muted">
        <em>
          Are you a graduating high school senior (or a friend/parent of one)? Use the <Link to="/academy">QUA Interest Form</Link> instead!
        </em>
      </small>
    </p>
    <SignupForm defaultRole={role} formId="1FAIpQLScTKQ9YHAMJqLxgVztjnmp5b3kfaoSgKl_KwaF4VeFj2-tRhw" fieldNames={fieldNames} simpleEmail={false} />
  </ContainerLayout>
)};

export default Registration
