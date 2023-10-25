import React, { useEffect ,useState} from 'react'
import { AllCourse } from '../../Services/client/allCourse'
import { Course, Payment } from '../../Models/Models'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../Redux/hooks';
import { logoutUser } from '../../Redux/client/userSlice';
import path from 'path';
import { PurchasedCourses } from '../../Services/client/profile';
import Coursecard from './cards/Coursecard';
import Nav from './Nav';


function Index() {

  const [courses,setCourses] = useState<Course[]>()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSignout=()=>{
    dispatch(logoutUser({}))
    navigate('/login')
  }



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
    <>
    <section className="flex items-center h-full">
      <div className=" w-full">
        <div className="w-full flex  flex-wrap justify-center default-carousel py-3 pt-24">
          {courses?.map((course) => (
            <div className="mb-4" >
              <Coursecard course={course} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className=''> */}
      {/* <Sortbox/> */}
      {/* </div> */}
    
     
      
    </section>
  </>  
  )

}
export default Index
