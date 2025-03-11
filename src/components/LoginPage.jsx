import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", username, password);
    // Implement authentication logic here
  };

  return (
    <div className="login-container">
      <h2>Log in</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="forgot-password-link">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit">Login</button>
      </form>

      <div className="extra-links">
        <p>New to USWAP? <Link to="/signup">Create an Account</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;