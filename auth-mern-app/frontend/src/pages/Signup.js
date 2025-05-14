import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Logincss.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/signup', { name, email, password });
      if (response.data.success) {
        console.log("User signed up:", response.data);
        navigate("/home");
      } else {
        alert(response.data.message); // Display error message if signup fails
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error during signup, please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card" style={{height:"500px",width:"400px"}}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            value={name}
            onChange={handleNameChange}
          />
          <label>Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <div className="signup-container">
          <p>
            Already have an account?{" "}
            <span className="signup-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
