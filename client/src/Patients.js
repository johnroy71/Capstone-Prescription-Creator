import React,  {useState, useEffect}  from "react"
import PatientCard from "./PatientCard"
import axios from "axios"

function Patients() {
    
    const [patientList, setPatientList] = useState([])
    const [patientName, setPatientName] = useState("")

    useEffect(() => {
        axios.get('/patients')
        
        .then (res=> setPatientList(res.data))
      
      }, [])

      const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/patients', {
            pt_name: patientName
        })
        .then (res => setPatientList([...patientList,res.data]))
        setPatientName("")
      }
    
    return (
      
      <div>
          
          Patients

          <p></p>

Create a New Patient With This Form: 

<p></p>
<form onSubmit={handleSubmit}>
      <label htmlFor="name">Patient Name</label>
      <input
          type="text"
          id="name"
          autoComplete="off"
          value={patientName}
          onChange = {(e) => setPatientName(e.target.value)}
          />

  
      <button variant="fill" color="primary" type="submit">Create Patient
      </button>
      
</form>

          {patientList.map(patient => <PatientCard patient={patient} key = {patient.id}/> )}


      
      </div>
    );
  }

export default Patients;


