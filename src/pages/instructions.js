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
        Click <b>Direct Connect</b> and type:{" "}
        <strong>play.quaranteen.university</strong>
      </li>
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

    <br />

    <h2>How to get COMMENCED</h2>

    <ol>
      <li>
        You'll load in at the end of QU's docks. Walk down the pier towards the
        arch at the other end, optionally stopping at the information booth to
        get some more details.{" "}
        <em>
          Hint: You can interact with most things like doors and books with
          right-click!
        </em>
      </li>
      <li>
        After you exit the docks you'll enter a huge field surrounded by the QU
        castle walls. Follow the path towards the right to go to the campus.
      </li>
      <li>
        Once you're at the campus, feel free to explore! The campus includes a
        variety of houses, parkour courses, and more for you to enjoy! When
        you've had your fill, head to the center plaza to go up the stage.
      </li>
      <li>
        From the plaza you'll see the entrance to the stage, you can either
        immediately ascend the stairs or take the paths to the sides to go to
        the front of the stage. The audience area also includes multiple levels
        in case you'd like a better view.
      </li>
      <li>
        You'll notice that you can't walk onto the stage willy-nilly, this is
        done to prevent people from trolling and ruining a graduate's moment.
        Instead, when it's your turn you'll automatically be teleported onstage,
        where you'll have 30 seconds to do as you please. We highly recommend
        going to Professor Steve at the front and right-clicking him for your
        diploma! You're now <em>COMMENCED</em>!
      </li>
      <li>
        After you'd had your 30 seconds of fame, feel free to stick around and
        support your fellow graduates, or just explore the campus! If you come
        back to the server after the event, you'll be able to play vanilla and
        Factions Minecraft too!
      </li>
    </ol>

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
