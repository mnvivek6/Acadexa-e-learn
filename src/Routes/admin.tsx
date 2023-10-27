import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/admin/Login'
import Dashboard from '../Pages/admin/Dashboard'
import GetAllusers from '../Pages/admin/GetAllusers'
import Category from '../Pages/admin/Category'
import AllTutors from '../Pages/admin/AllTutors'
import Listcourse from '../Pages/admin/Listcourse'
import Verificationpage from '../Pages/admin/Verificationpage'

function admin() {
  return (
    <div>
     <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/getusers' element={< GetAllusers/>}/>
     <Route path='/addcategory' element={<Category/>}/>
     <Route path='/getTutors'element={<AllTutors/>}/>
     <Route path='/getcourse'element={<Listcourse/>}/>
     <Route path='/verification/:id' element={<Verificationpage />}/>
     </Routes>
      
      
    </div>
  )
}

export default admin
