import React from "react";
import "../Component/LearnInfo.css";

const LearnInfo = () => {
  return (
    <main className="container-fluid">
      {/* Hero Section */}
      <div className="bg-image-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Explore actionable insights to reduce carbon emissions
          </h1>
          <p className="hero-description">
            Unlock valuable knowledge on reducing carbon emissions and embracing sustainable practices. This section offers expert insights, practical steps, and the latest innovations to help you minimize your environmental impact.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container-fluid">
      <h2 className="section-title">Explore Insights</h2>
      
      <div className="horizontal-cards-container">
        {/* Card 1 */}
        <div className="horizontal-card">
          <img
            src="images/images/renewbale.jpeg"
            alt="Switch to Renewable Energy"
            className="thumbnail-image"
          />
          <div className="thumbnail-content">
            <h3 className="thumbnail-title">Switch to Renewable Energy</h3>
            <p className="thumbnail-description">
              Solar and wind power can significantly reduce your carbon footprint. Explore how you can transition to renewable energy today!
            </p>
            <a
              href="https://www.un.org/en/climatechange/raising-ambition/renewable-energy"
              className="thumbnail-link"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="horizontal-card">
          <img
            src="images/images/renewable2.jpeg"
            alt="Sustainable Agriculture"
            className="thumbnail-image"
          />
          <div className="thumbnail-content">
            <h3 className="thumbnail-title">Sustainable Agriculture</h3>
            <p className="thumbnail-description">
              Sustainable farming techniques promote soil health while reducing emissions. Find out how you can support eco-friendly agriculture.
            </p>
            <a
              href="https://sentientmedia.org/sustainable-agriculture/"
              className="thumbnail-link"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="horizontal-cards-container">
        {/* Card 1 */}
        <div className="horizontal-card">
          <img
            src="images/images/renewable3.jpeg"
            alt="Switch to Renewable Energy"
            className="thumbnail-image"
          />
          <div className="thumbnail-content">
            <h3 className="thumbnail-title">Switch to Renewable Energy</h3>
            <p className="thumbnail-description">
              Solar and wind power can significantly reduce your carbon footprint. Explore how you can transition to renewable energy today!
            </p>
            <a
              href="https://www.un.org/en/climatechange/raising-ambition/renewable-energy"
              className="thumbnail-link"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="horizontal-card">
          <img
            src="images/images/renewable4.jpeg"
            alt="Sustainable Agriculture"
            className="thumbnail-image"
          />
          <div className="thumbnail-content">
            <h3 className="thumbnail-title">Sustainable Agriculture</h3>
            <p className="thumbnail-description">
              Sustainable farming techniques promote soil health while reducing emissions. Find out how you can support eco-friendly agriculture.
            </p>
            <a
              href="https://sentientmedia.org/sustainable-agriculture/"
              className="thumbnail-link"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>

    

      {/* Carbon Bulletin */}
      <div class="dog-profiles-wrapper">
        <h1>Carbon Bulletin</h1>
  <div class="dog-profiles">
   
    <div class="dog-profile">
      <a href="">
        <img src="images/images/news1.jpeg" alt="carbon 1" />
      </a>
      <h2>Global Emission Trends</h2>
      <pre>Tracking the latest data and reports on carbon emissions worldwide..</pre>
    </div>
    <div class="dog-profile">
      <a href="https://www.ey.com/en_in/insights/government-public-sector/six-ways-that-governments-can-drive-the-green-transition">
        <img src="images/images/news2.jpeg" alt="carbon 3" />
      </a>
      <h2>Policy Shifts for Sustainability</h2>
      <pre> Updates on government policies and their impact on carbon emissions.</pre>
    </div>
    <div class="dog-profile">
      <a href="">
        <img src="images/images/news1.jpeg" alt="carbon 1" />
      </a>
      <h2>Global Emission Trends</h2>
      <pre>Tracking the latest data and reports on carbon emissions worldwide..</pre>
    </div>
    <div class="dog-profile">
      <a href="https://www.ey.com/en_in/insights/government-public-sector/six-ways-that-governments-can-drive-the-green-transition">
        <img src="images/images/news2.jpeg" alt="carbon 3" />
      </a>
      <h2>Policy Shifts for Sustainability</h2>
      <pre> Updates on government policies and their impact on carbon emissions.</pre>
    </div>
  </div>



        </div>
    </main>
  );
};

export default LearnInfo;
