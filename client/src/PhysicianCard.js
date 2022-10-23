import React, {useState} from "react";
import axios from "axios";

function Physician({physician}) {

    const [physName, setPhysName] = useState ("")

    const handleDelete = () => {
    
        fetch(`/physicians/${physician.id}`, {
            method: "DELETE",
        }
        
        )}
    
        const handleSubmit = (e) => {
            e.preventDefault()
    
            axios.patch(`/physicians/${physician.id}`, {
                phys_name: physName
            })
        } 
  return (
    
    <div>
        <p></p>
        <u>Physician</u>
        <p></p>
        <div>Physician ID: {physician.id}</div>
        <p></p>
        <div>Physician Name: Dr. {physician.phys_name}</div>
        <p></p>
        <div>Patient List:<ul>
        {physician.patients.map(patient =><li>{patient.pt_name}</li>)}</ul></div>
        <form onSubmit={handleSubmit}>
                <label htmlFor="name"><u>Update Physician Name:</u></label><p></p>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={physName}
                    onChange = {(e) => setPhysName(e.target.value)}
                    />
        
            
                <button variant="fill" color="primary" type="submit">Update Physician
                </button>
                
        </form><p></p>
        <button onClick={handleDelete}>Delete Physician From System</button>
    </div>
  );
}

export default Physician;