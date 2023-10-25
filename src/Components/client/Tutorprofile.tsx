
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { tutorById } from '../../Services/client/getTutor'
import { Course, tutorType } from '../../Models/Models'
import Classlist from './cards/Classlist'
import { GetCourseByTutor } from '../../Services/client/allCourse'
import Coursecard from './cards/Coursecard'

function Tutorprofile() {

  const [tutor,setTutor] = useState<tutorType|undefined>(undefined)
  const [courses,setCourses] = useState<Course[]|null>(null)
  const [about,setAbout] = useState<boolean>(true)
  const [courseshow,setCourseshow]=useState<boolean>(false)
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };
   const id = useParams()
   const tutorId = id.id as string
   useEffect(()=>{

    const tutordetails = async()=>{
      try {
        const data = await tutorById(tutorId)
        console.log(data,'tutor data here');
        setTutor( data)
      } catch (error) {
        console.log(error);
        
      }
    }
    tutordetails()
   },[])
  
   useEffect(()=>{
    const GetCourse = async()=>{
      try {
        const response = await GetCourseByTutor(tutorId)
        console.log(response.response,'course by tutro is here');
        setCourses(response.response)
      } catch (error) {
        
      }
    }
    GetCourse()
   },[])
   

  return (
    <div className='mt-5'>
    <div className="md:grid grid-cols-4 grid-rows-1 bg-white gap-2 p-4 rounded-xl">
      <div className="md:col-span-1 h-48 shadow-xl">
        <div className="flex w-full h-full relative">
          <img
            src="https://res.cloudinary.com/dboafhu31/image/upload/v1625318266/imagen_2021-07-03_091743_vtbkf8.png"
            className="w-44 h-44 m-auto"
            alt=""
          />
        </div>
      </div>
      <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2  hidden md:block">
        <h3 className="font-bold uppercase">TUTOR PROFILE</h3>
        <p className=''>
          {tutor?.name}
          
        </p>
        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-lavender rounded-lg  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">connect</button>
      </div>

     <div className="w-full bg-white border-grey rounded-lg shadow dark:bg-grey-800 dark:border-grey">
      <ul className="flex flex-wrap text-sm font-medium text-center text-grey border-gray-200 rounded-t-lg bg-white dark:border-grey dark:text-grey-400 dark:bg-grey-800" id="defaultTab" role="tablist">
        <li className="mr-2">
          <button id="about-tab" onClick={() => handleTabClick('about')} data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected={activeTab === 'about'} className={`inline-block p-4 ${activeTab === 'about' ? 'bg-blue-600 text-midnight rounded-tl-lg hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500'}`}>About</button>
        </li>
        <li className="mr-2">
          <button id="services-tab" onClick={() => handleTabClick('courses')} data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected={activeTab === 'courses'} className={`inline-block p-4 ${activeTab === 'courses' ? 'bg-blue-600 text-midnight hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500'}`}>Courses</button>
        </li>
        {/* Add other tabs here */}
      </ul>
    
      {/* Add content for tabs here */}

    </div>

    
    </div>
 
    {activeTab === 'about' && (
        <div className="md:col-span-3 h-48 shadow-xl p-4 space-y-2 hidden md:block" style={{ maxHeight: '200px', overflowY: 'auto' }}>
          <h3 className="font-bold uppercase">Profile Description</h3>
          <p>
            {tutor?.aboutme}
          </p>
        </div>
      )}

      {activeTab === 'courses' && (
        <div className="flex justify-center p-4">
          {courses?.map((course) => (
            <Coursecard course={course} />
          ))}
        </div>
      )}

  </div>
  )
}

export default Tutorprofile
