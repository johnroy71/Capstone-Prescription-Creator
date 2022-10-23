import React, {useState, useEffect} from "react"
import axios from "axios"

import PhysicianCard from "./PhysicianCard"

function Physicians() {
    
    const [physicianList, setPhysicianList] = useState([])
    const [physName, setPhysName] = useState("")
    useEffect(() => {
        axios.get('/physicians')
      
        .then (res => setPhysicianList(res.data))
      
      }, [])

      const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/physicians', {
            phys_name: physName
        })
        .then (res => setPhysicianList([...physicianList,res.data]))
    setPhysName("")
    
      }

    
    return (
      
        


      <div>
          
          Physicians


        <p></p>

Create a New Physician With This Form: 

<p></p>
<form onSubmit={handleSubmit}>
        <label htmlFor="name">Physician Name</label>
        <input
            type="text"
            id="name"
            autoComplete="off"
            value={physName}
            onChange = {(e) => setPhysName(e.target.value)}
            />

    
        <button variant="fill" color="primary" type="submit">Create Physician
        </button>
        
</form>

          {physicianList.map(physician => <PhysicianCard physician={physician} key = {physician.id}/> )}

      
      </div>
    );
  }

export default Physicians;