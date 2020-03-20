import React from "react"

import ContainerLayout from "../components/container-layout"
import SEO from "../components/seo"
import SignupForm from "../components/signup"

const Registration = () => (
  <ContainerLayout>
    <SEO title="Register" />
    <h1>Commencement Registration</h1>
    <p>Excited for virtual commencement? Let us know, and we'll keep you updated!</p>
    <SignupForm/>
  </ContainerLayout>
)

export default Registration
