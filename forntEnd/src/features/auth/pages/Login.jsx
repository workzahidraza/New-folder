import React from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={submitHandler} id="form">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter the username"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter the password"
            />
            <button>Login</button>
          </form>
          <h2>
            If not Register? <Link to="/register">Register</Link>
          </h2>
        </div>
      </main>
    </>
  );
};

export default Login;
