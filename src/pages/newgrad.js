import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const RSVP = () => (
  <Layout>
    <SEO title="Commencement RSVP" route="/newgrad" />
    <h1>RSVP Closed!</h1>
    <p className="lead">
      In order to ensure that our team has enough time to schedule all the
      interested students, we had to close our RSVP form. We're sorry if you
      weren't able to sign up before the deadline, but we'd still love your
      support if you watched the event on{" "}
      <OutboundLink href="https://www.twitch.tv/QuaranteenU">
        Twitch
      </OutboundLink>
      !
    </p>
  </Layout>
);

export default RSVP;
