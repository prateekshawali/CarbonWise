import React from "react";
import { useRef } from "react";
import Navbar from "../Component/Navbar";
import CarbonCalculator from "../Component/Calc";

import Landing from "../Component/Landing";
import { Link } from "react-router-dom";
// import ContactForm from "../Component/ContactForm";
import FrequentlyAsked from "../Component/FrequentlyAsked";
import './Homecss.css';
function Home() {

  const calculatorRef = useRef(null);

  // Function to scroll to the Calculator component
  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '80px' }}> {/* Adjust spacing for Navbar */}
      <Landing scrollToCalculator={scrollToCalculator} />

      </div>
      <div style={{ marginTop: '0px' }}  ref={calculatorRef}> {/* Add spacing between Landing and Calculator */}
        <CarbonCalculator />
      </div>
      <div>
          <FrequentlyAsked/>
        </div>

      {/* <ContactForm/> */}
        <footer
        style={{ display: "flex", "justify-content": "space-around" }}
        id="foote"
      >
        <ul>
        <li>
          
            <Link to="/home">Calculator </Link>
          
        </li>
        <li>
          
          <Link to="/projects">Projects</Link>
        
      </li>
      <li>
          
          <Link to="/learninfo">Blogs </Link>
        
      </li>
        </ul>
        <ul>
        <li>
          
            <Link to="/about">About Us </Link>
          
        </li>
        <li>
          
          <Link to="/FAQS">FrequentlyAskedQuestions </Link>
        
      </li>
      <li>
          
          <Link to="/why-carbon">Why Carbon? </Link>
        
      </li>
        </ul>
        <div>
          <h2>Conatact Us</h2>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt=" "
              />
            </a>
          </span>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt=" "
              />
            </a>
          </span>
          <a
            href="tel: 123456789"
            style={{
              color: "white",
              fontSize: "1.3em",
              letterSpacing: "2px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bolder",
              marginTop: "20px"
            }}
          >
            Telephone No: +91 232345553
          </a>
        </div>
      </footer>
      <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px"
        }}
      >
        &copy;Copyright <b>CarbonCalc</b>. All Rights Reserved
      </p>


    </div>
  );
}

export default Home;
