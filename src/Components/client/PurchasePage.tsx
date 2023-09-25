import React ,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import { GetCourseById, GetCourseByTutor } from '../../Services/client/allCourse';
import { CategoryType, Course, tutorType } from '../../Models/Models';
import { category } from '../../Services/client/getCategory';
import { tutorById } from '../../Services/client/getTutor';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Paypal from './Paypal';
import { TypeOfTag } from 'typescript';


function PurchasePage() {


   const courseid = useParams()
   const [data,setdata]=useState<Course>()
   const [Id,setCatId] = useState<string>('')
   const [tutor,setTutor] = useState<string>('')
   const [tutorData,setTutordata] = useState<tutorType>()
   const [CoursesbyTutor,setCoursesByTutor] = useState<Course>()
   console.log(CoursesbyTutor,'col,kpourse by tutor here');
   
  
   
   const [selectedAmount,setSelectedAmount] = useState<string>('')
   console.log(selectedAmount,'suna vannu');
   
   const [showPayPalButton,setShowPayPalButton] = useState<boolean>(false)

console.log(tutor,' tutor id is here');


const initialOptions = {
  clientId:
    "AXyOernoamZGG9bopEBt3cvNUAGRzcCJ4kLh65BaSdKf67KJAHM990jd0-JVFCC8gLK14B1Rvhz8JvB7",
  currency: "USD",
  intent: "capture",

};
   
   const id = courseid.id 
   
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
        // const response = await tutorById(tutor)
        // console.log(response,'tutor details got here');
        // 
      } catch (error) {
        
      }
    }
    catDetails()
  },[])

  useEffect(() => {
    const allCourse = async () => {
      try {
        const response = await GetCourseByTutor(tutor);
        console.log(response);
        setCoursesByTutor(response.response); 
      } catch (error) {
        console.error(error);
      }
    };
    allCourse();
  }, [tutor]);

  useEffect(() => {
    const tutorDetails = async () => {
      try {
        if (tutor) {
          const res: tutorType | undefined = await tutorById(tutor);
          console.log(res, 'tutor data');
          setTutordata(res);
        } else {
         
          console.error('Tutor ID is not available');
        }
      } catch (error) {
       
        console.error('Error fetching tutor data:', error);
      }
    };
    tutorDetails();
  }, [tutor]);

  const handlePayment = (amount: string) => {
    setShowPayPalButton(true);
    setSelectedAmount(amount);
  }
 
   
  return (
    <div>
       <div>
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
      <a href="#">Profile</a>
      <a href="#">Privacy and Policy</a>
      
      
    </div>
  </div>
</header>

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

  
    <div className=" flex  items-center shadow-md justify-center  bg-white p-1 rounded-lg motion-safe:hover:scale-110 transition-[2s] w-96 mr-10">
      <div className="w-full md:w-1/3 bg-white grid place-items-center  ">
       <video src={classItem.video} controls className='rounded-s '></video>
      </div>
      <div className="w-full flex flex-col items-center justify-center   bg-white p-2 ">
       
        <h3 className="font-black text-gray-800 ">{classItem.title}</h3>
        <p className="md:text-xs text-gray-500 text-base overflow-hidden max-h-11">{classItem.description}</p>
      </div>
    </div>
 
 ))
 ):(
  <p>no classes available</p>
 )}
    {/* Third Card */}
    
    {/* End of Stacked Vertical Cards*/}
  </div>



         <div className='mt-5 '>
                <div className='w-[600px]'>
                    {/* <h4 className='text-lg font-semibold mb-5'>Tutor</h4> */}
                    {/* <h1 className='text-xl text-teal-600 font-bold'>regerger</h1> */}
                    
                    <div className=" relative shadow rounded-lg flex justify-center items-center  w-full">
                    <div className="">
                      
                      <img alt="..." src="https://i.pinimg.com/474x/85/25/83/852583511c3109d7a4efa0c3a233be1e.jpg" className="rounded-full mx-auto absolute -ml-24 mt-3  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
  
                    </div>
                 

                </div>
                {/* <h6 className='text-base font-medium  text-gray-500'>{tutorData?.name}</h6> */}
                
                    
                    <h3 className='text-lg font-semibold  mt-48'>{tutorData?.name}</h3>
                    <h3 className='text-lg font-bold text-grey'>About Me:</h3>
                    <p className='mt-11 text-sm text-center overflow-hidden'>{tutorData?.aboutme}</p>
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
    {showPayPalButton ? ( // Conditionally render based on showPayPalButton
      <PayPalScriptProvider options={initialOptions}>
        <Paypal Amout={selectedAmount} />
      </PayPalScriptProvider>
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
  {CoursesbyTutor && CoursesbyTutor.length > 0 ? (
    CoursesbyTutor.map((classItem, index) => (
      <div
        key={index}
        className="flex items-center shadow-md justify-center bg-white p-1 rounded-lg transform hover:scale-110 transition-transform duration-200 w-96 mr-10 mt-5"
        role="article"
      >
        <div className="w-full md:w-1/3 bg-white flex items-center justify-center">
          {/* <video src={classItem.video} controls className="rounded-lg" aria-label={`Video for ${classItem.title}`} //> */}
          <img src={classItem.image} alt="" />
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-white p-2">
          <h3 className="font-black text-gray-800">{classItem.title}</h3>
          <p className="md:text-xs text-gray-500 text-base overflow-hidden max-h-11">
  {classItem.description}
</p>
        </div>
      </div>
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
