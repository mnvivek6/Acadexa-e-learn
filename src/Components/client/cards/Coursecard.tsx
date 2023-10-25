import React from 'react'
import { Link } from 'react-router-dom'
import { Course } from '../../../Models/Models'

interface course {
    course:Course
}
const  Coursecard:React.FC<course>=({course})=> {


  return (
   
        <div className="w-48 max-w-xs mx-2 bg-grey bg-opacity-20 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 motion-safe:hover:scale-110 transition-[2s]">
          <a href="#">
            <div className="h-32">       
             <img
                className="w-full h-full rounded-t-lg object-cover" // Use object-cover for both width and height
                src={course.image}
                alt="Course image"
              />
            </div>
          </a>
          <div className="p-3">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
               {course.title}
              </h5>
            </a>
            <p className="mb-1 font-sans text-gray dark:text-white overflow ">
      <div className="line-clamp-1">
        {course.description}
      </div>
      <div className="line-clamp-3">
       <p className='text-white'> Level : {course.level}</p>  
      </div>
      <div className="line-clamp-3">
      <p className='text-white font-bold'>₹ {course.coursefee}</p> 
      </div>
      <Link to={`/coursedetails/${course._id}`} >
      <button className="min-w-auto w-40 h-10 bg-greylight p-2 rounded-l-full rounded-r-full hover:bg-lavender  text-white font-sans  hover:flex-grow transition-all duration-200 ease-in-out">
          View Details
        </button>
      </Link>
    </p>  
          </div>
        </div>
  )
}

export default Coursecard
