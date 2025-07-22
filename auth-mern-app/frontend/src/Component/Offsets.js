import React from "react";
import "./Offsets.css"; // Custom styling file you'll create

const Offsets = () => {
  return (
    <div className="offsets-container">
      <section className="hero">
        <h1>🌍 Reduce Your Carbon Footprint, Save the Future</h1>
        <p>
          Carbon emissions are heating our planet faster than ever before.
          Whether you're a student, a commuter, or a CEO—every step counts. Let’s understand how and why!
        </p>
      </section>

      <section className="card-grid">
        <div className="card fade-in">
          <img src="/images/earth_heat.png" alt="Student Data" />
          <h3>Students Emit Too</h3>
          <p>
            Even students have an average footprint of 5.9 metric tons/year! From digital usage to food habits,
            everything adds up.
          </p>
        </div>

        <div className="card fade-in delay-1">
          <img src="/images/commute.jpg" alt="Commute" />
          <h3>Commute Emissions</h3>
          <p>
            Driving to work or college daily? Transportation is one of the biggest emission sources—consider walking, cycling, or carpooling.
          </p>
        </div>

        <div className="card fade-in delay-2">
          <img src="/images/CEO.png" alt="CEO Lifestyle" />
          <h3>High-Impact Lifestyles</h3>
          <p>
            CEOs and high-income individuals have a carbon footprint up to 100x higher! Influence can be used to reduce that.
          </p>
        </div>

        <div className="card fade-in delay-3">
          <img src="/images/Flyer.jpg" alt="Frequent Flyer" />
          <h3>Frequent Flyers</h3>
          <p>
            One long-haul flight emits as much CO2 as a year of driving. Sustainable travel choices matter.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Offsets;
