const React = require("react");
const MessengerChat = require("./src/components/MessengerChat").default;

exports.wrapPageElement = ({ element }) => (
  <React.Fragment>
    {element}
    <MessengerChat />
  </React.Fragment>
);
