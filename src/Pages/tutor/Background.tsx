import React from 'react'
import Index from '../../Components/tutor/Index'
import Sidebar from '../../Components/tutor/Sidebar'

interface BackgroundProps{
    child:React.ReactNode
}
const  background:React.FC<BackgroundProps>=({child})=> {
  return (
    <div>
    <Sidebar/>
    <div
    className="flex items-center bg-cover min-h-screen text-gray-800"
    style={{ backgroundImage: `url(https://demos.creative-tim.com/argon-dashboard/assets/img/vr-bg.jpg)` ,}} >
    {child}
  </div>
    
  </div>
  )
}

export default background
