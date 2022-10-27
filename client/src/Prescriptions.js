import React,  {useState, useEffect}  from "react"
import PrescriptionCard from "./PrescriptionCard"
import axios from "axios"

function Prescriptions() {
    
    const [prescriptionList, setPrescriptionList] = useState([])
    const [patient, setPatient] = useState()
    const [physician, setPhysician] = useState()
    const [medication, setMedication] = useState()

    useEffect(() => {
        fetch ('/prescriptions')
        .then (resp => resp.json())
        .then (data => setPrescriptionList(data))
      console.log(prescriptionList)
      }, [])

      const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/prescriptions', {
            patient_id: patient,
            physician_id: physician,
            medication_id: medication

        })
        .then (res => setPrescriptionList([...prescriptionList,res.data]))
    setPatient()
    setPhysician()
    setMedication()

    }
    
    return (
      
      <div class="homepage">
          
          <h1>Prescriptions</h1>

          <p></p>
          Create a New Prescription With This Form: 

<p></p>
<form onSubmit={handleSubmit}>
        <label htmlFor="name">Patient Name</label>
        <input
            type="integer"
            id="name"
            autoComplete="off"
            value={patient}
            onChange = {(e) => setPatient(e.target.value)}/>
            
         <label htmlFor="brand_name">Physician Name</label>   
        <input
            type="integer"
            id="name"
            autoComplete="off"
            value={physician}
            onChange = {(e) => setPhysician(e.target.value)}/>
        
        <label htmlFor="medication">Medication Name</label> 
        <input
            type="integer"
            id="name"
            autoComplete="off"
            value={medication}
            onChange = {(e) => setMedication(e.target.value)}/>
            <p></p>
        <button variant="fill" color="primary" type="submit">Create Prescription
        </button><p></p>
        
</form>
        <div className="card_container">
          {prescriptionList.map(prescription => <PrescriptionCard prescription={prescription} key = {prescription.id}/> )}

        </div>
      </div>
    );
  }

export default Prescriptions;