import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <main>
        <div className="form-container">
          <h1>Register</h1>
          <form id="form">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter the username"
            />
            <input
              type="email"
              name="useremail"
              id="useremail"
              placeholder="enter the useremail"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter the password"
            />
            <button>Register</button>
          </form>
          <h2>
            If already Registered? <Link to="/login">Login</Link>
          </h2>
        </div>
      </main>
    </>
  );
};

export default Register;
