import React, { useState } from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { OutboundLink } from "gatsby-plugin-google-analytics";


import { simpleEmailPattern } from "../util/regex";

const PWLB = styled.div`
  white-space: pre-wrap;
`;

const RSVPForm = ({ fieldNames }) => {
  const [coming, setComing] = useState(true);

  return (
    <Form>
      <PWLB>
        <strong>The wait is over — get ready to make history with us on May 22nd in Minecraft!</strong><br/><br/>
        Please let us know whether you're coming so we can plan the coolest event of the spring semester.<br/>
        The logistics will roughly be:
        <ol>
          <li>You let us know whether you're coming by May 12th.</li>
          <li>We email you your graduation time at least a week before the ceremony.</li>
          <li>
            You are COMMENCED:
            <ul>
              <li>Have your name read</li>
              <li>Walk the QU stage to get your personalized diploma</li>
              <li>Rep your school colors, if you like</li>
              <li>Say hi to your mom on stream</li>
              <li>Be immortalized as part of the ceremony that's been covered by WIRED, The Verge, NBC News, The Boston Globe, Chronicle, and many others</li>
            </ul>
          </li>
          <li>Explore QU campus (it's really, really big) and mingle with other graduates.</li>
        </ol><br/>
        You'll be on stage for 1 minute, but you can stay on the server as long as you like before and after you walk.<br/>
        <strong>
          <i>NOTE: Please use your university/college email! We need it to get your school name and colors. :)</i>
        </strong>
      </PWLB><br/><br/>

      <Form.Row>
        <Form.Group as={Col} md="6" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="someone@gmail.com"
            pattern={simpleEmailPattern}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="comingYesNo">
          <Form.Label>Are you coming to the ceremony on May 22nd?</Form.Label>
          <Form.Control as="select" required>
            <option value="">-- Select an option --</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      {coming && (
        <React.Fragment>
          <h2>About you</h2>
          <p>We're so glad you're coming! All we need now is your degree information, i.e. what will show up on your QU Diploma!</p>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="fullName">
              <Form.Label>Your Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Graduating Gradperson"
                required
              />
              <Form.Text className="text-muted">
                Please enter it the way you'd like it displayed on a diploma
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Your Degree</Form.Label>
              <Form.Control as="select" required>
                <option value="">-- Select an option --</option>
                <option>Bachelor of Arts</option>
                <option>Bachelor of Science</option>
                <option>Master of Arts</option>
                <option>Master of Science</option>
                <option>Doctorate (PhD)</option>
                <option>Other</option>
              </Form.Control>
              <Form.Text className="text-muted">
                E.g. Bachelors, Masters, PhD, etc.
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Your Major(s)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Underwater Basketweaving"
                required
              />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Your Minor(s)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Aground Boxmaking"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Anything else you'd like to include?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your answer"
                required
              />
              <Form.Text className="text-muted">
                (Optional) E.g. Latin honors, first-gen student, etc.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Phonetic spelling of your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your answer"
                required
              />
              <Form.Text className="text-muted">
                (Optional) So that we pronounce your name properly. Using IPA (<OutboundLink href="https://www.ipachart.com/">https://www.ipachart.com/</OutboundLink>) would be extra helpful!
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <h3>Logistics</h3>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Would you prefer to graduate with students from your school or students in your timezone?</Form.Label>
              <Form.Control as="select" required>
                <option value="">-- Select an option --</option>
                <option>By School</option>
                <option>By Timezone</option>
              </Form.Control>
              <Form.Text className="text-muted">
                This is so we don't wake you up at a crazy hour to play Minecraft. When we say "timezone", we mean the timezone you're currently living in.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Senior quote?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your answer"
                required
              />
              <Form.Text className="text-muted">
                This will be read on stream by a text-to speech bot when you go on stage! Just don't offend anyone, lol.
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <h3>One last thing...</h3>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>I confirm I have a Minecraft Java Edition account or will get one before the ceremony</Form.Label>
              <Form.Control as="select" required>
                <option value="">-- Select an option --</option>
                <option>Yup, I got it!</option>
                <option>I can't get a copy by then but I'm fine with an NPC walking for me</option>
              </Form.Control>
              <Form.Text className="text-muted">
                You'll need this to log onto the graduation server -- $26.95 from <OutboundLink href="https://www.minecraft.net/en-us/store/minecraft-java-edition">https://www.minecraft.net/en-us/store/minecraft-java-edition</OutboundLink> (If you can't get a copy in time for the ceremony, we can have an NPC with your name walk across the stage when it's your turn!)
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Your Minecraft Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="MCNewGrad2020"
                required
              />
              <Form.Text className="text-muted">
                You can sign up for an account without purchasing the game right away here: <OutboundLink href="https://account.mojang.com/">https://account.mojang.com/</OutboundLink> (Write "NPC" if you are requesting an NPC to walk)
              </Form.Text>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Anything else you'd like to tell us?</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form.Row>
        </React.Fragment>
      )}
    </Form>
  );
}

export default RSVPForm;