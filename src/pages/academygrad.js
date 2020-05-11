import React, { useState } from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "styled-components";
import axios from "axios";
import swal from "@sweetalert/with-react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import AcademyRSVPForm from "../components/AcademyRSVPForm";
import DeadlineChecker from "../components/DeadlineChecker";
import { simpleEmailPattern } from "../util/regex";
import partyhat from "../images/party.png";

const FlexRow = styled(Form.Row)`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 15px;
  }
`;

const AcademyRSVP = () => {
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleEmailChange = event => setEmail(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setSubmitted(true);
      axios
        .post(
          "https://us-central1-quaranteen-university-276618.cloudfunctions.net/checkEmail",
          {
            email,
            event: "QUA",
          }
        )
        .then(res => {
          console.log(res.data);
          const { rsvpd, signUpInfo, signedUp } = res.data;

          if (rsvpd) {
            swal({
              title: "Woohoo!",
              icon: partyhat,
              text: "You're already RSVP'd! Nice work!",
              button: "yuh",
            });
          } else if (signUpInfo && signUpInfo.role === "Audience") {
            swal({
              title: "Woohoo!",
              icon: partyhat,
              text:
                "You're an audience member, so we don't need to collect your virtual diploma information. All you need to do is show up the day of! See you at graduation!",
              button: "yuh",
            });
          } else if (!rsvpd && signedUp) {
            swal({
              title: "Time to RSVP!",
              text:
                "Thanks for registering your interest earlier! All we need now is your virtual diploma information (full name, school, etc.) and you're all set!",
              button: "yuh",
            });
            setUserInfo(res.data.signUpInfo);
          } else if (!rsvpd && !signedUp) {
            swal({
              title: "Hi there!",
              text:
                "Looks like you didn't register for graduation earlier, but luckily for you our RSVP form is open! You'll just need to enter some extra info that the original signup form asked for (like your timezone).",
              button: "yuh",
            });
            setUserInfo({ email });
          }
          setSubmitted(false);
        })
        .catch(err => {
          setSubmitted(false);
          console.error(err);
        });
    }

    setValidated(true);
  };

  const fieldNames = {
    email: "entry.887259121",
    comingYesNo: "entry.2135894514",
    fullname: "entry.891515203",
    timezone: "entry.686409048",
    school: "entry.1806160119",
    honors: "entry.1397466450",
    phonetic: "entry.1064113496",
    logistics: "entry.956435478",
    quote: "entry.631727165",
    confirmMC: "entry.351728367",
    mcUsername: "entry.1256404244",
    extra: "entry.1515720683",
  };

  return (
    <Layout>
      <SEO title="Graduation RSVP" route="/academygrad" />
      <DeadlineChecker
        date="05/20/2020"
        closedContent={
          <React.Fragment>
            <h1>RSVP Closed!</h1>
            <p className="lead">
              In order to ensure that our team has enough time to schedule all
              the interested students, we had to close our RSVP form. We're
              sorry if you weren't able to sign up before the deadline, but we'd
              still love your support if you watched the event on{" "}
              <OutboundLink href="https://www.twitch.tv/QuaranteenU">
                Twitch
              </OutboundLink>
              !
            </p>
          </React.Fragment>
        }
      >
        <h1>RSVP for Graduation!</h1>
        <p className="lead">
          Fill out your info for your virtual diploma! <em>NOTE:</em> This is
          for the high school graduation ceremony. If you're looking
          for the college/university commencement ceremony, RSVP{" "}
          <Link to="/newgrad">here</Link>!
          <br />
          <small className="text-muted">
            <em>
              RSVPs close{" "}
              <strong>
                May 19<sup>th</sup>
              </strong>{" "}
              at <strong>midnight</strong>!
            </em>
          </small>
        </p>

        {!userInfo ? (
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder="newgrad@gmail.com"
                    pattern={simpleEmailPattern}
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <FlexRow>
              <Button type="submit" className="wiggle" disabled={submitted}>
                Check Status
              </Button>
              {submitted && (
                <React.Fragment>
                  <span>Looking you up in our database...</span>
                  <Spinner animation="border" variant="primary" />
                </React.Fragment>
              )}
            </FlexRow>
          </Form>
        ) : (
          <AcademyRSVPForm fieldNames={fieldNames} userInfo={userInfo} />
        )}
      </DeadlineChecker>
    </Layout>
  );
};

export default AcademyRSVP;
