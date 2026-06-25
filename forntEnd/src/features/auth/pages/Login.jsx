import React from "react";
import "../styles/form.scss";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDe;
  };
  return (
    <>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form id="form">
            <input
              type="text"
              name="username"
              placeholder="enter the username"
            />
            <input
              type="password"
              name="password"
              placeholder="enter the password"
            />
            <button>Login</button>
          </form>
          <h2>If not Register? </h2>
        </div>
      </main>
    </>
  );
};

export default Login;
