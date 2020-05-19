import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import SchoolSchedule from "../components/SchoolSchedule";
import Button from "react-bootstrap/Button";

import { FaQuestionCircle } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";

const LogoWrapper = styled.div`
  width: fit-content;
  display: block;
  margin: 25px auto;
`;

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usingUTC: false,
      showTZModal: false
    };
  }

  toggleUTC() {
    this.setState({
      usingUTC: !this.state.usingUTC
    })
  }

  render() {
    let UTCText = <i>Below is the day-of schedule for QU's 2020 Commencement, <b>localized to your timezone</b> <FaQuestionCircle
      style={{cursor: "pointer"}}
      onClick={() => this.setState({ showTZModal: true })} />
    . To view times in UTC, <a href={"javascript:void(0);"} onClick={() => this.toggleUTC()}>click here</a>.</i>;

    if (this.state.usingUTC) {
      UTCText = <i>Below is the day-of schedule for QU's 2020 Commencement, <b>localized to UTC</b> <FaQuestionCircle
          style={{cursor: "pointer"}}
          onClick={() => this.setState({ showTZModal: true })} />
        . To view times in your timezone, <a href={"javascript:void(0);"} onClick={() => this.toggleUTC()}>click here</a>.</i>;
    }

    return (
      <Layout>
        <SEO title="Schedule" route="/schedule" />
        <LogoWrapper>
          <Logo size="medium" />
        </LogoWrapper>
        <div className="text-center">
          <h2>🎉 2020 Commencement Schedule 🎉</h2>

          <br/>

          {UTCText}

          <br/><br/>

          <i>
            Please show up 15 minutes before your school's time slot! (Just to make sure there's space on the server)
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

        <SchoolSchedule usingUTC={this.state.usingUTC} />

        <br/><br/><br/><br/>

        <Modal
          show={this.state.showTZModal}
          onHide={() => this.setState({ showTZModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Timezones
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              We localized this schedule to fit your time zone because
              you could be from any of QU's 20 represented timezones (20/24 on 🌎)!

              <br/><br/>

              In case we messed up getting your timezone, though, you can change it to UTC.

              <br/><br/>

              You seem to live in <b>{Intl.DateTimeFormat().resolvedOptions().timeZone}</b>. 🤠
            </p>
          </Modal.Body>
        </Modal>
      </Layout>
    )
  }
}

export default Schedule;
