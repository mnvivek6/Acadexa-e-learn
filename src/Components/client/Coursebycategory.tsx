import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { Course } from '../../Models/Models';
import { GetcoursebyCategory } from '../../Services/client/allCourse';
import Coursecard from './cards/Coursecard';

function Coursebycategory() {

    const courseid = useParams()
    const [courses,setCourses] = useState<Course[]|undefined>()
    const id = courseid.id as string
    useEffect(()=>{
        const coursebycategory = async()=>{
            try {
                
                const response = await GetcoursebyCategory(id)
                console.log(response);
                
                setCourses(response)
            } catch (error) {
                console.log(error);
                
            }
        }
        coursebycategory()
    },[])
  return (
    <>
 <section className="flex items-center h-full ">
    <div className="w-full  flex justify-center  default-carosul py-3  pt-24">
           {courses?.map((course)=>(
             <Coursecard course={course}/>
               ))}
                </div>
    </section>
          </>  
  )
}

export default Coursebycategory
