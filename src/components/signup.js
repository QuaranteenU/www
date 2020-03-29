import React, {useState} from "react";
import swal from "@sweetalert/with-react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaQuestionCircle } from 'react-icons/fa';
import serialize from "../util/serialize";
import { universityEmailPattern, simpleEmailPattern } from "../util/regex";

import partyhat from "../images/party.png"
import SignupSwal from "./SignupSwal";

const SignupForm = ({ defaultRole, formId, fieldNames, simpleEmail }) => {
  const [validated, setValidated] = useState(false);
  const [formRole, setFormRole] = useState(defaultRole);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = event => setEmail(event.target.value);
  const handleRoleChange = event => setFormRole(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setSubmitted(true);
      const postURL = `https://docs.google.com/forms/d/e/${formId}/formResponse?${serialize(form)}`;
      const config = {
        method: 'GET',
        mode: 'no-cors',
      };

      const formRequest = new Request(postURL, config);
      fetch(formRequest).then(res => {
        if (res.status === 0 || res.status === 200) {
          swal({
            title: "Woohoo!",
            icon: partyhat,
            content: <SignupSwal />,
            button: "yuh"
          }).then(() => {
            form.reset();
            setFormRole("");
            setEmail("");
            setSubmitted(false);
            setValidated(false);
          });
        } else {
          throw new Error("Request failed!")
        }
      }).catch(error => {
        swal("Oh no!", error, "error");
        console.error(error);
      });
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name={fieldNames.firstName}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name={fieldNames.lastName}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        {simpleEmail ? (
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="someone@gmail.com"
                  pattern={simpleEmailPattern}
                  name={fieldNames.email}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          ) : (
            <Form.Group as={Col} md="6" controlId="email">
              <Form.Label>{formRole === 'Audience' ? "" : "University "}Email Address</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder={formRole === 'Audience' ? "someone@gmail.com" : "someone@school.edu"}
                  pattern={formRole === 'Audience' ? simpleEmailPattern : universityEmailPattern}
                  name={fieldNames.email}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid {formRole === 'Audience' ? "" : <strong>university/college</strong>} email address.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          )
        }
          
        <Form.Group as={Col} md="6" controlId="timezone">
          <Form.Label>
            Timezone <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>
                  We'll match you with a graduation time that doesn't keep you up late.
                </Tooltip>
              }
            >
              <FaQuestionCircle />
            </OverlayTrigger>
          </Form.Label>
          <Form.Control 
            as="select"
            name={fieldNames.timezone}
            required 
          >
            <option value="">-- Select a timezone --</option>
            <option>GMT-11:00 (Midway Islands Time)</option>
            <option>GMT-10:00 (Hawaii Standard Time)</option>
            <option>GMT-9:00 (Alaska Standard Time)</option>
            <option>GMT-8:00 (Pacific Standard Time)</option>
            <option>GMT-7:00 (Phoenix Standard Time)</option>
            <option>GMT-7:00 (Mountain Standard Time)</option>
            <option>GMT-6:00 (Central Standard Time)</option>
            <option>GMT-5:00 (Eastern Standard Time)</option>
            <option>GMT-5:00 (Indiana Eastern Standard Time)</option>
            <option>GMT-4:00 (Puerto Rico and US Virgin Islands Time)</option>
            <option>GMT-3:30 (Canada Newfoundland Time)</option>
            <option>GMT-3:00 (Argentina Standard Time)</option>
            <option>GMT-3:00 (Brazil Eastern Time)</option>
            <option>GMT-1:00 (Central African Time)</option>
            <option>GMT+0:00 (Greenwich Mean Time)</option>
            <option>GMT+1:00 (European Central Time)</option>
            <option>GMT+2:00 (Eastern European Time)</option>
            <option>GMT+2:00 (Egypt Standard Time)</option>
            <option>GMT+3:00 (Eastern African Time)</option>
            <option>GMT+3:30 (Middle East Time)</option>
            <option>GMT+4:00 (Near East Time)</option>
            <option>GMT+5:00 (Pakistan Lahore Time)</option>
            <option>GMT+5:30 (India Standard Time)</option>
            <option>GMT+6:00 (Bangladesh Standard Time)</option>
            <option>GMT+7:00 (Vietnam Standard Time)</option>
            <option>GMT+8:00 (China Standard Time)</option>
            <option>GMT+8:00 (Taipei Standard Time)</option>
            <option>GMT+9:00 (Japan Standard Time)</option>
            <option>GMT+9:30 (Australia Central Time)</option>
            <option>GMT+10:00 (Australia Eastern Time)</option>
            <option>GMT+11:00 (Solomon Standard Time)</option>
            <option>GMT+12:00 (New Zealand Standard Time)</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select a timezone.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="role">
          <Form.Label>How would you like to participate?</Form.Label>
          <Form.Control 
            as="select"
            name={fieldNames.role}
            value={formRole}
            onChange={handleRoleChange}
            required 
          >
            <option value="">-- Select a role --</option>
            <option value="Graduate">Graduate</option>
            <option value="Audience">Audience Member</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select an option.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="emaildomain" className="d-none">
          <Form.Label>Email Domain</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              value={email.split('@')[1] || ''}
              name={fieldNames.domain}
              readOnly
              required
            />
            <Form.Control.Feedback type="invalid">
              You shouldn't be able to see this!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Button type="submit" className="wiggle" disabled={submitted}>Hype hype</Button>
    </Form>
  );
};

export default SignupForm;