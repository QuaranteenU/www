import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import TeamGrid from "../components/TeamGrid";

const LogoWrapper = styled.div`
  width: fit-content;
  display: block;
  margin: 25px auto;
`;

const About = () => (
  <Layout>
    <SEO title="About Us" route="about" />
    <LogoWrapper>
      <Logo size="large" />
    </LogoWrapper>
    <p>
      <strong>Quaranteen University</strong> is an international not-for-profit
      institution. It was founded in March 2020 because two BU students were
      bored. Being quarantined in a dorm for a week makes you crazy.
    </p>
    <TeamGrid />
  </Layout>
);

export default About;
