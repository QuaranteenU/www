import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Instructions = () => (
  <Layout>
    <SEO title="Instructions" route="/instructions" />
    <h1>
      How to join QU's graduation server
    </h1>

    <ol>
      <li>Download and open Minecraft.</li>
      <li>Click <b>Play</b>.</li>
      <li>After the game menu loads, click <b>Multiplayer</b>.</li>
      <li>Click <b>Direct Connect</b> and type either:</li>
      <ul>
        <li>play.quaranteen.university</li>
        <li>104.192.227.3</li>
      </ul>
      <li>Click <b>Join Server</b>.</li>
      <li>You're in! Press WASD to walk and use your mouse to look around. 🥳</li>
    </ol>

    <br/><br/>

    <p>We recommend you also <OutboundLink href="https://twitch.tv/QuaranteenU" target="_blank">
        open our Twitch stream
      </OutboundLink> so you can hear your name being called. Audio is on a 15 second delay, so
      we'll be sure to notify you in-game when it's your turn to walk, too.
    </p>

    <p>Still have questions? <Link className="hvr-underline-from-center" to="/#faqs">
      Check our FAQs
    </Link> or <OutboundLink href="https://m.me/quaranteenu" target="_blank">
        message us on Facebook
      </OutboundLink>
      !
    </p>

    <br/><br/>
  </Layout>
);

export default Instructions;
