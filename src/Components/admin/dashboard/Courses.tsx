import React from 'react'

interface courses{
  totalcourses:number|undefined
}

const Courses:React.FC<courses>=({totalcourses})=> {
  return (
    <div className="ml-[-120px] w-60 col-span-12 sm:col-span-6 md:col-span-3">
    <div className="flex flex-row bg-white shadow rounded-xl p-4 h-20">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded bg-blue-100 text-blue-500">
              <svg className="w-6 h-6 text-gray-800 dark:text-offgreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
              </svg>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm  font-bold text-grey">Courses</div>
                <div className="font-bold text-lg">{totalcourses}</div>
              </div>
            </div>
          </div>
  )
}

export default Courses
