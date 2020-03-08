import React from "react";

const Login = () => {
  return (
    <>
      <div id="login">
      <h1>Welcome Back!</h1>

      <form action="/" method="post">
        <div className="field-wrap">
          <label>
            Email Address<span className="req">*</span>
          </label>
          <input type="email" required autoComplete="off" />
        </div>

        <div className="field-wrap">
          <label>
            Password<span className="req">*</span>
          </label>
          <input type="password" required autoComplete="off" />
        </div>

        <p className="forgot">
          <a href="#">Forgot Password?</a>
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
