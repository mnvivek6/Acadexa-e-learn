import React from 'react'
import Sidebar from '../../Components/admin/Sidebar/Sidebar'


interface Dashboardbg{
    child:React.ReactNode
}
const Darshboardback:React.FC<Dashboardbg>=({child})=> {
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

export default Darshboardback
