import React from 'react'
import { CategoryType } from '../../../Models/Models'
import Searchbar from '../searchbar/Searchbar'

interface categorytype {
    category:CategoryType
}
const  Categorycard:React.FC<categorytype>=({category})=> {
  return (
    <>
   
    <div
      className="relative h-52 gap-1 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
    >
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
 
            <img src={category.image} alt={category.name} className="rounded-xl h-28" />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        {/* Render either course or category details based on condition */}
            {/* Render category details here */}
            <h3 className="font-black text-gray-800 md:text-lg text-sm">{category.name}</h3>
            {/* Render other category details */}
            <p className="md:text-sm text-gray-500 text-base">{category.description}</p>
      </div>
    </div>
    </>
  )
}

export default Categorycard
