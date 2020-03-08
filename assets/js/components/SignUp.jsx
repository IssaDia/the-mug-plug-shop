import React from "react";

const SignUp = () => {
  return (
      <>
    <div id="signup">
    <h1>Sign Up for Free</h1>
  </div>
  <form action="/" method="post">
    <div className="top-row">
      <div className="field-wrap">
        <label>
          First Name<span className="req">*</span>
        </label>
        <input type="text" required autoComplete="off" />
      </div>

      <div className="field-wrap">
        <label>
          Last Name<span className="req">*</span>
        </label>
        <input type="text" required autoComplete="off" />
      </div>
    </div>

    <div className="field-wrap">
      <label>
        Email Address<span className="req">*</span>
      </label>
      <input type="email" required autoComplete="off" />
    </div>

    <div className="field-wrap">
      <label>
        Set A Password<span className="req">*</span>
      </label>
      <input type="password" required autoComplete="off" />
    </div>
  </form>
  </>
  );
};

export default SignUp;
