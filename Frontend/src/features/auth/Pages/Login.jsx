import React from "react";
import FormGroup from "../Components/FormGroup.jsx";
import "../Style/login.scss"
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <FormGroup label="Email" placeholder="Enter your email" type="email" />
          <FormGroup label="Password" placeholder="Enter your password" type="password" />
          <button className="button" type="submit">
            Login
          </button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </main>
  );
};

export default Login;
