import React, { FormEvent, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom'
import { SigleCourse } from '../../Services/tutor/Addcourse';
import { Course } from '../../Models/Models';
import axios from 'axios';
import { Createclass } from '../../Services/tutor/AddClass';


function Addclass() {
    const courseId = useParams()

    const [courseState ,SetCourseState ] = useState<Course|undefined>()
    console.log(courseState?.classes,'course state here');
    
    const [fileUrl, setUrl] = useState<string>('')

    console.log(fileUrl,'file got hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    
    const [title, setTitle] = useState<string>('')
    const [description,setDescription] = useState<string>('')
  

  
  
   const id:string|undefined = courseId.courseid

    useEffect(()=>{
      const getcourse = async()=>{
        const course = SigleCourse(id)
     
        course.then((res:any)=>{
        
          const  courseData:Course|undefined = res.singleCourse
          
          if (courseData && Array.isArray(courseData.classes)) {
            courseData.classes.map((classItem, index) => {
              console.log(`Class ${index + 1}:`, classItem.video);
            });
          } else {
            console.log("courseData.classes is not an array or courseData is undefined.");
          }
          
          
          
          
          SetCourseState(courseData)
        })
      }
      getcourse();
    },[])
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        console.log(file,'video file got here');
        
        generateUrl(file)
      } else {
        console.log("nulll");
      }
    }

    const generateUrl = async (file: File) => {
      try {
      
        const datas = new FormData() 
        console.log(datas,'file datas are here');
        
        datas.append('file', file)
        datas.append('upload_preset', 'e-learn')
        datas.append('cloud_name', 'dfrh4b8nq')
        console.log("hereeee????");
  
        const { data } = await axios.post( "https://api.cloudinary.com/v1_1/dfrh4b8nq/video/upload", datas)


        console.log(data,'asjdfiauslrergnservslnrusrgnidsjrnervnrjbsfgjbtrhvyjrbgdfdfsfdsfdsfsfdsfsdf');
        
        setUrl(data.url)
   
        console.log("urls:", data);
        if (data.url) {
  
        }
       console.log(data.url,'is here we got one file url');
       
        return data.url
      } catch (error) {
        console.error(error);
      }
    }
    const newClass = async (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      try {
        console.log(title,description,fileUrl);

        const addeddclass = Createclass(title,description,fileUrl,id)
        if (!addeddclass) {
          console.log('didnt get file here');
        }
        console.log(addeddclass,'is herere');
        
        
      } catch (error) {
        
      }
    }
   
    
  return (
    <div>
      <Sidebar/>
      <section className="signUp ml-20">
        <div className="container_login" style={{ marginTop: "30px" }}>
          <div className="signUp-content">
            <div className="signUp-form">
              <h2 className="form-title text-lavender">Add class</h2>
              <form className="space-y-6" action="#" onSubmit={newClass} >
              <div>
                 <img className='rounded-lg h-60 w-60' src={courseState?.image} alt="" />
                </div>
                <div>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={title} onChange={(e) => { setTitle(e.target.value) }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={description} onChange={(e) => { setDescription(e.target.value) }}
                    placeholder="Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="video/*"
                    
                    id="video"
                    onChange={handleFileChange}
                    placeholder="Add classes "
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                  <video src=""></video>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-violet hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  SAVE DATA
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* classes */}

      <div className="flex flex-col justify-center h-screen">
  {courseState && Array.isArray(courseState.classes) && courseState.classes.length > 0 ? (
    courseState.classes.map((classItem, index) => (
      <div
        key={index}
        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
      >
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <video src={classItem.video} controls className='rounded-lg'></video>
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {classItem.title}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
            {classItem.description}
          </p>
          <p className="text-xl font-black text-gray-800">
            {/* Add any other relevant data here */}
            {classItem.price}
            <span className="font-normal text-gray-600 text-base">/night</span>
          </p>
        </div>
      </div>
    ))
  ) : (
    <p>No classes available</p>
  )}
</div>
    </div>
  )
}

export default Addclass
