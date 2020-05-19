import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import SchoolSchedule from "../components/SchoolSchedule";

const LogoWrapper = styled.div`
  width: fit-content;
  display: block;
  margin: 25px auto;
`;

const Schedule = () => (
  <Layout>
    <SEO title="Schedule" route="schedule" />
    <LogoWrapper>
      <Logo size="medium" />
    </LogoWrapper>
    <div className="text-center">
      <strong>Quaranteen University Commencement Schedule (Updates TBA)</strong>
    </div>

    <br/>

    <p>
      <i>
      Below is the day-of schedule for 2020 Commencement. Please try to show up
        15 minutes before your slot! Our IPs are <b>play.quaranteen.university</b> and <b>XX.XXX.XXX.XX:XXXX</b>.
      </i>
    </p>

    <br/>

    <SchoolSchedule/>

    {/*<div className="content" dangerouslySetInnerHTML={{__html: perf}}></div>*/}
  </Layout>
);

export default Schedule;
