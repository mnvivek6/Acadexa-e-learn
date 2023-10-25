import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/tutor/Signup'
import Home from '../Pages/tutor/Home'
import VerifyMail from '../Pages/tutor/VerifyMail'
import Login from '../Pages/tutor/Login'
import Profile from '../Pages/tutor/Profile'
import Course from '../Pages/tutor/Course'
import Class from '../Pages/tutor/Class'
import Listcourses from '../Pages/tutor/Listcourses'
import Categories from '../Pages/tutor/Categories'
import Landingfortutor from '../Pages/tutor/Landingfortutor'
import Purchaseduser from '../Components/tutor/Purchaseduser'
import ChatwithUsers from '../Components/client/chats/ChatwithUsers'
import SuccessPage from '../Pages/tutor/SuccessPage'

 const tutorRoute:React.FC=()=> {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/verifyEmail/:id' element={<VerifyMail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addcourse' element={<Course/>}/>
        <Route path='/addclasses/:courseid' element={<Class/>}/>
        <Route path='/allcourses' element={<Listcourses/>}/>
        <Route path='/allCategory' element={<Categories/>}/>
        <Route path='/landingpage/:id'element={<Landingfortutor/>}/>
        <Route path='/purchasedusers/:id' element={<Purchaseduser/>}/>
        <Route path='/chatwithusers/:id' element={<ChatwithUsers/>}/>
        <Route path='/submitionsuccess' element={<SuccessPage/>}/>
      </Routes>
    </div>
  )
}

export default tutorRoute
