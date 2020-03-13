import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = event => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const token = 
      await axios
        .post("http://127.0.0.1:8000/api/login_check", credentials)
        .then(response => response.data.token);
        window.localStorage.setItem('authToken', token);
        axios.defaults.headers['Authorization'] = 'Bearer' + token;
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
            className={"form-control" + (error && " is-invalid" )}
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
