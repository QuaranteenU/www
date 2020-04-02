import React from "react";
import ContainerLayout from "../components/container-layout";
import SEO from "../components/seo";
import styled from "styled-components"

const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
`;

const VideoIframe = styled.iframe`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;

const FullWidthIframe = styled.iframe`
width: 100%;
`;

const Livestream = () => {
  return (
    <ContainerLayout>
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
    </ContainerLayout>
  )
};

export default Livestream
