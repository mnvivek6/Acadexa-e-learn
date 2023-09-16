import React from 'react'

function index() {
  return (
           <div className=''>
            <header className="bg-white shadow-md">
  <div className="container mx-auto flex justify-between items-center p-4">
    <div className="logo">
      <a href="#">Your Logo</a>
    </div>
    
    <div className="relative flex items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          className="border rounded-full w-48 py-2 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-4.35-4.35M15 10a5 5 0 100-10 5 5 0 000 10z"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      
      <div className="relative group">
        <button className="focus:outline-none">
          <img
            src="profile-image.jpg"
            alt="Profile Image"
            className="w-8 h-8 rounded-full"
          />
        </button>
        <div className="absolute hidden mt-2 bg-white rounded-lg shadow-lg group-hover:block">
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>

            <section className="flex items-center h-screen">
  <div className="w-1/2 bg-white h-full flex justify-center items-center"> {/* Add "flex justify-center items-center" */}
    <div className="max-w-sm justify-center bg-white  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-4xl font-poppins tracking-tight text-gray-900 dark:text-violet">Here are some top viewed courses</h5>
      </a>
      <p className="mb-3 font-poppins text-violet dark:text-gray-400">Skills for your present (and your future). Get started with us.Worlds best platform to learn affordable for everyone watch the best classess from best tutors around the world </p>
      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
  <div className="w-1/2 bg-white h-full flex justify-center items-center"> {/* Add "flex justify-center items-center" */}
    <div className="max-w-sm justify-center bg-white  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
     
     <img src="https://i.pinimg.com/564x/ce/8d/a9/ce8da937464e42f071c13a3713d7b3cd.jpg" alt="" />
    </div>
  </div>
  
</section>
    </div>
  )

}

export default index
