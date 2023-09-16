import React, { FormEvent, useEffect, useState } from 'react'
import { tutorType } from '../../Models/Models'
import { ViewProfile, setProfile } from '../../Services/tutor/TutorLogin'
import Sidebar from './Sidebar'





const  Profilee:React.FC=()=> {

    const [tutorData, setTutorData]=useState<tutorType|undefined>(undefined)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [qualification,setQualification]= useState<string>('')
    const [experience, setExperience] = useState<string>('')
    const [about,setAbout]= useState<string>('')

    const SetupProfile = async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      try {
             console.log(qualification,experience,'experience and qualification');
             
        const updatedProfile = await setProfile(qualification,experience,about)
        
        if (updatedProfile) {
          toggleModal()
          getTutor();
        }
      } catch (error) {
        
      }
    }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
    useEffect(()=>{
        const getTutor = async()=>{
           
                const tutor = await ViewProfile()

                console.log(tutor);
                setTutorData(tutor)
                
           
        }
        getTutor();
    },[])

    



  return (
    <div>
    <Sidebar/>
      
    <section className="signUp ml-20">
        <div className="container_login" style={{ marginTop: "30px" }}>
          <div className="signUp-content">
            <div className="signUp-image">
              <figure>
                <img className='rounded-xl' src="https://i.pinimg.com/474x/a7/80/80/a7808059330f062de8a90e844d0558d1.jpg" alt="profile image" />
              </figure>
            </div>
            <div className="signUp-form">
              <h2 className="form-title text-lavender">PROFILE</h2>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <p className="profile-field">Name: {tutorData?.name}</p>
              </div>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <p className="profile-field">Email: {tutorData?.email}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <p className="profile-field">Phone: {tutorData?.phone}</p>
              </div>
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="block text-white bg-deepblue hover:bg-violet focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={toggleModal}
              >
                Setup Profile
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* about section */}
      {tutorData?.aboutme && (
        <section className="signUp ml-20">
          <div className="container_login" style={{ marginTop: "30px" }}>
            <div className="signUp-content">
              <div className="signUp-form">
                <h2 className="form-title text-lavender">About me</h2>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <p className="profile-field"><h3>About me:</h3> {tutorData.aboutme}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="relative bg-deepblue rounded-lg shadow-lg dark:bg-gray-700 w-3/6">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-grey dark:hover:text-grey"
              onClick={toggleModal}
            >
              {/* Close button icon */}
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Setup Profile</h3>
              <form className="space-y-6" action="#" onSubmit={SetupProfile}>
                <div>
                  <label htmlFor="qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    placeholder="Qualification"
                    value={qualification} onChange={(e)=>{setQualification(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    placeholder="Experience"
                    value={experience} onChange={(e)=>{setExperience(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                  <input
                    type="text"
                    name="about"
                    id="about"
                    placeholder="About you"
                    value={about} onChange={(e)=>{setAbout(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
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


export default Profilee
function getTutor() {
  throw new Error('Function not implemented.')
}

