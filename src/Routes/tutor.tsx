import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/tutor/Signup'
import Home from '../Pages/tutor/Home'
import VerifyMail from '../Pages/tutor/VerifyMail'
import Login from '../Pages/tutor/Login'
import Profile from '../Pages/tutor/Profile'
import Course from '../Pages/tutor/Course'
import Class from '../Pages/tutor/Class'

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
      </Routes>
    </div>
  )
}

export default tutorRoute
