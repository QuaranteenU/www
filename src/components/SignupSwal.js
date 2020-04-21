import React from "react";
import styled from "styled-components";

const ShareButtons = styled.div`
  & > iframe {
    margin: 5px;
  }
`;

const SignupSwal = () => (
  <div>
    <p>
      You're all signed up! Stay tuned for more information, we'll send you an
      email as soon as we have updates. In the meantime, please spread the word
      and tell your friends!
    </p>

    <ShareButtons>
      <iframe
        title="Facebook Share Button"
        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fquaranteen.university%2F&layout=button&size=small&appId=601642820272377&width=67&height=20"
        width="67"
        height="20"
        style={{
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
      <iframe
        title="Twitter Tweet Button"
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
          height: "20px",
        }}
        src="https://platform.twitter.com/widgets/tweet_button.d0f13be8321eb432fba28cfc1c3351b1.en.html#dnt=false&amp;hashtags=QuaranteenU&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Flocalhost%3A8000%2Fregister%2F&amp;size=m&amp;text=I%20just%20signed%20up%20for%20virtual%20commencement%20at%20Quaranteen%20University!%20You%20can%20too!&amp;time=1584765354022&amp;type=share&amp;url=https%3A%2F%2Fquaranteen.university%2F&amp;via=QuaranteenU"
        data-url="https://quaranteen.university/"
      />
    </ShareButtons>
  </div>
);

export default SignupSwal;
