import React, { useState } from "react";
import "./App.css";
import women from "./women.png";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful");
  };

  return (
    <div className="main">

      {/* Left Section */}

      <div className="left">

        <div className="loginBox">

          <h1>Welcome Back</h1>

          <p>Login to continue your journey.</p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className="options">

              <label className="remember">
                <input type="checkbox"/>
                Remember Me
              </label>

              <a href="/">Forgot Password?</a>

            </div>

            <button>Sign In</button>

            <div className="googleBtn">

    <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        alt="Google"
    />

    <span>Continue with Google</span>

</div>

            <p className="signup">
              Don't have an account?
              <a href="/"> Sign Up</a>
            </p>

          </form>

        </div>

      </div>

      {/* Right Section */}

      <div className="right">

        {/* Right Section */}

<div className="right">

    <img
        src={women}
        alt="Woman"
        className="womanImage"
    />

</div>

      </div>

    </div>
  );
}

export default App;