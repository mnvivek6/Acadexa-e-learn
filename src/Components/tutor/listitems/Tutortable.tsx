import React from 'react'

function Tutortable({tutors}:any) {
    
  return (
   <>
   <div className=" px-4 py-8 sm:px-8 mt-5 ">
        <div className="overflow-y-hidden rounded-lg pt-2  bg-offgreen ">
          <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Phone</th>
                <th className="px-5 py-3">Verified</th>
               
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
             {tutors?.map((tutor:any,index:number)=>(
                <tr >
                  <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap"></p>
                  </td>
                  <td className=" border-gray-200 bg-white px-1 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-full w-full rounded-full" src="https://i.pinimg.com/474x/a6/58/32/a65832155622ac173337874f02b218fb.jpg" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-grey">{tutor.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className=" border-gray-200 bg-white px-1 py-5 text-sm">
                    <p className="whitespace-no-wrap">{tutor.email}</p>
                  </td>
                  <td className=" border-gray-200 bg-white px-1 py-5 text-sm">
                    <p className="whitespace-no-wrap">{tutor.phone}</p>
                  </td>
                  
                  <td className="border-gray-200 bg-white px-1 py-5 text-sm">
                  <p className="whitespace-no-wrap text-grey">
                {tutor.isMailvarified ? true : false}
                 </p>
                </td>
                  <td className=" border-gray-200 bg-white px-1 py-5 text-sm">
                   
                  <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
           
                 </td>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center  bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to{tutors?.length || 0}  of Entries </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full  text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
            <button className="h-12 w-12 rounded-full  text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Tutortable
