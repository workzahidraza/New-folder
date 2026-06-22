import React from "react";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          userName: username,
          userEmail: userEmail,
          password: password,
        },
      );
      console.log(response.data);
      alert("register sucessfull");
    } catch (error) {
      alert(error);
    }
  }
  async function getUser() {
    try {
      const AllUsers = await axios.get(
        "http://localhost:3000/api/auth/getUser",
      );
      const all = AllUsers.data;
      const RegisteredUserName = AllUsers.data.data.map((e) => e.userName);
      console.log(all);
      console.log(RegisteredUserName);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <div id="registerForm">
        <form onSubmit={submitHandler}>
          <h2>Register </h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit</button>

          <h3>login if already registered?</h3>
        </form>
        <button onClick={getUser}>getuser</button>
      </div>
    </>
  );
};

export default Register;
