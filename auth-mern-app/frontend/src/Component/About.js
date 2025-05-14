import React from "react";
import { Link } from 'react-router-dom';
import "../Component/About.css";
import Navbar from "./Navbar";



export default function About() {
  
  
//   window.onscroll = function () {
//     jet();
//   };
  
//   function jet() {
//     var ilake = document.getElementById("head");
//     if (ilake) { // Check if the element exists
//       ilake.style.top = "0px";
//       ilake.style.position = "sticky";
//     }
//   }
  
  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;
  
      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  
 
   return (
    <>
    <Navbar/>
    <div classNameName="App">
      <main>
      <div id="front">
  <h1>Welcome, To CarbonCalc</h1>
  <img src="images/images/Aboutlanding0.jpeg" alt="font" />
  <p>
    We strive to make carbon emission reduction simple and accessible for everyone. Our platform empowers you to take informed steps toward minimizing your environmental impact. Together, we can build a sustainable future by adopting cleaner practices and offsetting emissions effectively. Join us in creating a world where sustainability is second nature..
  </p>
</div>


        <div id="first" className="reveal">
          <img
            src="images/images/Aboutlanding.jpeg"
            alt=""
          />
          <div>
            <h1>We Offer Comprehensive Solutions for Carbon Footprint Managements</h1>
            <p className="paratxt">
            Our carbon website helps individuals  measure, reduce, and offset their carbon footprint. We provide accurate calculations, personalized reduction plans, and carbon offsetting programs to support sustainability efforts. With real-time tracking, expert guidance, and educational resources, we empower users to make informed choices and work towards carbon neutrality. Whether you're aiming to reduce emissions or participate in carbon credit programs, our platform offers the tools and support you need for a sustainable future.
            </p>
           
          </div>
        </div>

        <div id="fourth" className="reveal">
         
          <h1 style={{ color: "white" }}>
          Empowering Sustainability Through Carbon Footprint Management
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt=" "
              />
              <p>Tailored Carbon Solutions</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt=" "
              />
              <p>Seamless Carbon Offsetting</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt=" "
              />
              <p>Real-Time Tracking & Insights</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt=" "
              />
              <p>Sustainability Education</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt=" "
              />
              <p>Continuous Support</p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
        
          <div className="container">
            <div className="textpart">
              <h1 className="mainhead">WE HAVE</h1>
              <h2 className="subhead">Advanced Technology and Expertise to Drive Sustainability</h2>
              <p className="descriptionnn">
              We have a dedicated team of experts and advanced technology to offer tailored solutions for carbon reduction. Our platform integrates reliable data and insights to help users make sustainable choices in real-time.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="container ">
            <div className="textpart">
              <h1 className="mainhead">OUR GOAL</h1>
              <h2 className="subhead">Empowering Action Towards a Greener and More Sustainable Future</h2>
              <p className="descriptionnn">
              Our goals are to lead the way in carbon reduction by promoting sustainable practices and empowering people to take action. We aim to create a greener future by providing actionable solutions that reduce environmental impact across industries.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="container">
            <div className="textpart">
              <h1 className="mainhead">OUR STRENGTHS</h1>
              <h2 className="subhead">Innovative, Data-Driven Solutions for Effective Carbon Mitigation</h2>
              <p className="descriptionnn">
              Our strength lies in our innovative approach, combining cutting-edge technology with environmental expertise. We deliver personalized, data-driven solutions to help users offset their emissions effectively and track their progress.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

       

        <div id="fifth" className="reveal">
          <h1 >CARBONCALC</h1>
          <div>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt=" "
              />
              <span>
                <h3>Address</h3>
                <p>Srinivaspura ,India</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt=" "
              />
              <span>
                <h3>Phone</h3>
                <p>+1 248 672 1972</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt=" "
              />
              <span>
                <h3>E-mail</h3>
                <p>Pratikshawali89@gmail.com</p>
              </span>
            </a>
          </div>
        </div>
      </main>

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
          
          <Link to="/contactus">contact Us</Link>
        
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
    </div></>
  );
}