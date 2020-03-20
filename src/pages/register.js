import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import ContainerLayout from "../components/container-layout"
import SEO from "../components/seo"
import SignupForm from "../components/signup"

const Registration = () => (
  <ContainerLayout>
    <SEO title="Register" />
    <h1>Commencement Registration</h1>
    <p>Excited for virtual commencement? Let us know, and we'll keep you updated!</p>
    <SignupForm/>
    <p>
      Wanna help us out? We're looking for Minecraft builders/modders, as well as people with AWS experience. If this interests you, please reach out to us over <OutboundLink href="https://m.me/quaranteenu">Facebook</OutboundLink>!
    </p>
  </ContainerLayout>
)

export default Registration
