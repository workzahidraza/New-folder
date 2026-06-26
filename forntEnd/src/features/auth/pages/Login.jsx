import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import Register from "./Register";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);
    navigate("/");
  };
  if (loading) {
    return (
      <main>
        <h1>Loading.....</h1>
      </main>
    );
  }
  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={submitHandler} id="form">
            <input
              type="text"
              onInput={(e) => {
                setUsername(e.target.value);
              }}
              name="username"
              id="username"
              placeholder="enter the username"
            />
            <input
              type="password"
              onInput={(e) => {
                setPassword(e.target.value);
              }}
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
