import React, { useState } from 'react'
import { searchCoursebyName } from '../../../Services/admin/course'
import { Course } from '../../../Models/Models'



function Search({setSearch}: any) {

  const [input,setInput] = useState<string>()
  
  const handleChange = async(value:string)=>{
    setInput(value)
    console.log(value,'asdfghjklqwertyuiop');
    
    const response = await searchCoursebyName(value)
    console.log(response,'responses are here');
    setSearch(response)
    
  }
  return (
   
    <form className='flex justify-center '>

    <div className="relative w-1/4 m-2 shadow-xl">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 pl-10 text-sm text-grey border border-gray-300 rounded-lg bg-gray-50   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey  "
        placeholder="Search ..."
        required
        value={input}
        onChange={(e)=>{handleChange(e.target.value)}}
      />
      <button
        type="submit"
        className="text-white absolute right-2.5 bottom-2.5 bg-offgreen bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2   "
      >
        Search
      </button>
    </div>
  </form>
  
  
  )
}

export default Search
