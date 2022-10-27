import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

function Nav({user, setUser}) {



    return (
        <div  >
        <div class="navigation">
            <NavLink exact to="/">
            | Home |
            </NavLink>
            <NavLink exact to="/patients">
             | Patients |
            </NavLink>
            <NavLink exact to="/physicians">
               | Physicians |
            </NavLink>
            <NavLink exact to="/medications">
               | Medications |
            </NavLink>
            <NavLink exact to="/Prescriptions">
               | Prescriptions |
            </NavLink>

            
        </div>
        </div>
    )
}
export default Nav;