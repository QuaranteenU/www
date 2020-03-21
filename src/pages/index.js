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
      countSignedUp: -1,
      countUniqueSchools: -1
    };
  }

  componentDidMount() {
    const url = "https://sheets.googleapis.com/v4/spreadsheets/1WANjh9qm28VFb5pF6Ba3rMdvG1r93DbUpg-HdTxjs6c/values/Sheet1!A1:B1?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M";
    fetch(url, {
      method: "GET",
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            countSignedUp: result.values[0][0],
            countUniqueSchools: result.values[0][1]
          });
        },
        (error) => {
          this.setState({
            countSignedUp: -1,
            countUniqueSchools: -1
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
              <h1>Quaranteen Commencement 2020</h1>
              <p>
                Come graduate in Minecraft on May 22. Lol
              </p>
              <span>
              <Link to="/register" state={{ graduateOrAudience: "Graduate" }} className="wiggle">
                <Button>
                  Join the graduating class
                </Button>
              </Link>
              <Link to="/register" state={{ graduateOrAudience: "Audience" }} className="wiggle">
                <Button>
                  Join the audience
                </Button>
              </Link>
              </span>
            </Container>
          </Jumbotron>

          <Container>
            <section className="landing-section">
              <h3>Walk the stage and receive your undergrad or grad diploma, virtually</h3>
              <p>
                Have you worked hard for years but are graduating with no recognition? Forced to leave campus and your friends?
              </p>
              <p>Us too, but coronavirus won't stop the class of 2020. 😤</p>
              <p>We're going to livestream this because we don't have anything better to do under quarantine lmao.</p>
            </section>

            <section className="landing-section">
              <h3>Who's coming?</h3>
              <p>
                So far the class of 2020 is <strong>{this.state.countSignedUp}</strong> strong, comprised of <strong>{this.state.countUniqueSchools}</strong> different schools. Join us and be a part of internet history!
              </p>
            </section>

            <section className="landing-section">
              <h3>How's this gonna work?</h3>
              <p>Once enough people express interest, we'll select graduation times for everyone (and check you can make it). You'll connect to the world, get dressed into robes dyed in your school's color, have your name called, and walk up to receive your diploma on front of everyone. Plus, it will all be livestreamed!</p>

              <p>If a lot of people from your school sign up, maybe you could graduate together??</p>
            </section>

            <FAQs />
          </Container>
        </div>
      </Layout>
    )
  }
}

export default IndexPage