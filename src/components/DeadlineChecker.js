import React from "react";

const DeadlineChecker = ({ children }) => {
  const deadline = new Date("05/2/2020");
  const now = new Date();

  return (
    <>
      {(now > deadline) ? (
        <>
          <h1>Registration Closed!</h1>
          <p className="lead">
            Unfortunately, the registration deadline has passed! Due to the huge number of interested students, we had to set a deadline to ensure we have enough time to plan out the ceremonies. Sorry for any inconvenience!
          </p>
        </>
      ) : children}
    </>
  );
}

export default DeadlineChecker;