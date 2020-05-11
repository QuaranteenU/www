import React, { useState } from "react";
import { Link } from "gatsby";
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
import RSVPForm from "../components/RSVPForm";
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

const RSVP = () => {
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
          }
        )
        .then(res => {
          setUserInfo(res.data);
          const { rsvpd, signUpInfo, signedUp } = res.data;

          if (rsvpd && signedUp) {
            swal({
              title: "Woohoo!",
              icon: partyhat,
              text: `You're already RSVP'd! Nice work!`,
              button: "yuh",
            });
          } else if (signUpInfo && signUpInfo.role === "Audience") {
            swal({
              title: "Woohoo!",
              icon: partyhat,
              text: `You're an audience member, so we don't need to collect your virtual diploma information. All you need to do is show up the day of! See you at commencement!`,
              button: "yuh",
            });
          } else if (!rsvpd && signedUp) {
            swal({
              title: "Time to RSVP!",
              text: `Thanks for registering your interest earlier! All we need now is your virtual diploma information (full name, major, minor, etc.) and you're all set!`,
              button: "yuh",
            });
          } else if (!rsvpd && !signedUp) {
            swal({
              title: "Hi there!",
              text: `Looks like you didn't register for commencement earlier, but luckily for you...`,
              button: "yuh",
            });
          }
          setSubmitted(false);
        })
        .catch(err => console.error(err));
    }

    setValidated(true);
  };

  const fieldNames = {
    firstName: "entry.1677400286",
    lastName: "entry.993248599",
    email: "entry.1555601280",
    timezone: "entry.1538936380",
    role: "entry.1806088227",
    domain: "entry.144425953",
  };

  return (
    <Layout>
      <SEO title="RSVP" route="/rsvp" />
      <DeadlineChecker date="05/13/2020" closedContent={<h1>rip</h1>}>
        <h1>RSVP for Commencement!</h1>
        <p className="lead">
          Fill out your info for your virtual diploma! <em>NOTE:</em> This is for the college/university commencement ceremony. If you're looking for the high school graduation ceremony, RSVP <Link to="/academygrad">here</Link>!
          <br />
          <small className="text-muted">
            <em>
              RSVPs close{" "}
              <strong>
                May 12<sup>th</sup>
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
                    placeholder="someone@gmail.com"
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
                Hype hype
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
          <RSVPForm userInfo={userInfo.signUpInfo} />
        )}
      </DeadlineChecker>
    </Layout>
  );
};

export default RSVP;
