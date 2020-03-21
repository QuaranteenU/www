import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import ContainerLayout from "../components/container-layout"
import SEO from "../components/seo"
import SignupForm from "../components/signup"

const Registration = ({ location }) => {
  let role = null;
  if (location && location.state) {
    role = location.state.role;
  }
  
  return (
  <ContainerLayout>
    <SEO title="Register" />
    <h1>Join the {role === "Audience" ? "Audience" : "Graduating Class"}</h1>
    <p>Excited for virtual commencement? Let us know, and we'll keep you updated!</p>
    <SignupForm role={role} />
    <p>
      Want to help out? <OutboundLink href="https://m.me/quaranteenu">Message us on Facebook!</OutboundLink> We're looking for Minecraft builders/modders and people with AWS experience.
    </p>
  </ContainerLayout>
)};

export default Registration
