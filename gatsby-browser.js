const React = require("react");
const MessengerChat = require("./src/components/MessengerChat").default;

exports.wrapPageElement = ({ element, props }) => (
  <React.Fragment {...props}>
    {element}
    <MessengerChat />
  </React.Fragment>
);