import React from "react";

const DeadlineChecker = ({ children, date, closedContent }) => {
  const deadline = new Date(date);
  const now = new Date();

  return (
    <React.Fragment>{now > deadline ? closedContent : children}</React.Fragment>
  );
};

export default DeadlineChecker;
