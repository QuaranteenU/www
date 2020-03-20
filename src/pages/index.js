import React from "react"
import { Link } from "gatsby"
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import FAQs from "../components/faqs"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSignedUp: -1
    };
  }

  componentDidMount() {
    const url = "https://sheets.googleapis.com/v4/spreadsheets/1WANjh9qm28VFb5pF6Ba3rMdvG1r93DbUpg-HdTxjs6c/values/Sheet1!A1:A3?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M";
    fetch(url, {
      method: "GET",
    }).then(res => res.json())
      .then(
        (result) => {
          // console.log("good", result);
          this.setState({
            countSignedUp: result.values[0][0]
          });
        },
        (error) => {
          // console.log("bad", error);
          this.setState({
            countSignedUp: -1
          });
        }
      )
  }


  render() {
    return (
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

            <h3>Class of 2020</h3>
            <p>
              We're lit. So far our graduating class is <strong>{this.state.countSignedUp}</strong> strong!
            </p>

            <br/><br/><br/><br/>


            <h3>Another header</h3>
            <p>Another sub header</p>

            <br/><br/><br/><br/>

            <FAQs />
          </Container>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
