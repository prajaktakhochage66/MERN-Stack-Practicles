import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      alert("Login Successful");
      console.log("Email:", email);
      console.log("Password:", password);

      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="container">
      <div className="login-box">

        <h1>Login Page</h1>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default App;