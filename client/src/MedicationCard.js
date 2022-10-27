import React from "react";

function Medication({medication}) {

    const handleDelete = () => {
    
        fetch(`/medications/${medication.id}`, {
            method: "DELETE",
        }
      )}

  return (
    
    <div className="prescription_card">
        <u>Medication</u><p></p>
        <div>Medication ID: {medication.id}</div>
        <div>Medication Name: {medication.med_name}</div>
        <div>Brand Name: {medication.brand_name}</div>
        <div>Treats: {medication.condition}</div><p></p>
        <button onClick={handleDelete}>Delete Medication From System</button><p></p>
    </div>
  );
}

export default Medication;