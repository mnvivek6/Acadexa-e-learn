import React from 'react'

  interface tutors{
    tutors:number|0
  }
const  Reveneu:React.FC<tutors>=({tutors})=> {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
    <div className="flex flex-row bg-white shadow rounded-xl p-4 h-20">
      <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
      <svg className="w-6 h-6 text-gray-800 dark:text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"/>
  </svg>
        
      </div>
      <div className="flex flex-col flex-grow ml-4">
        <div  className="text-sm  font-bold text-grey">Total Tutors</div>
        <div className="font-bold text-lg">{tutors}</div>
      </div>
    </div>
  </div>
  )
}

export default Reveneu
