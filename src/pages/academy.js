import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

class Academy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSignedUp: "_",
      countUniqueSchools: "_",
    };
  }

  componentDidMount() {
    const url =
      "https://sheets.googleapis.com/v4/spreadsheets/1UH9s7xIR0vH0IAwx4IxP7zmo0VDLXn0C8-we_z5qSf8/values/Sheet1!A1:B1?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M";
    fetch(url, {
      method: "GET",
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            countSignedUp: result.values[0][0],
            countUniqueSchools: result.values[0][1],
          });
        },
        error => {
          this.setState({
            countSignedUp: -1,
            countUniqueSchools: -1,
          });
        }
      );
  }

  render() {
    return (
      <Layout>
        <SEO title="Academy" route="/academy" />
        <h1>Registration Closed!</h1>
        <p className="lead">
          Although registration has closed, due to a technical issue with our
          email system we're opening up the RSVP to all interested students
          instead of only those who had already registered. You can find the
          RSVP form <Link to="/academygrad">here</Link>!
        </p>
      </Layout>
    );
  }
}

export default Academy;
