import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { GetTutors } from '../../Services/admin/getTutors'
import { tutorType } from '../../Models/Models'
import ListingTutor from './tables/ListingTutor'

function Alltutors() {


  const [tutors, setTutors] = useState<tutorType[]|undefined>(undefined)
  

  useEffect(()=>{

    const getTutors = async()=>{
      try {
       const tutorss = await GetTutors()
       console.log(tutorss.allTutors,' all tutros are here');
       setTutors(tutorss.allTutors)
       
      } catch (error) {
        
      }
    }  
    getTutors()
  },[])



  return (
    <div>
      <Sidebar/>
      <ListingTutor tutors={tutors} setTutors={setTutors}/>
      
      </div>
    
  )
}

export default Alltutors
