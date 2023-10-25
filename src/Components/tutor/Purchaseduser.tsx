import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom'
import { SigleCourse, purchasedusers } from '../../Services/tutor/Addcourse'
import { PurchasedCourses } from '../../Services/client/profile'
import ListingTable from '../admin/tables/ListingTable'
import { Course, UserType } from '../../Models/Models'
import PurchasedUsers from './listitems/PurchasedUsers'



function Purchaseduser() {
  
  const courseid = useParams()
  console.log(courseid.id)
  const id  = courseid.id
  const [course,setCourse] = useState<Course|undefined>(undefined)
  const [users,setUsers] = useState<UserType[]>()
  console.log(users,'users are here');
  
  useEffect(()=>{
    const course = async()=>{
      try {
        const response = await purchasedusers(id)
        // console.log(response,'response here single course here');
        if (response.length > 0) {
          const user = response[0].user;
          const course = response[0].course;
          setCourse(response[0].course)
          // setUsers([response[0].user])
          const usersArray = response.map((item: { user: any }) => item.user);
          console.log('Users Array:', usersArray);
         setUsers(usersArray)
        }
          

      } catch (error) {
        console.log(error);
        
      }
    }
    course()
  },[id])
  

  return (
    

<>
 <Sidebar/>
 <PurchasedUsers userData={users}/>
</>
  )
}

export default Purchaseduser
