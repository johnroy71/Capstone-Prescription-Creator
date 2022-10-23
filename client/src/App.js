import React from "react"
import Home from "./Home"
import Nav from "./Nav"
import Patients from "./Patients"
import Physicians from "./Physicians"
import Medications from "./Medications"
import Prescriptions from "./Prescriptions"
import { Routes, Route } from "react-router-dom";


function App() {
  
  return (

    <div>
    <Nav/>
    <Routes >
        <Route path="/" element={<Home/>}/>

        <Route path="/patients" element={<Patients/>}/>
        <Route path="/physicians" element={<Physicians/>}/>
        <Route path="/medications" element={<Medications/>}/>
        <Route path="/prescriptions" element={<Prescriptions/>}/>
     </Routes >
    </div>
)}

export default App;
