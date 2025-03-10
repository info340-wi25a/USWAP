import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleResetRequest = (e) => {
    e.preventDefault();

    // Simulate password reset request (API call can be added later)
    setMessage("If your email is registered, you will receive a password reset link.");

    setTimeout(() => {
      navigate("/login"); // Redirect to login page after showing message
    }, 3000);
  };

  return (
    <div className="forgot-password-container">
      <h2>Reset Your Password</h2>
      <p>Enter your email to receive a password reset link.</p>

      <form onSubmit={handleResetRequest}>
        <label>Email Address:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="reset-btn">Send Reset Link</button>
      </form>

      {message && <p className="reset-message">{message}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
