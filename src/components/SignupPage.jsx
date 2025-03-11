import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError("Passwords must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate account creation process
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <label>Your name</label>
        <input
          type="text"
          name="name"
          placeholder="First and last name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Mobile number or email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="At least 6 characters"
          value={formData.password}
          onChange={handleChange}
          required
        />
    
        <label>Re-enter password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="continue-btn">Continue</button>
      </form>

    </div>
  );
};

export default SignupPage;