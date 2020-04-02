import React from "react";
import ContainerLayout from "../layouts/container";
import SEO from "../components/SEO";
import SignupForm from "../components/SignupForm";

class Academy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSignedUp: "_",
      countUniqueSchools: "_"
    };
  }

  componentDidMount() {
    const url = "https://sheets.googleapis.com/v4/spreadsheets/1UH9s7xIR0vH0IAwx4IxP7zmo0VDLXn0C8-we_z5qSf8/values/Sheet1!A1:B1?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M";
    fetch(url, {
      method: "GET",
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          countSignedUp: result.values[0][0],
          countUniqueSchools: result.values[0][1]
        });
      },
      (error) => {
        this.setState({
          countSignedUp: -1,
          countUniqueSchools: -1
        });
      }
    );
  }

  render() {
    const fieldNames = {
      firstName: "entry.1141301229",
      lastName: "entry.2060671913",
      email: "entry.1967356225",
      timezone: "entry.1019062185",
      role: "entry.1969986523",
      domain: "entry.1218733371"
    }
    
    return (
      <ContainerLayout>
        <SEO title="Academy" route="/academy" />
        <h1>Join Quaranteen University Academy</h1>
        <p className="lead">
          Due to popular demand, we're opening signups for a second graduation ceremony exclusively for high school seniors! Register your interest below! <br/>
          <small className="text-muted">
            <em>
              Currently, the QUA Class of 2020 is <strong>{this.state.countSignedUp}</strong> strong!
            </em>
          </small>
        </p>
        <SignupForm formId="1FAIpQLSeNuLMVROpzo3lAYzKNQHp2KFDgYtd6dLARuG848tEAQXKn4w" fieldNames={fieldNames} simpleEmail={true} />
      </ContainerLayout>
    );
  }
};

export default Academy;
