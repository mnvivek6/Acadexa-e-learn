import React from 'react'
import { Course } from '../../../Models/Models'
import { Link } from 'react-router-dom'

interface course{
    course:Course
}

const  Coursecard:React.FC<course>=({course})=> {
  return (
    <div
    className="relative h-52 gap-1 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
    <div className="w-full md:w-1/3 bg-white grid place-items-center">   
    <Link to={`/tutor/addclasses/${course._id}`}>
          <img src={course.image} alt={course.title} className="rounded-xl h-28" />
          </Link>
    </div>
    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <h3 className="font-black text-gray-800 md:text-lg text-sm">{course.title}</h3>
          <p className="md:text-sm text-gray-500 text-base">{course.description}</p>
    </div>
  </div>
  )
}

export default Coursecard
