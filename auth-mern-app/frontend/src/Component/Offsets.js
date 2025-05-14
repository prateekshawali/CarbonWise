import React from "react";

const Offsets = () => {
  return (
    <div className="app-container-fluid">
      <div className="hero-section">
        <h1>Rising Carbon Footprint = Rising Temperatures</h1>
        <p className="hero-description">
          We’ve seen a radical spike in our carbon emissions since the
          Industrial Revolution, with today’s numbers at an all-time high.
          Carbon is warming the planet to unsustainable levels and temperatures
          will only keep rising unless we reduce our carbon footprint.
        </p>
      </div>

      <div class="row">
        <div class="col-sm-4 mb-5 mb-sm-0">
          <div class="card fixed-card pb-4">
            <div class="card-body">
              <h5 class="card-title pb-2">We All Emit Carbon</h5>
              <p class="card-text pt-1 pb-4">
                Our lifestyle and economic status impact the carbon emissions we
                release. But it’s more than just big things like flying or
                driving—it’s also the little things we do every day.Small steps
                help, but they are not enough.here’s more to be done. The
                average annual energy-related carbon footprint of an American
                student living in the USA is about 5.9 metric tons of carbon
                dioxide (tCO2e)according to the latest information from the U.S.
                Department of Energy.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4 cardies">
          <div class="card fixed-card">
            <div class="card-body">
              <img
                src="images/images/Student_data.png"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div class="col-sm-4 py-0">
          <div class="card fixed-card  ">
            <div class="card-body ">
              <img src="images/images/one.png" class="card-img-top" alt="..."></img>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card fixed-card">
            <div class="card-body">
              <img
                src="images/images/commute.png"
                class="card-img-top"
                alt="..."
              ></img>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card fixed-card">
            <div class="card-body">
              <img src="images/images/CEO.png" class="card-img-top" alt="..."></img>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card fixed-card">
            <div class="card-body">
              <img src="images/images/Flyer.png" class="card-img-top" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offsets;