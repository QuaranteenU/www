import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import SchoolSchedule from "../components/SchoolSchedule";
import Button from "react-bootstrap/Button";

const LogoWrapper = styled.div`
  width: fit-content;
  display: block;
  margin: 25px auto;
`;

const Schedule = () => (
  <Layout>
    <SEO title="Schedule" route="/schedule" />
    <LogoWrapper>
      <Logo size="medium" />
    </LogoWrapper>
    <div className="text-center">
      <h2>2020 Commencement Schedule</h2>

      <br/>

      <i>
        Below is the day-of schedule for QU's 2020 Commencement. Please try to show up
        15 minutes before your school's time slot!
      </i>

      <br/>

      <Button>How to connect to the server</Button>
    </div>

    <br/>

    <p>

    </p>

    <br/>

    <SchoolSchedule/>

    {/*<div className="content" dangerouslySetInnerHTML={{__html: perf}}></div>*/}
  </Layout>
);

export default Schedule;
