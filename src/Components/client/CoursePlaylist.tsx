
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCourseById } from '../../Services/client/allCourse'
import { Course } from '../../Models/Models'




function CoursePlaylist() {

     const courseid =  useParams()
     const [courseState,SetCourseState] = useState<Course>()
     const [selected,setSelected] = useState<string|undefined>(undefined)
      console.log(selected,'dals;djfiaeuffiiregwgrnekrgnerjgkrefds,nskfs');
      

      console.log(courseState,'course state are here');
      
      const id :string|undefined= courseid.id
     useEffect(()=>{
        const getcourse = async()=>{
            try {
                const course = await GetCourseById(id)
                console.log(course.singleCourse,'get course by id');
                SetCourseState(course.singleCourse)
            } catch (error) {
                
            }
        }
        getcourse()
     },[])

  return (
    <div>
        <header className="bg-white shadow-md">
  <div className="container mx-auto flex justify-between items-center p-4">
    <div className="logo">
      <a href="#">Your Logo</a>
    </div>
    
    <div className="relative flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          className="border rounded-full w-48 py-2 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-4.35-4.35M15 10a5 5 0 100-10 5 5 0 000 10z"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <a href="#">Home</a>
      <a href="/profile">Profile</a>
      <a href="#">Privacy and Policy</a>
      
      
    </div>
  </div>
</header>



<div className='flex'>
  {/* First Card (Half Width) */}



  <div className="w-1/2">
  <div className="mt-20 ml-10 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
      <div className="h-64">
        {selected ? (<video src={selected? selected: courseState?.image} controls className='rounded-t-lg '></video> ):(<a href="">
          <img
          src={courseState?.image}
            className="w-full h-full rounded-t-lg object-cover"
            
            alt=""
          />
       
        </a>)
           
           }
        
      </div>
    </a>
    <div className="p-3">
      <a href="#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black ">
          {courseState?.title}
        </h5>
      </a>
      <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 overflow h-20">
        <div className="line-clamp-3 pt-4">
         {courseState?.description}
        </div>
      </p>
    </div>
  </div>
</div>



  {/* Second and Third Cards (Stacked Vertically) */}
  <div className="flex flex-col mt-20 ml-10 gap-3 w-1/2 cursor-pointer"  > 
  {courseState && Array.isArray(courseState.classes) && courseState.classes.length > 0 ? (
    courseState.classes.map((classItem, index) => (
    <div className=" flex  items-center shadow-md justify-center  bg-white p-1 rounded-lg motion-safe:hover:scale-110 transition-[2s]"onClick={()=>setSelected(classItem.video)}>
      <div className="w-full md:w-1/3 bg-white grid place-items-center  ">
       <video src={classItem.video} controls className='rounded-s '></video>
      </div>
      <div className="w-full flex flex-col items-center justify-center   bg-white p-2 ">
       
        <h3 className="font-black text-gray-800 ">{classItem.title}</h3>
        <p className="md:text-xs text-gray-500 text-base">{classItem.description}</p>
      </div>
    </div>
  ))
  ) : (
    <p>No classes available</p>
  )}
    {/* Third Card */}
    
    {/* End of Stacked Vertical Cards*/}
  </div>
</div>
   
    </div>
  )
}

export default CoursePlaylist
