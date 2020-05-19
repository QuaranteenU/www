import React from "react";
import { Link } from "gatsby";
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
      <h2>🎉 2020 Commencement Schedule 🎉</h2>

      <br/>

      <i>
        Below is the day-of schedule for QU's 2020 Commencement, localized to your timezone. To view times in UTC, click <a href={"AA"}>here</a>.
      </i>

      <br/><br/>

      <i>
        Please try to show up 15 minutes before your school's time slot!
      </i>

      <br/><br/>

      <div className="action-buttons">
        <Link to="/instructions">
          <Button className="wiggle">
            How to join the graduation server
          </Button>
        </Link>
      </div>
    </div>

    <br/><br/>

    <SchoolSchedule/>

    <br/><br/><br/>
  </Layout>
);

export default Schedule;
