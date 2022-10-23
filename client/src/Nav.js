import React from 'react'
import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <div>
        <nav>
            <NavLink exact to="/">
            Home
            </NavLink>
            <NavLink exact to="/patients">
                Patients
            </NavLink>
            <NavLink exact to="/physicians">
                Physicians
            </NavLink>
            <NavLink exact to="/medications">
                Medications
            </NavLink>
            <NavLink exact to="/Prescriptions">
                Prescriptions
            </NavLink>
            
        </nav>
        </div>
    )
}
export default Nav;