import React from 'react'
import {Routes, Route} from "react-router-dom"
import Register from '../Pages/clients/Register'
import Login from '../Pages/clients/Login'
import Home from '../Pages/clients/home/Home'
import VerifyMail from '../Pages/clients/VerifyMail'
import Index from '../Pages/clients/Index'


const  UserRoute:React.FC=()=> {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/signup' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/verifymail/:id' element={<VerifyMail/>}/>
       <Route path='/index' element={<Index/>}/>
       
      </Routes>
    </div>
  )
}

export default UserRoute

