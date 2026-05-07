import React, { useState } from "react";
import FormGroup from "../Components/FormGroup.jsx";
import "../Style/register.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleRegister } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  }

  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            placeholder="Enter your username"
            type="text"
          />
          <FormGroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <FormGroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
