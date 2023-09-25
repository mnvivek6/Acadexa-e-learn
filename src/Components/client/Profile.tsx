import React,{FormEvent, useEffect,useState} from 'react'
import { EditProfile, ViewProfile } from '../../Services/client/profile'
import { UserType } from '../../Models/Models'
import axios from 'axios';


function Profile() {

  
  const [userdata,setUserData] = useState<UserType|undefined>(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name,setName] =useState<string|undefined>()
  const[email, setEmail]=useState<string>("")
  const[password ,setPassword]=useState<string>('')
  const[phone ,setPhone]=useState<string>('')
  const [fileUrl, setUrl] = useState<string>('')
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


  
  return (

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
        <div className="container_login" style={{ marginTop: "30px", width:'90%'}}>
          <div className="signUp-content">
            <div className="signUp-image">
              <figure>
                <img className='rounded-xl h-52' src={userdata?.image} alt="profile image" />
              </figure>
            </div>
            <div className="signUp-form " style={{marginLeft:'0px',paddingLeft:'0px', marginRight:'600px'}}>
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
            <div>
              dsfadfas
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 w-3/6">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-grey ey"
              // onClick={toggleModal}
              onClick={()=>{setIsModalOpen(false)}}
            >
              {/* Close button icon */}
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Setup Profile</h3>
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
                <div>
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Add your image here"
                    onChange= { handleFileChange}
                    // value={about} onChange={(e)=>{setPhone(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
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
