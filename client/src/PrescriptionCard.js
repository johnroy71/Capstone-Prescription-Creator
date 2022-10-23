import React from "react";

function Prescription({prescription}) {

    const handleDelete = () => {
    
        fetch(`/prescriptions/${prescription.id}`, {
            method: "DELETE",
        }
      )}
      
  return (
   
    <div>
        <u>Prescription</u><p></p>
        <div>Prescription ID: {prescription.id}</div>
        <div>Patient Name: {prescription.patient_id}</div>
        <div>Prescribing Physician: {prescription.physician_id}</div>
        <div>Medication Prescribed: {prescription.medication_id}</div><p></p>
        <button onClick={handleDelete}>Delete Prescription From System</button><p></p>
    </div>
  );
}

export default Prescription;