import React from "react";
import { graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

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
  margin-bottom: 50px;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" route="/" />
    <div style={{ marginTop: "-55px" }}>
      <LandingWrapper>
        <Landing fluid background={data.coverphoto.childImageSharp.fluid.src}>
          <LandingContent>
            <div style={{ flex: 1 }} />
            <h1>Quaranteen Commencement 2020</h1>
            <p className="lead">
              Thank you to everyone who made this possible!
            </p>
          </LandingContent>
        </Landing>
      </LandingWrapper>

      <Section>
        <h3>We did it!</h3>
        <p>
          After nearly 2 months of hard work, the Commencement and Graduation
          ceremonies ended up being far greater than we could've hoped for! All
          of us at QU are incredibly grateful for the positive reaction this
          project has gotten, and we're so glad that it was a meaningful
          experience for a lot of people. Over 500 students from nearly 200
          schools RSVP'd to QU Commencement, and nearly 100 students from over
          70 schools did the same for QUA Graduation! If you'd like to rewatch
          the ceremonies, you can find them (as well as the
          commencement/graduation speeches) on{" "}
          <OutboundLink href="https://www.youtube.com/channel/UCUa8-hoyDzHC1j9Pk0Pah_w">
            our YouTube channel
          </OutboundLink>
          . If you're interested in the stats, you can find the anonymized RSVP
          dataset{" "}
          <OutboundLink href="https://drive.google.com/drive/folders/1QEfPSKaEd_etBAsSQGEcRHp4bmQgapQE?usp=sharing">
            here
          </OutboundLink>
          .
        </p>
      </Section>

      <Section>
        <h3>Check out the code</h3>
        <p>
          Now that the event is done, we're closing up shop on the virtual
          graduation front, but we'd love for others to take what we've built
          and go on to do other great things! All our code is open-source and
          available on{" "}
          <OutboundLink href="https://github.com/QuaranteenU">
            our Github
          </OutboundLink>
          . All our repositories use GPL licenses, so the only requirement for
          using them is that whatever you make has to be open-source too. We
          hope that this will help the community create better and better
          resources for each other as time goes on.
        </p>
      </Section>

      <Section>
        <h3>Moving Forward</h3>
        <p>
          We're going to leave the event schedules to make it easier for people
          to find where they are in the YouTube videos, and all the social links
          in the header are still live in case you'd like to chat! The server is
          still live as well, and can currently still be accessed at{" "}
          <strong>play.quaranteen.university</strong>. However, the server is
          owned and operated by{" "}
          <OutboundLink href="https://craftbu.com">CraftBU</OutboundLink>, so
          going forward you should use that for connection information.
        </p>
      </Section>

      <Section>
        <h3>Where we've been mentioned</h3>
        <p>
          If you'd like to read about the event/the process leading up to it,
          check out these publications:{" "}
          <OutboundLink href="https://www.theverge.com/2020/3/31/21200972/college-students-graduation-minecraft-coronavirus-school-closures">
            The Verge
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://www.wired.com/story/quanranteen-university-minecraft-graduation/">
            WIRED
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://www.rollingstone.com/culture/culture-features/global-graduation-quaranteen-minecraft-1007713/">
            Rolling Stone
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://campustechnology.com/articles/2020/04/02/seniors-invited-to-participate-in-minecraft-graduation-ceremony.aspx">
            Campus Technology
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://www.chronicle.com/article/Virtual-BingoMinecraft/248450">
            The Chronicle of Higher Education
          </OutboundLink>
          ,{" "}
          <OutboundLink href="https://www.campusreform.org/?ID=14673">
            Campus Reform
          </OutboundLink>
          , and{" "}
          <OutboundLink href="https://thejournal.com/articles/2020/04/02/seniors-invited-to-participate-in-minecraft-graduation-ceremony.aspx">
            The Journal
          </OutboundLink>
          .
        </p>
      </Section>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    coverphoto: file(relativePath: { eq: "classphoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
