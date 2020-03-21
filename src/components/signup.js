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

import partyhat from "../images/party.png"

const SwalContent = () => (
  <div>
    <p>
      You're all signed up! Stay tuned for more information, we'll send you an email as soon as we have updates. In the meantime, please spread the word and tell your friends!
    </p>
    
    <div className="share-buttons">
      <iframe
        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fquaranteen.university%2F&layout=button&size=small&appId=601642820272377&width=67&height=20"
        width="67"
        height="20"
        style={{border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Facebook Share Button" />
      <iframe
        id="twitter-widget-0"
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allowFullScreen={true}
        className="twitter-share-button twitter-share-button-rendered twitter-tweet-button"
        style={{
          position: "static",
          visibility: "visible",
          width: "60px",
          height: "20px"
        }}
        title="Twitter Tweet Button"
        src="https://platform.twitter.com/widgets/tweet_button.d0f13be8321eb432fba28cfc1c3351b1.en.html#dnt=false&amp;hashtags=QuaranteenU&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Flocalhost%3A8000%2Fregister%2F&amp;size=m&amp;text=I%20just%20signed%20up%20for%20virtual%20commencement%20at%20Quaranteen%20University!%20You%20can%20too!&amp;time=1584765354022&amp;type=share&amp;url=https%3A%2F%2Fquaranteen.university%2F&amp;via=QuaranteenU"
        data-url="https://quaranteen.university/" />
    </div>
  </div>
)

const SignupForm = ({ role }) => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = event => setEmail(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const postURL = `https://docs.google.com/forms/d/e/1FAIpQLScTKQ9YHAMJqLxgVztjnmp5b3kfaoSgKl_KwaF4VeFj2-tRhw/formResponse?${serialize(form)}`;
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
            content: <SwalContent />,
            button: "yuh"
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
        <Form.Group as={Col} md="6" controlId="firstname">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="entry.1677400286"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="lastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="entry.993248599"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="email">
          <Form.Label>School Email</Form.Label>
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="someone@school.edu"
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:edu|org)\b"
              name="entry.1555601280"
              value={email}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid school email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
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
            name="entry.1538936380"
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
            <option>GMT+8:00 (China Taiwan Time)</option>
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
            name="entry.1806088227"
            defaultValue={role}
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
              name="entry.144425953"
              readOnly
              required
            />
            <Form.Control.Feedback type="invalid">
              You shouldn't be able to see this!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Button type="submit" className="wiggle">Hype hype</Button>
    </Form>
  );
};

export default SignupForm;