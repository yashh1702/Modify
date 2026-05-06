import React from 'react'
import FormGroup from "../Components/FormGroup.jsx";
import "../Style/register.scss"


const Register = () => {
  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <FormGroup label="Username" placeholder="Enter your username" type="text" />
          <FormGroup label="Email" placeholder="Enter your email" type="email" />
          <FormGroup label="Password" placeholder="Enter your password" type="password" />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register