import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Instructions = () => (
  <Layout>
    <SEO title="Instructions" route="/instructions" />
    <h1>How to join QU's graduation server</h1>

    <ol>
      <li>Download and open Minecraft.</li>
      <li>
        Click <b>Play</b>.
      </li>
      <li>
        After the game menu loads, click <b>Multiplayer</b>.
      </li>
      <li>
        Click <b>Direct Connect</b> and type either:
      </li>
      <ul>
        <li>play.quaranteen.university</li>
        <li>104.192.227.3</li>
      </ul>
      <li>
        Click <b>Join Server</b>.
      </li>
      <li>
        You're in! Press WASD to walk and use your mouse to look around.{" "}
        <span role="img" aria-label="party time">
          🥳
        </span>
      </li>
    </ol>

    {/*
    <ol>
      <li>
        First you'll need to get a copy of{" "}
        <OutboundLink href="https://www.minecraft.net/en-us/store/minecraft-java-edition/">
          Minecraft Java Edition
        </OutboundLink>
        .
      </li>
      <li>
        After registering a Minecraft account and{" "}
        <OutboundLink href="https://www.minecraft.net/en-us/download/">
          downloading the launcher
        </OutboundLink>
        , launch Minecraft and press <strong>Play</strong> (make sure
        next to <strong>Play</strong> it says{" "}
        <strong>Latest Release</strong>).
      </li>
      <li>
        Once the game is open, press <strong>Multiplayer</strong>.
        Then press <strong>Add Server</strong>. For{" "}
        <strong>Server Name</strong>, put{" "}
        <strong>Quaranteen University</strong>. For{" "}
        <strong>Server Address</strong>, put{" "}
        <strong>play.quaranteen.university</strong> (you can leave the
        other options alone). Then press <strong>Done</strong> (now
        whenever you open Minecraft and press{" "}
        <strong>Multiplayer</strong>, the server will be an option).
      </li>
      <li>
        Select the <strong>Quaranteen University</strong> option from
        the server list, and press <strong>Join Server</strong>.
      </li>
      <li>
        Once you're in the server, follow the signs for{" "}
        <strong>Quaranteen University</strong> (currently the QU world
        is under construction and closed to the public, but feel free
        to explore the rest of the server).
      </li>
    </ol>
    */}

    <br />
    <br />

    <p>
      We recommend you also{" "}
      <OutboundLink href="https://twitch.tv/QuaranteenU" target="_blank">
        open our Twitch stream
      </OutboundLink>{" "}
      so you can hear your name being called. Audio is on a 15 second delay, so
      we'll be sure to notify you in-game when it's your turn to walk, too.
    </p>

    <p>
      Still have questions?{" "}
      <Link className="hvr-underline-from-center" to="/#faqs">
        Check our FAQs
      </Link>{" "}
      or{" "}
      <OutboundLink href="https://m.me/quaranteenu" target="_blank">
        message us on Facebook
      </OutboundLink>
      !
    </p>

    <br />
    <br />
  </Layout>
);

export default Instructions;
