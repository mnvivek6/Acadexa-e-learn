import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import {  useParams } from 'react-router-dom'
import { SigleCourse } from '../../Services/tutor/Addcourse';
import { Course } from '../../Models/Models';
import axios from 'axios';
import { Createclass } from '../../Services/tutor/AddClass';
import * as Yup from 'yup'
import Listclasses from './listitems/Listclasses';

import { ErrorMessage, Field, Form, Formik } from 'formik'



type  initialValueType = {
  title:string,
  description:string
}

function Addclass() {

const initialValues:initialValueType ={
  title:'',
  description:''
}
  
const validationSchema = Yup.object({
  title: Yup.string()
    .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Invalid name format')
    .min(3, 'title must be at least 3 characters')
    .required('Please enter class title'),
  // description: Yup.string()
  //   .min(10, 'description must be at least 10 characters')
  //   .required('Please enter class description')
 })
 
    const courseId = useParams()

    const [courseState ,SetCourseState ] = useState<Course|undefined>()
    console.log(courseState,'course state here');
    
    const [fileUrl, setUrl] = useState<string>('')
    const [videoError, setvideoError] = useState<string|null>(null)
    // const [description,setDescription] = useState<string>('')
  

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
      const file:any = e.target.files?.[0]

      const allowedTypes = ["video/mp4", "video/x-msvideo", "video/quicktime", "video/x-ms-wmv", "video/x-matroska", "video/x-flv", "video/webm"];
    if (!allowedTypes.includes(file?.type)) {
     
      setvideoError("Only mp4,webm videos are allowed.");
      return;
    }
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
        setUrl(data.url)
   
        console.log("urls:", data);
        if (data.url) {
  
        }
       
        return data.url
      } catch (error) {
        console.error(error);
      }
    }
   
    const onSubmit=async (values:initialValueType)=>{
       console.log(values,'values are here');
      
       
      const valueWithImg = {
        ...values,
        video:fileUrl
      }

      try {
       
        const addClass = await Createclass(valueWithImg,id)
        console.log(addClass,'class add to the course successssssss');
        
      } catch (error) {
       console.log(error);
          
      }
      
      }
    
  return (
    
    <Formik
    initialValues={initialValues}
    validationSchema= {validationSchema}
    onSubmit={onSubmit}
 >
    <div>
      <Sidebar/>
      <section className="signUp ml-20">
        <div className="container_login" style={{ marginTop: "30px" }}>
          <div className="signUp-content">
            <div className="signUp-form">
              <h2 className="form-title text-lavender">Add class</h2>
          
              <Form className="space-y-6" action="#">
              <div>
                 <img className='rounded-lg h-60 w-60' src={courseState?.image} alt="" />
                </div>
                <div>
                  <Field
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    // value={title} onChange={(e) => { setTitle(e.target.value) }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                  <ErrorMessage name='title'>
                                       {
                                        (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                                       }    
                                    </ErrorMessage>
                </div>
                <div>
                  <Field
                    type="text"
                    name="description"
                    id="description"
                    // value={description} onChange={(e) => { setDescription(e.target.value) }}
                    placeholder="Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                  <ErrorMessage name='description'>
                                       {
                                        (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                                       }    
                                    </ErrorMessage>
                </div>
                <div className='form-group'>
                  {fileUrl?(
                        <div className=' w-full mt-10 p-10 h-96 bg-cover flex justify-end' >
                          <video src={fileUrl}></video>
                        
                          <div className='text-center'>
                            <label>
                              <input type="file" accept="video/*" name="video" className="hidden" multiple onChange={handleFileChange} />
                                                
                              {/* <p className="ml-44 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your com */}
      
                            </label>
                          </div>
                               
                                
                        </div>
                  ):(
                    <div className=' w-full mt-10 p-10 bg-cover flex justify-end' >

                   
                         <div className='text-center'>
                           <label>
                             <input type="file" accept="video/*" name="video" className="hidden" multiple onChange={handleFileChange} />
                             <div  >
                               <img className="ml-24  w-[200px] p-5 mb-20 pt-10" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="video" />
                             </div>
                             {/* <p className="ml-44 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p> */}
    
                           </label>
                         </div>
 
                    </div>
                  )}
             {videoError && (
            <p className=" text-red text-sm mt-1 ml-20">{videoError}</p>
                  )}
                </div>
               
                <button
                  type="submit"
                  className="w-full text-white bg-violet hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  SAVE DATA
                </button>
                </Form>          
            </div>
          </div>
        </div>
      </section>
      {/* classes */}
      

      <div className="flex flex-col gap-5 justify-center h-20">
  {courseState && Array.isArray(courseState.classes) && courseState.classes.length > 0 ? (
    courseState.classes.map((classItem, index) => (
      <Listclasses classItem={classItem} index={index}/>
    ))
  ) : (
    <p>No classes available</p>
  )}
</div>
    </div>
    </Formik>
  )
}

export default Addclass
