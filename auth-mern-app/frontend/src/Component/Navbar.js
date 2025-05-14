import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    setIsLoggedIn(!!token); // Set true if token exists, false otherwise
    setUserName(localStorage.getItem("userName"));
    setUserEmail(localStorage.getItem("userEmail"));
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken"); // Remove token
    localStorage.removeItem("userName"); // Remove userName
    localStorage.removeItem("userEmail"); // Remove userEmail
    setIsLoggedIn(false); // Update state
    setShowProfileCard(false); // Close the card
    setUserName(null); // Reset userName
    setUserEmail(null); // Reset userEmail
  };

  const toggleProfileCard = () => {
    setShowProfileCard((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo Section */}
      <div className="navbar-logo">
        <span className="logo-icon">🌱</span>
        <span className="logo-text">CarbonWise</span>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/home">Calculator</Link>
        </li>
        <li>
          <Link to="/why-carbon">Why Carbon?</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="navbar-actions">
        {isLoggedIn ? (
          <>
          
            <button className="prof" onClick={toggleProfileCard}>
              <div className="head"></div>
              <div className="body"></div>
              
            </button>
            
            <button className="button primary marg" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="button outline" to="/login">
              Login
            </Link>
            <Link className="button primary marg" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Profile Card */}
      {showProfileCard && (
        <div className="profile-card">
          <button className="close-button" onClick={() => setShowProfileCard(false)}>
            ✖
          </button>
          <h3 className="greet">Hello! {userName || "Guest"}</h3>
          <div className="containerr"><div className="dets"><center>
          <h4>Login details</h4></center>
          <p ><strong>Name:</strong> {userName || "Guest"}</p>
          <p ><strong>Email:</strong> {userEmail || "Not Provided"}</p></div></div><br></br>
          <button className="button primary marg cardlog" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
