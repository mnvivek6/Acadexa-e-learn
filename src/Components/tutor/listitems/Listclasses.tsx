import React from 'react'

interface Listclasses{
    classItem:any
    index:number
}

const Linstclasses:React.FC<Listclasses>=({classItem,index})=> {
  return (
    <div
        key={index}
        className="relative flex  flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
      >
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <video src={classItem.video} controls className='rounded-lg'></video>
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <h3 className="font-black text-gray-800 md:text-xl text-xl">
            {classItem.title}
          </h3>
          <p className="md:text-sm text-gray-500 text-base">
            {classItem.description}
          </p>
          <p className="text-xl font-black text-gray-800">
            {/* Add any other relevant data here */}
            {classItem.price}
          </p>
        </div>
      </div>
  )
}

export default Linstclasses
