
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetCourseById } from '../../Services/client/allCourse'
import { Course, tutorType } from '../../Models/Models'
import { tutorById } from '../../Services/client/getTutor'




function CoursePlaylist() {

     const courseid =  useParams()
     const [courseState,SetCourseState] = useState<Course>()
     const [selected,setSelected] = useState<string|undefined>(undefined)
     const [tutor,setTutor] = useState<tutorType|undefined>(undefined)
      // console.log(selected,'dals;djfiaeuffiiregwgrnekrgnerjgkrefds,nskfs');
      

      // console.log(courseState);
      // console.log(tutor?.name,'tutor details arer here');
      
      
      
      const id :string|undefined= courseid.id

     useEffect(()=>{
        const getcourse = async()=>{
            try {
                const course = await GetCourseById(id)
                // console.log(course,'get course by id');
                SetCourseState(course.singleCourse)
                setTutor(course.singleCourse.tutor)
                console.log(course.singleCourse.tutor._id);
                
            } catch (error) {
                
            }
        }
        getcourse()
     },[])
  

  return (
    <div>
        



<div className='flex'>
  {/* First Card (Half Width) */}
  <div className="w-1/2">
  <div className="mt-20 ml-10 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    
      <div className="h-64">
        {selected ? (<video src={selected? selected: courseState?.image} controls className='rounded-t-lg h-64 w-full'></video> ):(<a href="">
          <img
          src={courseState?.image}
            className="w-full h-full rounded-t-lg object-cover"
            
            alt=""
          />
       
        </a>)
           
           }
       
      </div>
   <div className='flex  mt-3'>
   <div className="mb-10 ml-5">
                    
                    <Link to={`/tutorprofile/${tutor?._id}`}>
                     <img alt="..." src="https://i.pinimg.com/474x/85/25/83/852583511c3109d7a4efa0c3a233be1e.jpg" className="rounded-full absolute   w-16 h-16 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                     </Link>
                   
               </div>
               <div className='mt-4  ml-20 '>
                <Link to={`/chats/${tutor?._id}`}>
               <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-lavender rounded-2xl  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">connect</button>
               </Link>
               </div>
             
   </div>
   

    <div className="p-3">
    
      <a href="#">
        <h5 className="mb-2 text-lg mt-8 font-bold tracking-tight text-gray-900 dark:text-black ">
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
  <div className="flex flex-col mt-20 ml-10 gap-3 w-5/12 cursor-pointer"  > 
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
