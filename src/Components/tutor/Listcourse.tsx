import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Allcourse } from '../../Services/tutor/Addcourse'
import { Course } from '../../Models/Models'
import Coursecard from './listitems/Coursecard'
import Searchbar from './searchbar/Searchbar'
import { searchCourse } from '../../Services/client/search'
import Purchasedcourse from './listitems/Purchasedcourse'
import Search from '../admin/search/Search'

function Listcourse() {

  const [courses,setCourse] =useState<Course[]>()

  useEffect(()=>{
    const getCourse = async()=>{
     
      
      try {
        
        const Course = await Allcourse()
       
        setCourse(Course.message)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getCourse()
  },[])
  return (
    <>
    <Sidebar/>
   
    <div className="flex flex-col justify-center gap-5">
    <div className='justify-items-end'>
    <Search/>
    </div>
     {courses?.map((course, index) => (
       
       <Purchasedcourse course={course}/>
     
       ))}
     </div>
     </>
     
  
  )
}

export default Listcourse
