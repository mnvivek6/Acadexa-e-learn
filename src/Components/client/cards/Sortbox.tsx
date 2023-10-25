import React from 'react'

function Sortbox() {
  return (
    <div className=" w-52 p-4 pl-3 bg-white  border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-grey">Sort List</h5>
        <div>
         
        </div>
        <div>
         
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-grey rounded bg-grey focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
          </div>
        </div>
    
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          {/* Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a> */}
        </div>
      </form>
    </div>
  )
}

export default Sortbox
