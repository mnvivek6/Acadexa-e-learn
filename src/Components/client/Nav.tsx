import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { searchCourse } from '../../Services/client/search'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { logoutUser } from '../../Redux/client/userSlice'
import { Course } from '../../Models/Models'

function Nav() {

  const [input,setInput] = useState<string>('')
  const [courseData,setCourse] = useState<Course[]|null>(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state=>state.user)
  const handleChange = async(value:string)=>{
    setInput(value)
    const respone:Course[]|null = await searchCourse(value)
    setCourse(respone)
    console.log(respone,'searched courses here');
    
  }
  return (
    <div>
      <header className="bg-white shadow-md">
  <div className="container mx-auto flex justify-between items-center p-4  ">
    <div className="logo">
    <svg className="w-6 h-6 text-gray-800 dark:text-deelviolet" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
    <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
  </svg>
  <a href="" className='font-extrabold text-deelviolet'>ACADEXA</a>
    </div>
    <div className="relative flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          className="border rounded-full w-64 py-2 px-4 pl-10 text-gray leading-tight focus:outline-none focus:border-blue-50"
          placeholder="Search"
          value={input}
          onChange={(e)=>{handleChange(e.target.value)}}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg className="w-6 h-6 text-gray-800 dark:text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg>
        </div>
      </div>
    </div>
    <div>
            {input !== '' && (
              <div className=' absolute mt-11 w-full px-5 bg-white flex flex-col rounded-lg max-h-80 overflow-auto opacity-75 custom-scrollbar z-50'>
                {courseData?.map((item) => {
                  return(
                    <div  className='search-result flex justify-between' key={item?._id} onClick={()=>navigate(`/courseDetails/${item?._id}`)}>
                    <h1 className='font-bold text-grey w-full py-2 hover:bg-greylight'>{item?.title}</h1>
                    {/* <p className='text-sm site-txt-color'>{item?.category}</p> */}
                 
                  </div>
                  )
                })}
                
         
              </div>
            )}
          </div>
    <div className="flex items-center space-x-4">
      <Link to="/index" className='font-extrabold'>Home</Link>
      <Link to={'/profile'}className='font-extrabold'>Profile</Link>
     <Link to={'/categories'}className='font-extrabold'>Category</Link>

     {user?.accessToken?(
     
     <button
                className=" rounded-lg "
                onClick={() => dispatch(logoutUser({}))}
              >
               <svg className="w-6 h-6 text-gray-800 dark:text-red" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
  </svg>
      </button>):(
        <div>
         <button>
          <Link to={'/login'}>
          Login
          </Link>
         </button>
        </div>
       )}
     
    </div>
  </div>
</header>
    </div>
  )
}

export default Nav
