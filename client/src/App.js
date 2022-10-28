import React, {useState} from "react"
import Home from "./Home"
import Nav from "./Nav"
import Patients from "./Patients"
import Physicians from "./Physicians"
import Medications from "./Medications"
import Prescriptions from "./Prescriptions"
import { Routes, Route } from "react-router-dom";
// import background from "./images/background.jpg"

function App() {
  
  const [user, setUser] = useState(null)

  return (

    // <div style={{backgroundImage: `url(${background})`, backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundOpacity: .7}} >
    <div class="app">
    <Nav user={user} setUser={setUser} />
    <Routes >
        <Route path="/" element={<Home user={user} setUser={setUser}/>}/>

        <Route path="/patients" element={<Patients/>}/>
        <Route path="/physicians" element={<Physicians/>}/>
        <Route path="/medications" element={<Medications/>}/>
        <Route path="/prescriptions" element={<Prescriptions/>}/>
     </Routes >
    </div>
)}

export default App;
