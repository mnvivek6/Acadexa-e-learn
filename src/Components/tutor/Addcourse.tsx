import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Allcourse, Category, CreateCourse } from '../../Services/tutor/Addcourse'
import { CategoryType, Course } from '../../Models/Models'

import Coursecard from './listitems/Coursecard'

function Addcourse() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [coursefee, setCoursefee] = useState<string>('')
  const [duration, setDuration] = useState<string>('')
  const [level, setLevel] = useState<string>('')
  const [category, setCategory] = useState<CategoryType[]>([]) // Initialize as an empty array
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [addedcourse , setAddedCourse] = useState<Course[]>()
     
  const [fileUrl, setUrl] = useState<string>('')
  console.log(fileUrl,'image string');
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      console.log(file,'img file got at handle filechange');
      
      generateUrl(file)
    } else {
      console.log("nulll");
    }
  }

  const createCourse = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log(title, description, coursefee, duration, level, 'here we got the form datas');
      const newCourse =await CreateCourse(title, description, coursefee, duration, level,selectedCategory,fileUrl)

      if (!newCourse) {
        throw new Error("something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const allcategory = async () => {
      try {
        const categories = await Category()
        console.log(categories.message);
        setCategory(categories.message)
      } catch (error) {
        console.error(error);
      }
    }
    allcategory()
  }, [])

  useEffect(() => {
    console.log(category, "ertgyewrtyertyew4rty");
  }, [category])

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

  useEffect(()=>{
    const getCourse = async()=>{
     
      
      try {
        
        const Course = await Allcourse()
       
        setAddedCourse(Course.message)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getCourse()
  },[])
 const handileId=(Id:string|undefined)=>{
  
 }

  return (
    <div>
      <Sidebar />
      <section className="signUp ml-20">
        <div className="container_login" style={{ marginTop: "30px" }}>
          <div className="signUp-content">
            <div className="signUp-form">
              <h2 className="form-title text-lavender">Add Course</h2>
              <form className="space-y-6" action="#" onSubmit={createCourse}>
                <div>
                  <input type="text"
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
                    type="textarea"
                    name="description"
                    id="description"
                    value={description} onChange={(e) => { setDescription(e.target.value) }}
                    placeholder="Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                    <div>
            <select
                  name="level"
                     id="level"
                     value={level} onChange={(e)=>{setLevel(e.target.value)}}
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                      required >
                         <option  className='text-gray-900' selected>
                           Select the level of your course
                         </option>
                         <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                   </select>
               </div>
                <div>
                  <select
                    name="Category"
                    id="category"
                    
                    onChange={(e) => {setSelectedCategory(e.target.value)}}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {category.map((Category) => (
                      <option  value={Category.name}>
                        {Category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    name="coursefee"
                    id="coursefee"
                    value={coursefee} onChange={(e) => { setCoursefee(e.target.value) }}
                    placeholder="Enter the course package"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="coursefee"
                    id="coursefee"
                    value={duration} onChange={(e) => { setDuration(e.target.value) }}
                    placeholder="Enter course duration"
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
                  SAVE DATA
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center gap-5">
      
{addedcourse?.map((course, index) => (
  
  <Coursecard course={course}/>

  ))}
</div>
    </div>
  )
}

export default Addcourse
