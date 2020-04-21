import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import FAQs from "../components/FAQs";

const LandingWrapper = styled.div`
  height: 500px;
`;

const Landing = styled(Jumbotron)`
  position: absolute;
  left: 0;
  right: 0;
  color: white;
  height: 500px;
  text-align: center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.25)
    ),
    url("${props => props.background}");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LandingContent = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  & > p {
    font-size: 1.5rem;
    flex: 1 0 auto;
  }

  & .wiggle {
    margin: 5px;
  }

  & a {
    width: fit-content;
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) {
    & > h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
`;

const Section = styled.section`
  margin-top: 50px;
  margin-bottom: 100px;
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSignedUp: "_",
      countUniqueSchools: "_",
      countGraduates: "_",
      countAudience: "_",
      topTen: [],
    };
  }

  componentDidMount() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1WANjh9qm28VFb5pF6Ba3rMdvG1r93DbUpg-HdTxjs6c/values/Sheet1!A1:D1?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M', {
      method: "GET",
    })
    .then(res => res.json())
    .then(
      result =>
        this.setState({
          countSignedUp: result.values[0][0],
          countUniqueSchools: result.values[0][1],
          countGraduates: result.values[0][2],
          countAudience: result.values[0][3],
        }),
      error => 
        this.setState({
          countSignedUp: -1,
          countUniqueSchools: -1,
          countGraduates: -1,
          countAudience: -1,
        })
    );

    fetch('https://sheets.googleapis.com/v4/spreadsheets/1R8R4Y9mlxURvyXY4xml_1LUddAtiWUI-fGF5aZV_nWM/values/Tally!A2:B?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M', {
      method: "GET",
    })
    .then(res => res.json())
    .then(
      result => {
        const topTen = result.values.filter(v => !v[0].includes('gmail')).sort((a,b) => a[1] > b[1]).slice(0,10);
        this.setState({ topTen });
      },
      error => console.error(error)
    );
  }

  render() {
    const {countSignedUp, countUniqueSchools, countGraduates, countAudience, topTen} = this.state;

    return (
      <Layout>
        <SEO title="Home" route="/" />
        <div style={{ marginTop: "-55px" }}>
          <LandingWrapper>
            <Landing fluid background={this.props.data.coverphoto.childImageSharp.fluid.src}>
              <LandingContent>
                <div style={{flex: 1}}/>
                <h1>Quaranteen Commencement 2020</h1>
                <p className="lead">
                  Come graduate in Minecraft on May 22
                </p>
                <div>
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
              </LandingContent>
            </Landing>
          </LandingWrapper>

          <Section>
            <h3>Walk the stage and receive your undergrad or grad diploma, virtually</h3>
            <p>
              Have you worked hard for years but are graduating with no recognition? Forced to leave campus and your friends?
            </p>
            <p>Us too, but coronavirus won't stop the Class of 2020. <span role="img" aria-label="huff">😤</span></p>
            <p>We're going to livestream this because we don't have anything better to do under quarantine lol.</p>
            <p className="text-muted">
              <em>
                Are you a graduating high school senior (or a friend/parent of one)? Use the <Link to="/academy">QUA Interest Form</Link> instead!
              </em>
            </p>
          </Section>

          <Section>
            <h3>Who's coming?</h3>
            <p>
              So far the QU Class of 2020 is <strong>{countSignedUp}</strong> strong ({countGraduates} grads and {countAudience} audience members), comprised of <strong>{countUniqueSchools}</strong> different schools. Join us and be a part of internet history!
            </p>
            <strong><em>Top Ten Schools by Signups</em></strong>
            {topTen && (
              <ol>
                {topTen.map(school => (
                  <li key={school[0]}>
                    {school[0]}: {school[1]}
                  </li>
                ))}
              </ol>
            )}
          </Section>

          <Section>
            <h3>How's this gonna work?</h3>
            <p>Once enough people express interest, we'll select graduation times for everyone (and check you can make it). You'll connect to the world, get dressed into robes dyed in your school's color, have your name called, and walk up to receive your diploma in front of everyone. Plus, it will all be livestreamed!</p>

            <p>If a lot of people from your school sign up, maybe you could graduate together??</p>
          </Section>

          <Section id="faqs">
            <FAQs />
          </Section>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    coverphoto: file(relativePath: { eq: "minecraft-hall.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
