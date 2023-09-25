import React, { useEffect ,useState} from 'react'
import { AllCourse } from '../../Services/client/allCourse'
import { Course } from '../../Models/Models'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../Redux/hooks';
import { logoutUser } from '../../Redux/client/userSlice';
import path from 'path';






function Index() {

  const [courses,setCourses] = useState<Course[]>()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignout=()=>{
    dispatch(logoutUser({}))
    navigate('/login')
  }

console.log(courses,'set Courses');

  useEffect(()=>{
    const getallcourse = async()=>{
      try {
        
        const allCourse =await AllCourse()
        console.log(allCourse)
        setCourses(allCourse.allcourse)
      } catch (error) {
        
      }
    }
    getallcourse()
  },[])

  
  return (
           <div className=''>
            <header className="bg-white shadow-md">
  <div className="container mx-auto flex justify-between items-center p-4 fixed top-0">
    <div className="logo">
      <a href="#">Your Logo</a>
    </div>
    
    <div className="relative flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          className="border rounded-full w-64 py-2 px-4 pl-10 text-gray leading-tight focus:outline-none focus:border-blue-50"
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
      {/* <a href="/profile">Profile</a> */}
      <Link to={'/profile'}>Profile</Link>
     <Link to={'/categories'}>Category</Link>



     
      <Link onClick={handleSignout} to={''}>Logout</Link>
      
      
    </div>
  </div>
</header>



<section className="flex items-center h-full ">
<div className="w-full  flex justify-center  default-carosul py-3  pt-24">

{courses?.map((course)=>(
    <div className="w-48 max-w-xs mx-2 bg-violet  border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 motion-safe:hover:scale-110 transition-[2s]">
      <a href="#">
        <div className="h-32">
          <Link to={`/coursePlaylist/${course._id}`}>
         <img
            className="w-full h-full rounded-t-lg object-cover" // Use object-cover for both width and height
            src={course.image}
            alt=""
          />
        </Link>
        </div>
      </a>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
           {course.title}
          </h5>
        </a>
        <p className="mb-1 font-sans text-gray dark:text-white overflow ">
  <div className="line-clamp-3">
    {course.description}
    
  </div>
  <div className="line-clamp-3">
   <p className='text-white'> Level : {course.level}</p> 
    
  </div>
  <div className="line-clamp-3">
  <p className='text-white font-bold'>₹ {course.coursefee}</p> 
    
  </div>
  <Link to={`/coursedetails/${course._id}`} >
  <button className="min-w-auto w-40 h-10 bg-purple p-2 rounded-l-full rounded-r-full hover:bg-lavender  text-white font-sans  hover:flex-grow transition-all duration-200 ease-in-out">
      View Details
    </button>
  </Link>
  

</p>  
      </div>
    </div>
 
 ))}
</div>
</section>
    </div>
  )

}

export default Index
