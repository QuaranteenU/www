import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import ContainerLayout from "../components/container-layout"
import SEO from "../components/seo"
import SignupForm from "../components/signup"

const Registration = ({location}) => (
  <ContainerLayout>
    <SEO title="Register" />
    <h1>Join the class</h1>
    <h2>THIS PERSON SHOULD BE: {location.state.graduateOrAudience}</h2>
    <p>Excited for virtual commencement? Let us know, and we'll keep you updated!</p>
    <SignupForm/>
    <p>
      Want to help out? <OutboundLink href="https://m.me/quaranteenu">Message us on Facebook!</OutboundLink> We're looking for Minecraft builders/modders and people with AWS experience.
    </p>
  </ContainerLayout>
);

export default Registration
