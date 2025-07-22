import { Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';


import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./Component/About";
import LearnInfo from "./Component/LearnInfo";
import Offsets from "./Component/Offsets";
import Payments from "./Component/Payments";
import Proj from "./pages/Proj";
   
// import ProtectedRoute from "./pages/ProtectedRouter"; // Import the ProtectedRoute component

function App() {
 

  return (
  



    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learninfo" element={<LearnInfo />} />
        <Route path="/payments" element={<Payments />} />
      <Route path="/why-carbon" element={<Offsets />} />
     
        
          <Route
          path="/Projects"
          element={<Proj/>}
          />
      </Routes>
    </div>
    
  );
}

export default App;


