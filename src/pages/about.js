import React from "react";
import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import ContainerLayout from "../layouts/container";
import SEO from "../components/seo";
import Logo from "../components/logo";

const LogoWrapper = styled.div`
  width: fit-content;
  display: block;
  margin: 25px auto;
`;

const About = () => (
  <ContainerLayout>
    <SEO title="About Us" route="about" />
    <LogoWrapper>
      <Logo size="large" />
    </LogoWrapper>
    <p><strong>Quaranteen University</strong> is an international not-for-profit institution. It was founded in March 2020 because two BU students were bored. Being quarantined in a dorm for a week makes you crazy.</p>
    <p>
      COVID-19 won't stop us from delivering everyone's hard-earned diplomas. Sign up to graduate so we can all make blocky history together! And if you want to help organize Q.U. commencement, <OutboundLink href="https://m.me/quaranteenu" target="_blank">message us on Facebook</OutboundLink>. We'd love to have you!
    </p>
  </ContainerLayout>
);

export default About;
