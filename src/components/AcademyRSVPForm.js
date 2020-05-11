import React, { useState } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import swal from "@sweetalert/with-react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import partyhat from "../images/party.png";
import { simpleEmailPattern } from "../util/regex";
import serialize from "../util/serialize";

const PWLB = styled.div`
  white-space: pre-wrap;
`;

const AcademyRSVPForm = ({ fieldNames, userInfo }) => {
  const [coming, setComing] = useState(false);
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setSubmitted(true);
      const formId = "1FAIpQLSd47yRAOgMTnw1AfZxBSGiXMYNTV3FYh2z83WydGv-dor2qwg";
      const postURL = `https://docs.google.com/forms/d/e/${formId}/formResponse?${serialize(
        form
      )}`;
      const config = {
        method: "GET",
        mode: "no-cors",
      };

      const formRequest = new Request(postURL, config);
      fetch(formRequest)
        .then(res => {
          if (res.status === 0 || res.status === 200) {
            swal({
              title: "Woohoo!",
              icon: partyhat,
              text:
                "Thanks for RSVPing! Keep your eye out for updates regarding the event, as more details on the event schedule will be sent out soon. We can't wait to see you at graduation!",
              button: "yuh",
            }).then(() => {
              form.reset();
              setSubmitted(false);
              setValidated(false);
              navigate("/");
            });
          } else {
            throw new Error("Request failed!");
          }
        })
        .catch(error => {
          swal("Oh no!", error, "error");
          console.error(error);
        });
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <PWLB>
        <strong>
          The wait is over — get ready to make history with us on May 30
          <sup>th</sup> in Minecraft!
        </strong>
        <br />
        <br />
        Please let us know whether you're coming so we can plan the coolest
        event of the spring semester.
        <br />
        The logistics will roughly be:
        <ol>
          <li>
            You let us know whether you're coming by May 19<sup>th</sup>.
          </li>
          <li>
            We email you your graduation time at least a week before the
            ceremony.
          </li>
          <li>
            You are GRADUATED:
            <ul>
              <li>Have your name read</li>
              <li>Walk the QU stage to get your personalized diploma</li>
              <li>Rep your school colors, if you like</li>
              <li>Say hi to your mom on stream</li>
              <li>
                Be immortalized as part of the ceremony that's been covered by
                WIRED, The Verge, NBC News, The Boston Globe, Chronicle, and
                many others
              </li>
            </ul>
          </li>
          <li>
            Explore QU campus (it's really, really big) and mingle with other
            graduates.
          </li>
        </ol>
        <br />
        You'll be on stage for 1 minute, but you can stay on the server as long
        as you like before and after you walk.
      </PWLB>
      <br />
      <br />

      <Form.Row>
        <Form.Group as={Col} md="6" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name={fieldNames.email}
            placeholder="someone@gmail.com"
            defaultValue={userInfo.email ? userInfo.email : ""}
            pattern={simpleEmailPattern}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="comingYesNo">
          <Form.Label>Are you coming to the ceremony on May 22nd?</Form.Label>
          <Form.Control
            as="select"
            name={fieldNames.comingYesNo}
            onChange={e => setComing(e.target.value === "Yes")}
            required
          >
            <option value="">-- Select an option --</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      {coming && (
        <React.Fragment>
          <h2>About you</h2>
          <p>
            We're so glad you're coming! All we need now is your degree
            information, i.e. what will show up on your QU Diploma!
          </p>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="fullname">
              <Form.Label>Your Full Name</Form.Label>
              <Form.Control
                type="text"
                name={fieldNames.fullname}
                placeholder="Graduating Gradperson"
                defaultValue={userInfo.name ? userInfo.name : ""}
                required
              />
              <Form.Text className="text-muted">
                Please enter it the way you'd like it displayed on a diploma
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="school">
              <Form.Label>Your School Name</Form.Label>
              <Form.Control
                type="text"
                name={fieldNames.school}
                placeholder="North Minecraft High School"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="honors">
              <Form.Label>Anything else you'd like to include?</Form.Label>
              <Form.Control
                type="text"
                name={fieldNames.honors}
                placeholder="Your answer"
              />
              <Form.Text className="text-muted">
                (Optional) E.g. Latin honors, first-gen student, etc.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="phonetic">
              <Form.Label>Phonetic spelling of your name</Form.Label>
              <Form.Control
                type="text"
                name={fieldNames.phonetic}
                placeholder="Your answer"
              />
              <Form.Text className="text-muted">
                (Optional) So that we pronounce your name properly. Using IPA (
                <OutboundLink href="https://www.ipachart.com/">
                  https://www.ipachart.com/
                </OutboundLink>
                ) would be extra helpful!
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="timezone">
              <Form.Label>Your Timezone</Form.Label>
              <Form.Control
                type="text"
                name={fieldNames.timezone}
                placeholder="GMT"
                defaultValue={userInfo.timezone ? userInfo.timezone : ""}
                required
              />
              <Form.Text className="text-muted">
                The timezone that you're currently in. Refer to
                <OutboundLink href="https://www.timeanddate.com/time/current-number-time-zones.html">
                  https://www.timeanddate.com/time/current-number-time-zones.html
                </OutboundLink>
                .
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <h3>Logistics</h3>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="logistics">
              <Form.Label>
                Would you prefer to graduate with students from your school or
                students in your timezone?
              </Form.Label>
              <Form.Control as="select" name={fieldNames.logistics} required>
                <option value="">-- Select an option --</option>
                <option>By School</option>
                <option>By Timezone</option>
              </Form.Control>
              <Form.Text className="text-muted">
                This is so we don't wake you up at a crazy hour to play
                Minecraft. When we say "timezone", we mean the timezone you're
                currently living in.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="quote">
              <Form.Label>
                Senior quote?
                <br />
              </Form.Label>
              <Form.Control
                type="text"
                name={fieldNames.quote}
                placeholder="Your answer"
              />
              <Form.Text className="text-muted">
                (Optional) This will be read on stream by a text-to speech bot
                when you go on stage! Just don't offend anyone, lol.
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <h3>One last thing...</h3>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="confirmMC">
              <Form.Label>
                I confirm I have a Minecraft Java Edition account or will get
                one before the ceremony
              </Form.Label>
              <Form.Control as="select" name={fieldNames.confirmMC} required>
                <option value="">-- Select an option --</option>
                <option>Yup, I got it!</option>
                <option>
                  I can't get a copy by then but I'm fine with an NPC walking
                  for me
                </option>
              </Form.Control>
              <Form.Text className="text-muted">
                You'll need this to log onto the graduation server -- $26.95
                from{" "}
                <OutboundLink href="https://www.minecraft.net/en-us/store/minecraft-java-edition">
                  https://www.minecraft.net/en-us/store/minecraft-java-edition
                </OutboundLink>{" "}
                (If you can't get a copy in time for the ceremony, we can have
                an NPC with your name walk across the stage when it's your
                turn!)
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="mcUsername">
              <Form.Label>Your Minecraft Username</Form.Label>
              <Form.Control
                type="text"
                name={fieldNames.mcUsername}
                placeholder="MCNewGrad2020"
                required
              />
              <Form.Text className="text-muted">
                You can sign up for an account without purchasing the game right
                away here:{" "}
                <OutboundLink href="https://account.mojang.com/">
                  https://account.mojang.com/
                </OutboundLink>{" "}
                (Write "NPC" if you are requesting an NPC to walk)
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="extra">
              <Form.Label>Anything else you'd like to tell us?</Form.Label>
              <Form.Control as="textarea" name={fieldNames.extra} rows="3" />
            </Form.Group>
          </Form.Row>
        </React.Fragment>
      )}

      <Button type="submit" className="wiggle" disabled={submitted}>
        Hype hype
      </Button>
    </Form>
  );
};

export default AcademyRSVPForm;
