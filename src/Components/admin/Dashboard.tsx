import React,{ useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Piechart from './dashboard/Piechart'
import Users from './dashboard/Users'
import Reveneu from './dashboard/Reveneu'
import Barchart from './dashboard/Barchart'
import Coursess from './dashboard/Courses'
import Tutors from './dashboard/Tutors'
import { GetTutors, unverifiedTutors } from '../../Services/admin/getTutors'
// import Courses from '../../Services/admin/course'
import { getUsers } from '../../Services/admin/getUsers'
// import Barchart from '../tutor/dashboardComponents/Barchart'
// import Piechart from '../tutor/dashboardComponents/Piechart'
import Unverified from './tables/Unverified'
import { tutorType } from '../../Models/Models'
import { Courses } from '../../Services/admin/course'
const  Dashboard :React.FC=()=> {

  const [tutors,setTutorr]= useState<number>(0)
  const [users,setUsers]= useState<number>(0)
  const [unverified,setTutor] = useState<tutorType[]|null>(null)
  const [courses,setCourses] = useState<number|undefined>(0)

  useEffect(()=>{
    const allTutors = async()=>{
      try {
        const response =await GetTutors()
        console.log('tutors:',response.allTutors.length);
        setTutorr(response.allTutors.length)
        
      } catch (error) {
        
      }
    }
    allTutors()
  },[])
  useEffect(()=>{
    const courses = async()=>{
      try {
        const response = await Courses()
        console.log(response);
        setCourses(response?.length)
      } catch (error) {
        
      }
    }
    courses()
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
      
       setTutor(res)
    } catch (error) {
      console.log(error);
      
    }
  }
  unverifiedtutors()
 },[])
    console.log(unverified,'adf');
    

  return (
   <div>
   <div className='overflow-x-hidden'>

   
   <Sidebar/>
   <div className="p-4 w-full ml-52 mt-10 overflow-x-hidden">
            <div className="grid grid-cols-12 gap-1">
           < Users users={users}/>
           <Reveneu tutors={tutors}/>
           <Coursess totalcourses={courses}/>
           <Tutors revenue={434}/>
           </div> 
    <div className="flex">
  <div className="w-[43%] p-4">
    <Piechart totalCourse={tutors} totalusers={users} revenue={undefined} />
  </div>
  <div className="w-[43%] p-4 ">
  <Barchart />
  </div>
</div>

</div>
</div>
<p className="ml-60 text-lg font-bold">Tutors Verification list</p>
<Unverified tutors={unverified}/>
   </div>
   
     
  )
}

export default Dashboard
