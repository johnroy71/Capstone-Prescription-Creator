import React from "react";

function Prescription({prescription}) {

    const handleDelete = () => {
    
        fetch(`/prescriptions/${prescription.id}`, {
            method: "DELETE",
        }
      
      )}
      console.log(prescription)
  return (
   
    <div className="prescription_card">
        <u>Prescription</u><p></p>
        <div>Prescription ID: {prescription.id}</div>
        <div>Patient Name: {prescription.patient.pt_name}</div>
        <div>Prescribing Physician: {prescription.physician.phys_name}</div>
        <div>Medication Prescribed: {prescription.medication.med_name}</div><p></p>
        <button onClick={handleDelete}>Delete Prescription From System</button><p></p>
    </div>
  );
}

export default Prescription;