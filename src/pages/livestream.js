import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import { VideoContainer, VideoIframe } from "../styles/global";

const FullWidthIframe = styled.iframe`
  width: 100%;
`;

const Livestream = () => {
  return (
    <>
      <SEO title="Livestream" route="/livestream" />
      <h1>Crafting Livestream</h1>
      <p className="lead">
        Watch as the Minecraft world for Quaranteen University is built in real-time!
      </p>
      <VideoContainer>
        <VideoIframe
          title="Twitch Widget"
          src="https://player.twitch.tv/?channel=QuaranteenU&parent=quaranteen.university&muted=true"
          height="100%"
          width="100%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true} />
      </VideoContainer>

      <br/>

      <h3>Join our Discord!</h3>
      <p className="lead">
        Here's a sneak peak below, join and game with us!
      </p>
      <FullWidthIframe
        title="Discord Widget"
        src="https://discordapp.com/widget?id=690019838445486121&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameBorder="0" />
    </>
  );
};

export default Livestream;
