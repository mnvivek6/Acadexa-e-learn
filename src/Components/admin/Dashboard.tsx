import React,{ useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Piechart from './dashboard/Piechart'
import Users from './dashboard/Users'
import Reveneu from './dashboard/Reveneu'
import Barchart from './dashboard/Barchart'
import { GetTutors, unverifiedTutors } from '../../Services/admin/getTutors'
import { getUsers } from '../../Services/admin/getUsers'
// import Barchart from '../tutor/dashboardComponents/Barchart'
// import Piechart from '../tutor/dashboardComponents/Piechart'
import ListingTutor from './tables/ListingTutor'
const  Dashboard :React.FC=()=> {

  const [tutors,setTutor]= useState<number>(0)
  const [users,setUsers]= useState<number>(0)

  useEffect(()=>{
    const allTutors = async()=>{
      try {
        const response =await GetTutors()
        console.log('tutors:',response.allTutors.length);
        setTutor(response.allTutors.length)
        
      } catch (error) {
        
      }
    }
    allTutors()
  },[])
  
  useEffect(()=>{
    const users = async()=>{
      try {
        const res =await getUsers()
        console.log('users',res.length);
        setUsers(res.length)
      } catch (error) {
        
      }
    }
    users()
  },[])
 useEffect(()=>{
  const unverifiedtutors = async()=>{
    try {
       const res = await unverifiedTutors()
       console.log('unverified tutors:',res);
       
    } catch (error) {
      console.log(error);
      
    }
  }
  unverifiedtutors()
 },[])
 
  return (
   <div>
   <div className='overflow-x-hidden'>

   
   <Sidebar/>
   <div className="p-4 w-full ml-52 mt-10 overflow-x-hidden">
            <div className="grid grid-cols-12 gap-4">
           < Users users={users}/>
           <Reveneu tutors={tutors}/>
           </div> 
    <div className="flex">
  <div className="w-[43%] p-4">
    <Piechart totalCourse={undefined} totalusers={undefined} revenue={undefined} />
  </div>
  <div className="w-[43%] p-4 ">
  <Barchart />
  </div>
</div>

</div>
</div>
<ListingTutor setTutors={undefined} tutors={undefined}/>
   </div>
   
     
  )
}

export default Dashboard
