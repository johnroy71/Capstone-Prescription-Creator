import React, {useState} from "react";
import axios from "axios";

function Patient({patient}) {

    const [patientName, setPatientName] = useState ("")

    const handleDelete = () => {
    
        fetch(`/patients/${patient.id}`, {
            method: "DELETE",
        }
      
        )}

        const handleSubmit = (e) => {
            e.preventDefault()
    
            axios.patch(`/patients/${patient.id}`, {
                pt_name: patientName
            })
        }

  return (
    
    <div>
        <p></p>
        <u>Patient</u>
        <p></p>
        <div>Patient ID: {patient.id}</div>
        <p></p>
        <div>Patient Name: {patient.pt_name}</div>
        <p></p>
        <div>Medications:<ul>
        {patient.medications.map(medication => <li>{medication.med_name}</li>)}</ul></div>
        <div>Care Providers:<ul>
        {patient.physicians.map(physician => <li>Dr.{physician.phys_name}</li>)}</ul></div>
        <form onSubmit={handleSubmit}>
                <label htmlFor="name"><u>Update Patient Name:</u></label><p></p>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={patientName}
                    onChange = {(e) => setPatientName(e.target.value)}
                    />
        
            
                <button variant="fill" color="primary" type="submit">Update Patient
                </button>
                
        </form><p></p>
        <button onClick={handleDelete}>Delete Patient From System</button>
        
        
    </div>
  );
}

export default Patient;