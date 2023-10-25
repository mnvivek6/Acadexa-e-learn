import React from 'react'
import { UserType } from '../../../Models/Models'
import { useNavigate } from 'react-router-dom'


interface Tabledata{
    userData?:UserType[]|null
   
}
const PurchasedUsers:React.FC<Tabledata>=({userData})=> {
  const navigate = useNavigate()
  return (
    <div>
       <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 mr-9 mt-7 ">
        <div className="overflow-y-hidden rounded-lg pt-2 ml-1 bg-greylight ">
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
             {userData?.map((user:UserType,index:number)=>(
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
                        <p className="whitespace-no-wrap text-grey">{user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className=" border-gray-200 bg-white px-1 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.email}</p>
                  </td>
                  <td className=" border-gray-200 bg-white px-1 py-5 text-sm">
                    <p className="whitespace-no-wrap">{user.phone}</p>
                  </td>
                  
                  <td className="border-gray-200 bg-white px-1 py-5 text-sm">
                  <p className="whitespace-no-wrap text-grey">
                {user.isMailvarified ? true : false}
                 </p>
                </td>
                  <td className=" border-gray-200 bg-white px-1 py-5 text-sm">
                   
                  <td className="border-b border-gray-200 bg-white px-1 py-5 text-sm">
            <button
               className={`rounded-full bg-greylight px-3 py-1 text-xs font-semibold text-white `}
               onClick={()=>navigate(`/tutor/chatwithusers/${user?._id}`)} >
                    Connect
                  </button>
                 </td>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center  bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to{userData?.length || 0}  of Entries </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full  text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
            <button className="h-12 w-12 rounded-full  text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PurchasedUsers
