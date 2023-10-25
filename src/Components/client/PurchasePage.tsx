import React ,{useEffect, useState}from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetCourseById, GetCourseByTutor } from '../../Services/client/allCourse';
import {  Course, Payment, tutorType } from '../../Models/Models';
import { category } from '../../Services/client/getCategory';
import { tutorById } from '../../Services/client/getTutor';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Paypal from './Paypal';
import { CheckingpurchasedOrnot, PurchasedCourses } from '../../Services/client/profile';

import Classlist from './cards/Classlist';
import Coursebytutor from './cards/Coursebytutor';

function PurchasePage() {


   const courseid = useParams()
   const [data,setdata]=useState<Course>()
   const [Id,setCatId] = useState<string>('')
   const [tutor,setTutor] = useState<tutorType|undefined>(undefined)
   const [tutorData,setTutordata] = useState<tutorType>()
   const [CoursesbyTutor,setCoursesByTutor] = useState<Course>()
   const [selectedAmount,setSelectedAmount] = useState<string>('')
   const [showPayPalButton,setShowPayPalButton] = useState<boolean>(false)
   const [purchased,setPurchased] = useState<Payment|undefined>(undefined)

  const initialOptions = {
  clientId:
    "AXyOernoamZGG9bopEBt3cvNUAGRzcCJ4kLh65BaSdKf67KJAHM990jd0-JVFCC8gLK14B1Rvhz8JvB7",
  currency: "USD",
  intent: "capture",
     };
   
   const id = courseid.id as string
   console.log(id,'current coureseid');
   console.log(tutor,'tutor id is hreere');
   const tutorid = tutor?._id as string
   
   
  useEffect(()=>{
    const coursedetails = async()=>{
      try {
        const resonse = await GetCourseById(id)
        console.log(resonse.singleCourse.category,'single course category');

        setCatId(resonse.singleCourse.category)
        setdata(resonse.singleCourse)
        setTutor(resonse.singleCourse.tutor)
      } catch (error) {
        
      }
    }
    
    coursedetails()
  },[])
 
  useEffect(()=>{
    const catDetails = async()=>{
      try {
        
        const res = await category(Id)
        console.log(res,'category is here');
        
      } catch (error) {
        
      }
    }
    catDetails()
  },[])

  useEffect(() => {
    const allCourse = async () => {
      try {
        const response = await GetCourseByTutor(tutor?._id);
        console.log(response);
        setCoursesByTutor(response.response); 
      } catch (error) {
        console.error(error);
      }
    };
    allCourse();
  }, [tutor]);

  // useEffect(() => {
  //   const tutorDetails = async () => {
  //     try {
  //       if (tutor) {
  //         const res: tutorType | undefined = await tutorById(tutor);
  //         console.log(res, 'tutor data');
  //         setTutordata(res);
  //       } else {
         
  //         console.error('Tutor ID is not available');
  //       }
  //     } catch (error) {
       
  //       console.error('Error fetching tutor data:', error);
  //     }
  //   };
  //   tutorDetails();
  // }, [tutor]);

  const handlePayment = (amount: string) => {
    setShowPayPalButton(true);
    setSelectedAmount(amount);
  }

  useEffect(()=>{
    const purchasedDetails =async()=>{
      try {
        
        const purchasedDetails = await PurchasedCourses()
        console.log(purchasedDetails,'purchased edetails are here');
        
      } catch (error) {
        
      }
    }
    purchasedDetails()
    },[])

    useEffect(()=>{
      const checkingpurchasedornot = async()=>{
        try {
          console.log(id,'we got course id');
          
          const coursepurchased = await CheckingpurchasedOrnot(id)
          setPurchased(coursepurchased)
          
        } catch (error:any) {
          console.log(error,'sdfdsfsdfsdfasdfsadfasfdsadf');
          
        }
      }
      checkingpurchasedornot()
    },[])
 
   
  return (
    <div>
       <div>
      

<section className="signUp ">
        <div className="container_login"  style={{ marginTop: "30px", width:'90%'}}>
          <div className="signUp-content">
          <div className="signUp-image">
  <figure>
    <img
      className='rounded-xl w-96 h-60 object-cover'
      src={data?.image}
      alt="profile image"
    />
  </figure>
  <div className="flex flex-col mt-20 ml-10 gap-3 w-1/2 cursor-pointer"  > 
 {data && Array.isArray(data.classes)&& data.classes.length>0?(
  data.classes.map((classItem,index)=>(

  
   < Classlist classItem={classItem}/>
 
 ))
 ):(
  <p>no classes available</p>
 )}

  </div>
         <div className='mt-5 '>
                <div className='w-[600px]'>
                   
                    
                    <div className=" relative shadow rounded-lg flex justify-center items-center  w-full">
                    <div className="">
                     <Link to={`/tutorprofile/${tutor?._id}`}>
                      <img alt="..." src="https://i.pinimg.com/474x/85/25/83/852583511c3109d7a4efa0c3a233be1e.jpg" className="rounded-full mx-auto absolute -ml-24 mt-3  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                      </Link>
                    </div>
                </div>       
                    <h3 className='text-lg font-semibold  mt-48'>{tutor?.name}</h3>
                    <h3 className='text-lg font-bold text-grey'>About Me:</h3>
                    <p className='mt-11 text-sm text-center overflow-hidden'>{tutor?.aboutme}</p>
                </div>
            </div>
            </div>
            <div className="signUp-form">
              <h2 className="form-title text-lavender ">COURSE DETAILS</h2>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <p className="profile-field"><p className='font-bold'>TITLE :</p>{data?.title}</p>
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <p className="profile-field"><p className='font-bold'>DESCRIPTION :</p> {data?.description}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <p className="profile-field"><p className='font-bold'>LEVEL :</p>{data?.level}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <p className="profile-field text-deepblue font-semibold">PRICE ₹{data?.coursefee}</p>
              </div>
              <div>
  {showPayPalButton ? (
    <PayPalScriptProvider options={initialOptions}>
      <Paypal Amount={selectedAmount} courseid={id} tutorid={tutorid} />
    </PayPalScriptProvider>
  ) : purchased ? (
    <Link to={`/coursePlaylist/${id}`}> <button
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      className="block text-white bg-midnight hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Watch now
    </button></Link>
  ) : (
    <button
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      className="block text-white bg-midnight hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      onClick={() => handlePayment(data?.coursefee ?? "")}
    >
      BUY NOW
    </button>
             )}
          </div>
                  <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email "></i>
                </label>
                <p className="profile-field text-deepblue font-semibold mt-44">More couses By Tutor</p>
           </div>
              <div className="flex flex-col mt-2  w-1/2 cursor-pointer">
       {Array.isArray(CoursesbyTutor) && CoursesbyTutor.length > 0 ? (
         CoursesbyTutor.map((classItem, index) => (
           <Coursebytutor classItem={classItem}/>
         ))
             ) : (
                <p>No classes available</p>
         )}
       </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default PurchasePage
