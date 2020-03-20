import React from "react"

import ContainerLayout from "../components/container-layout"
import SEO from "../components/seo"
import LogoBig from "../components/logo-big"

const About = () => (
  <ContainerLayout>
    <SEO title="About Us" />
    <h1>About Quaranteen U.</h1>
    <div style={{width: "150px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "25px", marginBottom: "25px"}}>
      <LogoBig />
    </div>
    <p>Quaranteen University is an international not-for-profit institution. It was founded in March 2020 because two BU students were bored. Being quarantined in a dorm for a week really makes you crazy.</p>
    <p>
      COVID-19 won't stop us from delivering everyone's hard-earned diplomas. Sign up to graduate so we can all make blocky history together. And if you want to help organize Q.U. commencement, <a href='https://m.me/quaranteenu'>message us on Facebook.</a> We'd love to have you!
    </p>
  </ContainerLayout>
)

export default About
