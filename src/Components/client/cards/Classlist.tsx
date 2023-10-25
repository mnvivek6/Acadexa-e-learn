import React from 'react'

interface classdetails{
    classItem:any
}
const  Classlist:React.FC<classdetails>=({classItem})=> {
  return (
    <div className=" flex  items-center shadow-md justify-center  bg-white p-1 rounded-lg motion-safe:hover:scale-110 transition-[2s] w-96 mr-10">
      <div className="w-full md:w-1/3 bg-white grid place-items-center  ">
       <video src={classItem.video} controls className='rounded-s '></video>
      </div>
      <div className="w-full flex flex-col items-center justify-center   bg-white p-2 ">
       
        <h3 className="font-black text-gray-800 ">{classItem.title}</h3>
        <p className="md:text-xs text-gray-500 text-base overflow-hidden max-h-11">{classItem.description}</p>
      </div>
    </div>
  )
}

export default Classlist
