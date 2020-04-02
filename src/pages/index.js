import React from "react"
import { Link } from "gatsby"
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import FAQs from "../components/faqs"
import Layout from "../layouts/default"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSignedUp: '_',
      countUniqueSchools: '_'
    };
  }

  componentDidMount() {
    const url = "https://sheets.googleapis.com/v4/spreadsheets/1WANjh9qm28VFb5pF6Ba3rMdvG1r93DbUpg-HdTxjs6c/values/Sheet1!A1:B1?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M";
    fetch(url, {
      method: "GET",
    })
    .then(res => res.json())
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
    );
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" route="/" />
        <div className="homepage-container">
          <Jumbotron fluid className="landing">
            <Container className="jumbotron-content">
              <h1>Quaranteen Commencement 2020</h1>
              <p className="lead">
                Come graduate in Minecraft on May 22
              </p>
              <div className="action-buttons">
                <Link to="/register" state={{ role: "Graduate" }}>
                  <Button className="wiggle">
                    Join the graduating class
                  </Button>
                </Link>
                <Link to="/register" state={{ role: "Audience" }}>
                  <Button className="wiggle">
                    Join the audience
                  </Button>
                </Link>
              </div>
            </Container>
          </Jumbotron>

          <Container>
            <section className="landing-section">
              <h3>Walk the stage and receive your undergrad or grad diploma, virtually</h3>
              <p>
                Have you worked hard for years but are graduating with no recognition? Forced to leave campus and your friends?
              </p>
              <p>Us too, but coronavirus won't stop the Class of 2020. <span role="img" aria-label="huff">😤</span></p>
              <p>We're going to livestream this because we don't have anything better to do under quarantine lmao.</p>
              <p className="text-muted">
                <em>
                  Are you a graduating high school senior (or a friend/parent of one)? Use the <Link to="/academy">QUA Interest Form</Link> instead!
                </em>
              </p>
            </section>

            <section className="landing-section">
              <h3>Who's coming?</h3>
              <p>
                So far the QU Class of 2020 is <strong>{this.state.countSignedUp}</strong> strong, comprised of <strong>{this.state.countUniqueSchools}</strong> different schools. Join us and be a part of internet history!
              </p>
            </section>

            <section className="landing-section">
              <h3>How's this gonna work?</h3>
              <p>Once enough people express interest, we'll select graduation times for everyone (and check you can make it). You'll connect to the world, get dressed into robes dyed in your school's color, have your name called, and walk up to receive your diploma in front of everyone. Plus, it will all be livestreamed!</p>

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
