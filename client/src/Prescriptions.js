import React,  {useState, useEffect}  from "react"
import PrescriptionCard from "./PrescriptionCard"
import axios from "axios"

function Prescriptions() {
    
    const [prescriptionList, setPrescriptionList] = useState([])
    const [patient, setPatient] = useState("")
    const [physician, setPhysician] = useState("")
    const [medication, setMedication] = useState("")

    useEffect(() => {
        fetch ('/prescriptions')
        .then (resp => resp.json())
        .then (data => setPrescriptionList(data))
      console.log(prescriptionList)
      }, [])

      const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/Prescriptions', {
            patient_id: patient,
            physician_id: physician,
            medications_id: medication

        })
        .then (res => setPrescriptionList([...prescriptionList,res.data]))
    setPatient("")
    setPhysician("")
    setMedication("")

    }
    
    return (
      
      <div>
          
          Prescriptions

          <p></p>
          Create a New Prescription With This Form: 

<p></p>
<form onSubmit={handleSubmit}>
        <label htmlFor="name">Prescription Name</label>
        <input
            type="text"
            id="name"
            autoComplete="off"
            value={patient}
            onChange = {(e) => setPatient(e.target.value)}/>
            
         <label htmlFor="brand_name">Brand Name</label>   
        <input
            type="text"
            id="name"
            autoComplete="off"
            value={physician}
            onChange = {(e) => setPhysician(e.target.value)}/>
        
        <label htmlFor="medication">medication</label> 
        <input
            type="text"
            id="name"
            autoComplete="off"
            value={medication}
            onChange = {(e) => setMedication(e.target.value)}/>
            <p></p>
        <button variant="fill" color="primary" type="submit">Create Prescription
        </button><p></p>
        
</form>

          {prescriptionList.map(prescription => <PrescriptionCard prescription={prescription} key = {prescription.id}/> )}

      
      </div>
    );
  }

export default Prescriptions;