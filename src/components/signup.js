import React, {useState} from "react";
import swal from "sweetalert";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import serialize from "../util/serialize";

const SignupForm = () => {
  const [validated, setValidated] = useState(false);

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
          swal("Success!", "You're signed up!", "success");
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
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="entry.1677400286"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="entry.993248599"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="someone@school.edu"
              name="entry.1555601280"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid school email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Timezone</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="GMT - 5"
            name="entry.1538936380"
            required 
          />
          <Form.Control.Feedback type="invalid">
            Please select a timezone.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>How would you like to participate?</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Graduate"
            name="entry.1806088227"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please select at least one option.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Register!</Button>
    </Form>
  );
};

export default SignupForm;