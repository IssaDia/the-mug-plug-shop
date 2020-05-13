import React, { useState } from "react";
import axios from "axios";

{
  /* Component permitting to connect to Api via axios*/
}

const Login = () => {
  {
    /*state to get form data*/
  }

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  {
    /*error state to display error messages if necessary*/
  }

  const [error, setError] = useState("");

  {
    /* function to store form data in credentials state*/
  }

  const handleChange = event => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setCredentials({ ...credentials, [name]: value });
  };

  {
    /* function to get user token when form is submitted*/
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const token = await axios
        .post("http://localhost:8000/api/login_check", credentials)
        .then(response => response.data.token);
      window.localStorage.setItem("authToken", token);
      axios.defaults.headers["Authorization"] = "Bearer" + token;
    } catch (error) {
      setError("Les informations ne correspondent pas");
    }

    console.log(credentials);
  };

  return (
    <>
      <h1>Welcome Back!</h1>

      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label htmlFor="username">Email Address</label>
          <input
            type="email"
            name="username"
            placeholder="email"
            value={credentials.username}
            onChange={handleChange}
            className={"form-control" + (error && " is-invalid")}
          />
          {error && <p className="invalid-feedback">{error}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-success">connexion</button>

        <p className="forgot">
          <a href="#">Forgot Password?</a>
        </p>
      </form>
    </>
  );
};
export default Login;
