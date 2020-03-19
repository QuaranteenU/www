import React from "react"
import { Link } from "gatsby"

import FAQs from "../components/faqs"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Quaranteens Commencement 2020</h1>
    <p>COV-19 won't stop this party. Come graduate with us in Minecraft, May 20 2019.</p>
    <Link to="/register">Add your name to the graduating class, lol</Link>

    <br/><br/><br/><br/>

    <h3>Walk the stage and receive your undergrad or grad diploma, virtually</h3>
    <p>We're going to livestream it, because we really don't have anything better to be doing under quarantine</p>


    <br/><br/><br/><br/>


    <h3>Another header</h3>
    <p>Another sub header</p>

    <br/><br/><br/><br/>

    <FAQs />


  </Layout>
)

export default IndexPage
