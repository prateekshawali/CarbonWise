import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import axios from "axios";  // Import axios for API calls
import "react-toastify/dist/ReactToastify.css";
import "./Logincss.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', { email, password });
      if (response.data.success) {
       
        const { name, email, jwtToken } = response.data; 
      localStorage.setItem("jwtToken", jwtToken);
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
      
      // Navigate to the home page and reload
      console.log("Logged in as:", name, email);
      navigate("/home");
      window.location.reload();
      } else {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Login failed, please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="but">
          <button
            type="button"
            className="forgot-password"
            onClick={() => alert("Forgot password functionality coming soon!")}
          >
            Forgot password?
          </button>
          <button type="submit" className="login-button">
            Login
          </button></div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
