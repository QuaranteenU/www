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
    <div className="homepage-container">
      <Jumbotron fluid className="landing">
        <Container className="jumbotron-content">
          <h1>Welcome to Commencement 2020</h1>
          <p>
            It's not what we we're expecting either
          </p>
          <Link to="/register">
            <Button>
              Join the class lol
            </Button>
          </Link>
        </Container>
      </Jumbotron>

      <Container>
        <h3>Walk the stage and receive your undergrad or grad diploma, virtually</h3>
        <p>
          Forced to leave your campus and your friends? Stuck in quarantine? Well, so are we but COVID-19 won't stop Quaranteen University. Come graduate with us in Minecraft, May 22 2020.
        </p>
        <p>We're going to livestream it, because we really don't have anything better to be doing under quarantine</p>


        <br/><br/><br/><br/>


        <h3>Another header</h3>
        <p>Another sub header</p>

        <br/><br/><br/><br/>

        <FAQs />
      </Container>
    </div>
  </Layout>
)

export default IndexPage
