import React from "react"
import { Link } from "gatsby"
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import FAQs from "../components/faqs"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron fluid className="landing">
      <Container>
        <h1>Commencement 2020 is on!</h1>
        <p>
          Forced to leave your campus and your friends? Stuck in quarantine? Well, so are we but COVID-19 won't stop Quaranteen University. Come graduate with us in Minecraft, May 22 2020.
        </p>
        <Link to="/register">
          <Button>
            Add your name to the graduating class, lol
          </Button>
        </Link>
      </Container>
    </Jumbotron>

    <Container>
      <h3>Walk the stage and receive your undergrad or grad diploma, virtually</h3>
      <p>We're going to livestream it, because we really don't have anything better to be doing under quarantine</p>


      <br/><br/><br/><br/>


      <h3>Another header</h3>
      <p>Another sub header</p>

      <br/><br/><br/><br/>

      <FAQs />
    </Container>
  </Layout>
)

export default IndexPage
