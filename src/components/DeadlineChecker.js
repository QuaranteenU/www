import React from "react";
import { Link } from "gatsby";

const DeadlineChecker = ({ children, date }) => {
  const deadline = new Date(date);
  const now = new Date();

  return (
    <React.Fragment>
      {now > deadline ? (
        <React.Fragment>
          <h1>Registration Closed!</h1>
          <p className="lead">
            Unfortunately, the registration deadline has passed! Due to the huge
            number of interested students, we had to set a deadline to ensure we
            have enough time to plan out the ceremonies. Sorry for any
            inconvenience! However, if you'd like to signup for the{" "}
            <Link to="/academy">High School Graduation</Link>, that's still
            open!
          </p>
        </React.Fragment>
      ) : (
        children
      )}
    </React.Fragment>
  );
};

export default DeadlineChecker;
