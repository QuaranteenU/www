import React from "react";

class MessengerChat extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({ //eslint-disable-line
        xfbml: true,
        version: 'v6.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <>
        <div id="fb-root" />
        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="102870664689435"
          theme_color="#2f8dff"
          logged_in_greeting="Hi there! Have any questions?"
          logged_out_greeting="Hi there! Have any questions?" />
      </>
    );
  }
} 

export default MessengerChat;