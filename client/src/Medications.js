import React,  {useState, useEffect}  from "react"
import MedicationCard from "./MedicationCard"
import axios from "axios"

function Medications() {
    
    const [medicationList, setMedicationList] = useState([])
    const [medicationName, setMedicationName] = useState("")
    const [brandName, setBrandName] = useState("")
    const [condition, setCondition] = useState("")

    useEffect(() => {
        fetch ('/medications')
        .then (resp => resp.json())
        .then (data => setMedicationList(data))
      
      }, [])

      const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/medications', {
            med_name: medicationName,
            brand_name: brandName,
            condition: condition

        })
        .then (res => setMedicationList([...medicationList,res.data]))
    setMedicationName("")
    setBrandName("")
    setCondition("")

    }
    
    return (
    
      <div class="homepage">
          
          <h1>Medications</h1>

          <p></p>
          Create a New Medication With This Form: 

<p></p>
<form onSubmit={handleSubmit}>
        <label htmlFor="name">Medication Name</label>
        <input
            type="text"
            id="name"
            autoComplete="off"
            value={medicationName}
            onChange = {(e) => setMedicationName(e.target.value)}/>
            
         <label htmlFor="brand_name">Brand Name</label>   
        <input
            type="text"
            id="name"
            autoComplete="off"
            value={brandName}
            onChange = {(e) => setBrandName(e.target.value)}/>
        
        <label htmlFor="condition">Condition</label> 
        <input
            type="text"
            id="name"
            autoComplete="off"
            value={condition}
            onChange = {(e) => setCondition(e.target.value)}/>
            <p></p>
        <button variant="fill" color="primary" type="submit">Create Medication
        </button><p></p>
        
</form>
<div className="card_container">
          {medicationList.map(medication => <MedicationCard medication={medication} key = {medication.id}/> )}

      </div>
      </div>
    );
  }

export default Medications;