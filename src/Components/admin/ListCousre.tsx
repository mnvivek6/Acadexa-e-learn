import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Listcourse from '../tutor/listitems/Listcourse'
import { Course } from '../../Models/Models'
import { Courses } from '../../Services/admin/course'
import Search from './search/Search'


function ListCousre() {

    const [courses,setCourses] = useState<Course[]|undefined>()
    const [searched,setSearch] = useState<Course[]|undefined>()
  
  
    useEffect(()=>{
        const courses = async()=>{
            try {
                const response = await Courses()
                console.log(response); 
                setCourses(response)  
            } catch (error) {
             console.log(error);
                
            }
        }
        courses()
    },[])
  return (
    <>
    <Sidebar/>
    <div className="flex flex-col justify-center gap-5">
        <div className='justify-items-end'>
        <Search setSearch={setSearch}/>
        </div>
        {searched && searched.length > 0 ? (
  searched.map((course, index) => <Listcourse course={course} key={index} />)
) : (
  courses?.map((course, index) => <Listcourse course={course} key={index} />)
)}
      </div>
    </>
  )
}

export default ListCousre
