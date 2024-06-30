import React from 'react'
// import { useAppSelector } from '../Redux/hooks'
import {Routes, Route} from "react-router-dom"
import Register from '../Pages/clients/Register'
import Login from '../Pages/clients/Login'
import Home from '../Pages/clients/home/Home'
import VerifyMail from '../Pages/clients/VerifyMail'
import Index from '../Pages/clients/Index'
import CoursePlaylist from '../Pages/clients/CoursePlaylist'
import Profilee from '../Pages/clients/Profilee'
import Purchasepage from '../Pages/clients/Prchasepage'
import Categories from '../Pages/clients/Categories'
import Nav from '../Components/client/Nav'
import Coursebycategory from '../Components/client/Coursebycategory'
import Tutorprofile from '../Pages/clients/Tutorprofile'
import Landingfortutor from '../Pages/tutor/Landingfortutor'
import Chatwithtutor from '../Pages/clients/Chatwithtutor'
import SuccessPage from '../Components/tutor/successpage/SuccessPage'





const  UserRoute:React.FC=()=> {
  // const isAuthUser = useAppSelector(state=>state.user.accessToken)

  // useEffect(()=>{
  //   window.scroll(0,0);
  // },[location]);

  // const isLoginRoute = location.pathname === '/login'
  return (
    <div>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/signup' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/verifymail/:id' element={<VerifyMail/>}/>
       <Route path='/index' element={<Index/>}/>
       <Route path='/coursePlaylist/:id' element={<CoursePlaylist/>}/>
       <Route path='/profile' element={<Profilee/>}/>
       <Route path='/coursedetails/:id' element={<Purchasepage/>}/>
       <Route path='/categories' element={<Categories/>}/>
       <Route path='/coursebycategory/:id' element={<Coursebycategory/>}/>
       <Route path='/tutorprofile/:id' element={<Tutorprofile/>}/>
       <Route path='/chats/:id' element={<Chatwithtutor/>}/>
       <Route path='/paymentsuccess' element={<SuccessPage/>}/>
       
      </Routes>
    </div>
  )
}

export default UserRoute

