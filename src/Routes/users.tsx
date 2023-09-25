import React from 'react'
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



const  UserRoute:React.FC=()=> {
  return (
    <div>
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
       
      
       
      </Routes>
    </div>
  )
}

export default UserRoute

