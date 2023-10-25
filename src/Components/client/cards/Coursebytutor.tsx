import React from 'react'

interface Classitems{
    classItem:any
}
const Coursebytutor:React.FC<Classitems>=({classItem})=> {
  return (
    <div className="flex items-center shadow-md justify-center bg-white p-1 rounded-lg transform hover:scale-110 transition-transform duration-200 w-96 mr-10 mt-5"
    role="article" >
    <div className="w-full md:w-1/3 bg-white flex items-center justify-center">
      {/* <video src={classItem.video} controls className="rounded-lg" aria-label={`Video for ${classItem.title}`} //> */}
      <img src={classItem.image} alt="" />
    </div>
    <div className="w-full flex flex-col items-center justify-center bg-white p-2">
      <h3 className="font-black text-gray-800">{classItem.title}</h3>
      <p className="md:text-xs text-gray-500 text-base overflow-hidden max-h-11">
        {classItem.description}
      </p>
    </div>
  </div>
  )
}

export default Coursebytutor
