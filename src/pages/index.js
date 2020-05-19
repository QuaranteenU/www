import React from "react";
import { Link, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaQuestionCircle } from "react-icons/fa";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import FAQs from "../components/FAQs";

import UNIVERSITY_MAP from "../data/university_map";

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

const SchoolListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SchoolTable = styled.table`
  & td {
    ${props =>
      props.theme.isDark && "border-bottom: 1px solid hsla(0, 0%, 100%, 0.12)"}
  }

  & .school {
    font-family: "Libre Baskerville", serif;
  }

  & .signups {
    text-align: right;
  }
`;

const Section = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSignedUp: "_",
      countUniqueSchools: "_",
      countGraduates: "_",
      countAudience: "_",
      rankedSchools: [],
      showSchoolModal: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1WANjh9qm28VFb5pF6Ba3rMdvG1r93DbUpg-HdTxjs6c/values/Sheet1!A1:D1?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M",
      {
        method: "GET",
      }
    )
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

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1R8R4Y9mlxURvyXY4xml_1LUddAtiWUI-fGF5aZV_nWM/values/API!C2:D?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M",
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(
        result => {
          const filtered = result.values
            .filter(v => v[0] !== "")
            .filter(v => !v[0].includes("gmail"));

          const collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: "base",
          });
          const rankedSchools = filtered.sort((a, b) =>
            collator.compare(b[1], a[1])
          );
          this.setState({ rankedSchools });
        },
        error => console.error(error)
      );
  }

  render() {
    const {
      countSignedUp,
      countUniqueSchools,
      countGraduates,
      countAudience,
      rankedSchools,
      showSchoolModal,
    } = this.state;

    const SchoolList = ({ topTen }) => {
      if (!rankedSchools) return null;
      let schools = rankedSchools;
      if (topTen) schools = schools.slice(0, 10);
      return (
        <SchoolTable>
          <tbody>
            {schools.map((school, i) => (
              <tr key={school[0]}>
                <td className="school">
                  <strong>{`#${i + 1}`}</strong>{" "}
                  {UNIVERSITY_MAP.hasOwnProperty(school[0])
                    ? UNIVERSITY_MAP[school[0]]
                    : school[0]}
                </td>
                <td className="signups">{school[1]}</td>
              </tr>
            ))}
          </tbody>
        </SchoolTable>
      );
    };

    return (
      <Layout>
        <SEO title="Home" route="/" />
        <div style={{ marginTop: "-55px" }}>
          <LandingWrapper>
            <Landing
              fluid
              background={this.props.data.coverphoto.childImageSharp.fluid.src}
            >
              <LandingContent>
                <div style={{ flex: 1 }} />
                <h1>Quaranteen Commencement 2020</h1>
                <p className="lead">Come graduate in Minecraft on May 22</p>
              </LandingContent>
            </Landing>
          </LandingWrapper>

          <Section>
            <h3>Important note about RSVPs</h3>
            <p>
              Due to many university spam filters blocking emails sent from
              .university domains, we'll be sending out QU RSVP emails through{" "}
              <b>rooday@bu.edu</b>. Keep an eye out!
            </p>
          </Section>

          <Section>
            <h3>
              Walk the stage and receive your undergrad or grad diploma,
              virtually
            </h3>
            <p>
              Have you worked hard for years but are graduating with no
              recognition? Forced to leave campus and your friends?
            </p>
            <p>
              Us too, but coronavirus won't stop the Class of 2020.{" "}
              <span role="img" aria-label="huff">
                😤
              </span>
            </p>
            <p>
              We're going to livestream this because we don't have anything
              better to do under quarantine lol.
            </p>
            <p className="text-muted">
              <em>
                Are you a graduating high school senior? Use the{" "}
                <Link to="/academygrad">QUA RSVP Form</Link>!
              </em>
            </p>
          </Section>

          <Section>
            <h3>Who's coming?</h3>
            <p>
              Currently the QU Class of 2020 is <strong>{countSignedUp}</strong>{" "}
              strong ({countGraduates} grads and {countAudience} audience
              members), comprised of <strong>{countUniqueSchools}</strong>{" "}
              different schools. Join us and be a part of internet history! And
              if you can get all your classmates to sign up, you might just snag
              that top spot!
            </p>

            <Modal
              show={showSchoolModal}
              onHide={() => this.setState({ showSchoolModal: false })}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  Schools Ranked by Signups{" "}
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip>
                        We map school names based on their email domain, but
                        unfortunately we couldn't account for every combination.
                        If your school's name isn't showing up properly, let us
                        know and we'll add it!
                      </Tooltip>
                    }
                  >
                    <FaQuestionCircle />
                  </OverlayTrigger>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SchoolList />
              </Modal.Body>
            </Modal>

            <SchoolListContainer>
              <strong>
                <em>
                  Top Ten Schools by Signups (
                  <a
                    href="#"
                    onClick={() => this.setState({ showSchoolModal: true })}
                  >
                    view all schools
                  </a>
                  )
                </em>
              </strong>
              <SchoolList topTen />
            </SchoolListContainer>
          </Section>

          <Section>
            <h3>How's this gonna work?</h3>
            <p>
              Once enough people express interest, we'll select graduation times
              for everyone (and check you can make it). You'll connect to the
              world, get dressed into robes dyed in your school's color, have
              your name called, and walk up to receive your diploma in front of
              everyone. Plus, it will all be livestreamed!
            </p>

            <p>
              If a lot of people from your school sign up, maybe you could
              graduate together??
            </p>
          </Section>
          <OutboundLink href=""></OutboundLink>
          <Section>
            <h3>How to join the server?</h3>
            <div>
              <ol>
                <li>
                  First you'll need to get a copy of{" "}
                  <OutboundLink href="https://www.minecraft.net/en-us/store/minecraft-java-edition/">
                    Minecraft Java Edition
                  </OutboundLink>
                  .
                </li>
                <li>
                  After registering a Minecraft account and{" "}
                  <OutboundLink href="https://www.minecraft.net/en-us/download/">
                    downloading the launcher
                  </OutboundLink>
                  , launch Minecraft and press <strong>Play</strong> (make sure
                  next to <strong>Play</strong> it says{" "}
                  <strong>Latest Release</strong>).
                </li>
                <li>
                  Once the game is open, press <strong>Multiplayer</strong>.
                  Then press <strong>Add Server</strong>. For{" "}
                  <strong>Server Name</strong>, put{" "}
                  <strong>Quaranteen University</strong>. For{" "}
                  <strong>Server Address</strong>, put{" "}
                  <strong>play.quaranteen.university</strong> (you can leave the
                  other options alone). Then press <strong>Done</strong> (now
                  whenever you open Minecraft and press{" "}
                  <strong>Multiplayer</strong>, the server will be an option).
                </li>
                <li>
                  Select the <strong>Quaranteen University</strong> option from
                  the server list, and press <strong>Join Server</strong>.
                </li>
                <li>
                  Once you're in the server, follow the signs for{" "}
                  <strong>Quaranteen University</strong> (currently the QU world
                  is under construction and closed to the public, but feel free
                  to explore the rest of the server).
                </li>
              </ol>
            </div>
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
