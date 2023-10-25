import React,{ useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Piechart from './dashboard/Piechart'
import Users from './dashboard/Users'
import Reveneu from './dashboard/Reveneu'
import Barchart from './dashboard/Barchart'
// import Barchart from '../tutor/dashboardComponents/Barchart'
// import Piechart from '../tutor/dashboardComponents/Piechart'
const  Dashboard :React.FC=()=> {

  

 
  return (
   <div>
   {/* <div className='overflow-x-hidden'> */}

   
   <Sidebar/>
   <div className="p-4 w-full ml-52 mt-10 overflow-x-hidden">
            <div className="grid grid-cols-12 gap-4">
           < Users/>
           <Reveneu/>
           </div> 
    <div className="flex">
  <div className="w-1/2 p-4">
    <Piechart totalCourse={undefined} totalusers={undefined} revenue={undefined} />
  </div>
  <div className="w-1/2 p-4">
  <Barchart />
  </div>
</div>

</div>
{/* </div> */}
   </div>
   
     
  )
}

export default Dashboard
