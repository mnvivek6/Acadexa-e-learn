import React,{FormEvent, useEffect,useState} from 'react'
import { EditProfile, PurchasedCourses, ViewProfile } from '../../Services/client/profile'
import { Course, Payment, UserType } from '../../Models/Models'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Profilecoursecard from './cards/Profilecoursecard';


function Profile() {

  
  const [userdata,setUserData] = useState<UserType|undefined>(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name,setName] =useState<string|undefined>()
  const[email, setEmail]=useState<string>("")
  const[password ,setPassword]=useState<string>('')
  const[phone ,setPhone]=useState<string>('')
  const [fileUrl, setUrl] = useState<string>('')
  const [courses,setCourses] = useState<Payment[]|null>(null)
  console.log(courses,'set coursees');
  
  useEffect(()=>{

    const getProfile = async()=>{

      try {
        const user = await ViewProfile()
        setUserData(user)
      } catch (error) {
        
      }
    }
    getProfile()
  },[])
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      console.log(file,'img file got at handle filechange');
      
      generateUrl(file)
    } else {
      console.log("nulll");
    }
  }
  
  const newProfile = async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    try {
      
      console.log(name,email,phone,password,fileUrl);
      const Profile = await EditProfile(name,email,phone,fileUrl)
      console.log(Profile,'profile from backend');
      
      
    } catch (error) {
      
    }
  }


  const generateUrl = async (img: File) => {
    try {
      console.log()
      const datas = new FormData()
      console.log(datas,'form data file here');
      
      datas.append('file', img)
      datas.append('upload_preset', 'e-learn')
      datas.append('cloud_name', 'dfrh4b8nq')
      console.log("hereeee????");

      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dfrh4b8nq/image/upload", datas
      )

      setUrl(data.url)

      console.log("urls:", data);
      if (data.url) {
        
      }
      console.log("hahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
      return data.url
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try {
        const data = await PurchasedCourses();
        console.log(data, 'purchased courses'); 
          setCourses(data); 
       
      } catch (error) {
        console.error('Error fetching purchased courses:', error);
      }
    };

    fetchPurchasedCourses();
  }, []);

  
  return (

    <div>
     
<section className="signUp ">
        <div className="container_login" style={{ marginTop: "30px", width:'90%'}}>
          <div className="signUp-content">
            <div className="signUp-image " style={{width:'25%'}}>
              
                <img className='rounded-xl h-52' src={userdata?.image} alt="profile image" />
            
            </div>
            <div className="signUp-form " style={{marginLeft:'0px',paddingLeft:'0px'}}>
              <h2 className="form-title text-lavender">PROFILE</h2>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <p className="profile-field">Name:{userdata?.name} </p>
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <p className="profile-field">Email:{userdata?.email} </p>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <p className="profile-field">Phone: {userdata?.phone}</p>
              </div>
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="block text-white bg-deepblue hover:bg-violet focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={()=>{setIsModalOpen(true)}}
              >
                Setup Profile
              </button>
            </div>

            <div className='w-3/5 mt-5  '>
            {/* course card  */}
            <h3 className="font-black text-grey">Enrolled Courses</h3>
            <div className='flex flex-wrap gap-2'>
            
            {/* Render purchased courses here */}
            {courses && courses.length > 0 ? (
              courses.map((paymentItem:Payment, index) => (
                <Profilecoursecard paymentItem={paymentItem}/>
              ))
            ) : (
              <div>
              <img src="https://i.pinimg.com/474x/fd/d0/96/fdd0969981f34ca3396014818aa77c24.jpg" className='w-60' alt="" />
              <Link to={'/index'}>Explore More</Link>
              </div>
            )}
          </div>

    {/* course card  */}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 w-3/6">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              // onClick={toggleModal}
              onClick={()=>{setIsModalOpen(false)}}
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"/>
  </svg>
              {/* Close button icon */}
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-lavender">Setup Profile</h3>
              <form className="space-y-6" action="#"onSubmit={newProfile} >
                
                <div>
                  <label htmlFor="qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter new name"
                    value={name} onChange={(e)=>{setName(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter new email"
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter new number"
                    value={phone} onChange={(e)=>{setPhone(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                
                <div className='form-group'>
                  {fileUrl?(
                        <div className='' >
                          {/* <video src={fileUrl}></video> */}
                          <img className="ml-24  w-[200px] p-5 mb-20 pt-1" src={fileUrl} alt="" />
                          <div className='text-center'>
                            <label>
                              <input type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
                                                
                              {/* <p className="ml-44 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your com */}
                              <div className="absolute pt-4 pl-4 inset-0 flex items-center justify-center">
                              <svg className="w-6 h-6 text-gray-800 dark:text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
  </svg>
                              </div>
                            </label>
                          </div>
                               
                                
                        </div>
                  ):(
                    <div className=' w-full mt-10 p-10 bg-cover flex justify-end' >

                   
                         <div className='text-center'>
                           <label>
                             <input type="file" accept="image" name="image" className="hidden" multiple onChange={handleFileChange} />
                             <div  >
                               <img className="ml-24  w-[200px] p-5 mb-20 pt-10" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="video" />
                             </div>
                             {/* <p className="ml-44 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p> */}
    
                           </label>
                         </div>
 
                    </div>
                  )}
             
                </div>
                
                <button
                  type="submit"
                  className="w-full text-white bg-violet hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    SAVE DATAS
                </button>
              </form>
            </div>
          </div>
        </div>
       )} 
    </div>
  )
}

export default Profile
