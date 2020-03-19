import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignupForm from "../components/signup"

const Registration = () => (
  <Layout>
    <SEO title="Register" />
    <h1>Commencement Registration</h1>
    <p>Excited for virtual commencement? Register your interest below!</p>
    <SignupForm/>
  </Layout>
)

export default Registration
