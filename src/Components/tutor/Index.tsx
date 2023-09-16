import React, { useState } from 'react'
import Sidebar from './Sidebar';

const Index:React.FC=()=> {

    

   
  return (
    <div>
      <Sidebar/>
    

      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 mr-9 mt-7 ">
        <div className="overflow-y-hidden rounded-lg pt-2 ml-1 bg-azelea ">
          <div className="overflow-x-auto">
         
        </div>
        <div className="flex flex-col items-center  bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm">  of Entries </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full  text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
            <button className="h-12 w-12 rounded-full  text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div> 
      
    </div>
           
    
  )
}

export default Index
