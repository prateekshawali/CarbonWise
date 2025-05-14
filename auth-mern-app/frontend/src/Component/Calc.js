import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calc.css";
import axios from "axios";

function CarbonCalculator() {
    // const carbonRef = useRef(null);
    // const ScrollToCarbon =() => {
    //     carbonRef.current.scrollIntoView({behaviour: "smooth"});
    // }
    const navigate = useNavigate();
    const [domesticChoice, setDomesticChoice] = useState("");
    const [electricityData, setElectricityData] = useState({
        kwh: "",
        people: "",
    });
    const [dietChoice, setDietChoice] = useState("");
    const [travel, setTravel] = useState("");
    const [distance, setDistance] = useState("");
    const [carbonFootprint, setCarbonFootprint] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!electricityData.kwh || !dietChoice || !travel || !distance) {
            alert("Please fill in all the required fields!");
            return;
        }
    
        try {
            const payload = {
                electricity: electricityData.kwh,
                diet: dietChoice,
                travel: travel,
                dist: distance,
            };
    
            const response = await axios.post("http://localhost:8080/home", payload);
            console.log(response.data);  // Log the full response object
            setCarbonFootprint(response.data.totalCarbon);
            // Display the result to the user
            // alert(`Your carbon footprint is ${response.data.totalCarbon} kg CO2`);
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert("Failed to calculate carbon footprint. Please try again.");
        }
    };
    
    return (
        <div className="app-container">
            <div className="hero-section">
                <h1>Calculate Your Carbon Footprint</h1><center>
                <h4 className="hero-description">
                    Take control of your environmental impact with our intuitive calculator.
                </h4></center>
            </div>

            <div className="calculator-container">
                <div className="calculator-header">
                    <span className="calculator-icon">🌍</span>
                    <h2>Carbon Calculator</h2>
                </div>

                <form onSubmit={handleSubmit} className="calculator-form">
                    {/* Domestic Section */}
                    <div className="section domestic-section">
                        <h3>Domestic Impact</h3>
                        <div className="options-container">
                            <button
                                type="button"
                                className={`option-button ${
                                    domesticChoice === "electricity" ? "active" : ""
                                }`}
                                onClick={() => setDomesticChoice("electricity")}
                            >
                                ⚡ Electricity
                            </button>
                            <button
                                type="button"
                                className={`option-button ${
                                    domesticChoice === "diet" ? "active" : ""
                                }`}
                                onClick={() => setDomesticChoice("diet")}
                            >
                                🥗 Diet
                            </button>
                        </div>

                        {domesticChoice === "electricity" && (
                            <div className="domestic-electricity">
                                <label>
                                    Electricity used (kWh):
                                    <input
                                        type="number"
                                        placeholder="Enter electricity used in kWh"
                                        value={electricityData.kwh}
                                        onChange={(e) =>
                                            setElectricityData({
                                                ...electricityData,
                                                kwh: e.target.value,
                                            })
                                        }
                                    />
                                </label>
                            </div>
                        )}

                        {domesticChoice === "diet" && (
                            <div className="domestic-diet">
                                <label>
                                    <input
                                        className="radiobut"
                                        type="radio"
                                        name="diet"
                                        value="veg"
                                        checked={dietChoice === "veg"}
                                        onChange={() => setDietChoice("veg")}
                                    />
                                    Veg
                                </label>
                                <label>
                                    <input
                                    className="radiobut"
                                        type="radio"
                                        name="diet"
                                        value="nonveg"
                                        checked={dietChoice === "nonveg"}
                                        onChange={() => setDietChoice("nonveg")}
                                    />
                                    Non-Veg
                                </label>
                                <label>
                                    <input
                                    className="radiobut"
                                        type="radio"
                                        name="diet"
                                        value="vegan"
                                        checked={dietChoice === "vegan"}
                                        onChange={() => setDietChoice("vegan")}
                                    />
                                    Vegan
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Travel Section */}
                    <div className="section travel-section">
                        <h3>Travel Impact</h3>
                        <div className="travel-inputs">
                            <select
                                value={travel}
                                onChange={(e) => setTravel(e.target.value)}
                                className="travel-select"
                            >
                                <option value="">Select transport mode</option>
                                <option value="bike">🚲 Bike</option>
                                <option value="petrol_car">🚗 Petrol Car</option>
                                <option value="diesel_car">🚙 Diesel Car</option>
                                <option value="bus">🚌 Bus</option>
                                <option value="metro">🚊 Metro</option>
                            </select>

                            {travel && (
                                <input
                                    type="number"
                                    placeholder="Distance (km)"
                                    value={distance}
                                    onChange={(e) => setDistance(e.target.value)}
                                    className="distance-input"
                                />
                            )}
                        </div>
                    </div>
                    <button type="submit" className="calculate-button">
                        Calculate My Footprint
                    </button>

                    
                </form>


                
                {carbonFootprint !== null && (
                    <div className="result-container">
                    <div className="result-box">
                    <h2 className="result-title">Your Carbon Footprint</h2>
                    <div className="result-value">
                        <span className="result-amount">{carbonFootprint} </span><span className="res">kg of CO2</span><br></br>
                        <span className="reason">High emissions from transportation due to frequent car usage.Consider using public transport or carpooling.</span>
                    </div>
                    
                    </div>
                    <div className="offset-actions">
              <button
                className="offset-button"
                onClick={() => {
                  navigate("/payments");
                }}
              >
                Offset My Emissions
              </button>
              <button
                className="learn-more-button"
                onClick={() => navigate("/learninfo")}
              >
                Learn How to Reduce
              </button>
            </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CarbonCalculator;
