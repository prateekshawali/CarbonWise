import React, { useEffect } from 'react';
import './Landing.css';

const Landing = ({ scrollToCalculator }) => {
  useEffect(() => {
    const smokeElements = document.querySelectorAll('.smoke');

    smokeElements.forEach((smoke, index) => {
      smoke.style.left = `${Math.random() * 100}%`;
      smoke.style.top = `${Math.random() * 100}%`;
      smoke.style.animationDelay = `${index * 3}s`;
    });
  }, []);

  return (
    <div className="smoke-container" id="smokeContainer">
      {Array.from({ length: 11 }).map((_, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? 'smoke' : 'smoke1'}
        ></div>
      ))}
      <div className="content">
        <h2 className="heading">Every Small Action Counts—Track, Learn, and Reduce Your Carbon Footprint Today!</h2>
        <h3 className="subtitle">Understand and Reduce Your Environmental Impact</h3>
        <a href="#" className="cta-button" onClick={(e) => {
    e.preventDefault();
    scrollToCalculator();
  }}>Calculate Now</a>
      </div>
    </div>
  );
};

export default Landing;
