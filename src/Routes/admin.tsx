import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/admin/Login'
import Dashboard from '../Pages/admin/Dashboard'
import GetAllusers from '../Pages/admin/GetAllusers'
import Blur from '../Components/admin/Blur'
import Category from '../Pages/admin/Category'

function admin() {
  return (
    <div>
     <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/getusers' element={< GetAllusers/>}/>
     <Route path='/addcategory' element={<Category/>}/>
     <Route path='/blur' element={< Blur/>}/>
     </Routes>
      
      
    </div>
  )
}

export default admin
