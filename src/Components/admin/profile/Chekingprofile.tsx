import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DeclineVerification, getTutorbyid, verifyTutor } from '../../../Services/admin/getTutors';
import { tutorType } from '../../../Models/Models';
import { ToastContainer, toast } from 'react-toastify';

function Chekingprofile() {

    const id = useParams()
    const navigate = useNavigate()
    console.log('tutor id is here',id.id);
    const tutorid = id.id as string
    const [tutor,setTutor] = useState<tutorType|undefined>(undefined)
    
   
    
     useEffect(()=>{
        const gettutor = async()=>{
            try {
                const res = await getTutorbyid(id.id)
                console.log('tutorby id:',res);
                setTutor(res)
            } catch (error) {
                
            }
        }
        gettutor()
     },[tutorid])

     const verify =async(tutorid:string|undefined,tutoremail:string|undefined,tutorname:string|undefined)=>{
         const response = verifyTutor(tutorid,tutoremail,tutorname)
         console.log(response,'respnose from the admin');
         toast.success('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
         
     }
     const descline =(tutoremail:string|undefined,tutorname:string|undefined)=>{
      const response = DeclineVerification(tutoremail,tutorname)
      toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      
      
     }
    
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black  ">
    <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 w-3/6">
    <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          onClick={() => navigate('/admin/dashboard')}
        >
          <svg
            className="w-6 h-6 text-grey dark:tex-grey"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 15"
          >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"/>
          </svg>
        </button>
      <div className="px-6 py-6 lg:px-8">

        <h3 className="mb-4 text-xl  font-bold text-gray-900 dark:text-lavender">Verification Data</h3>
        <form className="space-y-6" action="#" >
         
          <div className="flex space-x-4">
            
            <div className="flex-1">
            <p className="text-sm text-gray-600 dark:text-lavender">Qualification</p>
              <p>{tutor?.qualification}</p>
            </div>
            <div className="">
            <p className="text-sm text-gray-600 dark:text-lavender">Experience</p>
              <div className="flex space-x-2">
                <div className="flex flex-col">
               
                 <p>Year:{tutor?.experience?.year}</p>
                </div>
                <div className="flex flex-col">
                  {/* <label className="text-sm text-gray-600 dark:text-lavender">Months of Experience</label> */}
                  <p> Months: {tutor?.experience.month}</p>
                </div>
              </div>
            </div>
            </div>
        <div className="">
        <p className="text-sm text-gray-600 dark:text-lavender">Name  :</p>
        <p>{tutor?.name}</p>
        <p className="text-sm text-gray-600 dark:text-lavender">Email  :</p>
        <p>{tutor?.email}</p>
        <p className="text-sm text-gray-600 dark:text-lavender">Phone  :</p>
        <p>{tutor?.phone}</p>
       

        </div>
        <p className="text-sm text-gray-600 dark:text-lavender">Certificate</p>
        <div className='form-group border border-lavender rounded-md'>

  <div className='w-full mt-10 p-10 bg-cover flex justify-end'>
<div className='text-center'>
  <label htmlFor="imageUpload">
  
    
    <div className="flex flex-col items-center"> 
      <img className=" w-full p-5" src={tutor?.certificate} alt="certificates" />
      <p className="ml-44 text-sm text-grey">
       
      </p>
    </div>
  
  </label>
</div>
</div>

</div>
<div className="flex justify-center space-x-4">
  <button type="button" className="focus:outline-none text-white bg-green hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover-bg-purple-700 dark:focus:ring-purple-900" onClick={()=>verify(tutor?._id,tutor?.email,tutor?.name)}>
    Verify
  </button>
  <button type="button" className="focus:outline-none text-white bg-red hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover-bg-purple-700 dark:focus:ring-purple-900" onClick={()=>descline(tutor?.email,tutor?.name)}>
  Decline
  </button>
  {/* <button type="button" className="focus:outline-none text-white bg-purple hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover-bg-purple-700 dark:focus:ring-purple-900">
    
  </button> */}
</div>
      </form>
      <ToastContainer/>
    </div>
  </div>
</div>
  )
}

export default Chekingprofile
