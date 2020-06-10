import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import SchoolSchedule from "../components/SchoolSchedule";

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
      showTZModal: false,
    };
  }

  toggleUTC() {
    this.setState({
      usingUTC: !this.state.usingUTC,
    });
  }

  render() {
    let UTCText = (
      <i>
        Below is the day-of schedule for QU's 2020 Commencement,{" "}
        <b>localized to your timezone</b>{" "}
        <FaQuestionCircle
          style={{ cursor: "pointer" }}
          onClick={() => this.setState({ showTZModal: true })}
        />
        . To view times in UTC,{" "}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.toggleUTC();
          }}
        >
          click here
        </a>
        .
      </i>
    );

    if (this.state.usingUTC) {
      UTCText = (
        <i>
          Below is the day-of schedule for QU's 2020 Commencement,{" "}
          <b>localized to UTC</b>{" "}
          <FaQuestionCircle
            style={{ cursor: "pointer" }}
            onClick={() => this.setState({ showTZModal: true })}
          />
          . To view times in your timezone,{" "}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.toggleUTC();
            }}
          >
            click here
          </a>
          .
        </i>
      );
    }

    return (
      <Layout>
        <SEO title="Schedule" route="/schedule" />
        <LogoWrapper>
          <Logo size="medium" />
        </LogoWrapper>
        <div className="text-center">
          <h2>
            <span role="img" aria-label="party">
              🎉
            </span>{" "}
            2020 Commencement Schedule{" "}
            <span role="img" aria-label="party">
              🎉
            </span>
          </h2>

          <br />

          {UTCText}
        </div>

        <br />
        <br />

        <SchoolSchedule usingUTC={this.state.usingUTC} />

        <br />
        <br />
        <br />
        <br />

        <Modal
          show={this.state.showTZModal}
          onHide={() => this.setState({ showTZModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Timezones</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              We localized this schedule to fit your time zone because you could
              be from any of QU's 20 represented timezones (20/24 on{" "}
              <span role="img" aria-label="earth">
                🌎
              </span>
              )!
              <br />
              <br />
              In case we messed up getting your timezone, though, you can change
              it to UTC.
              <br />
              <br />
              Your timezone looks like{" "}
              <b>{Intl.DateTimeFormat().resolvedOptions().timeZone}</b>.{" "}
              <span role="img" aria-label="cowboy">
                🤠
              </span>
            </p>
          </Modal.Body>
        </Modal>
      </Layout>
    );
  }
}

export default Schedule;
