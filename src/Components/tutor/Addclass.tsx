import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom'
import { SigleCourse } from '../../Services/tutor/Addcourse';


function Addclass() {
    const courseId = useParams()
    console.log(courseId.courseid,'courses id is here');

    useEffect(()=>{
        const course = SigleCourse()
    })
    
  return (
    <div>
      <Sidebar/>
      <section className="signUp ml-20">
        <div className="container_login" style={{ marginTop: "30px" }}>
          <div className="signUp-content">
            <div className="signUp-form">
              <h2 className="form-title text-lavender">Add class</h2>
              <form className="space-y-6" action="#" >
              <div>
                 <img className='rounded-lg h-60 w-60' src="https://i.pinimg.com/474x/c0/c2/90/c0c2904684db0273eacd7549ef1073f5.jpg" alt="" />
                </div>
                <div>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <input
                    type="textarea"
                    name="description"
                    id="description"
                    
                    placeholder="Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                    <div>
            <select
                  name="level"
                     id="level"
                    
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                      required
                       >
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
                    
                  
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                   
                      <option  >
                       
                      </option>
                   
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    name="coursefee"
                    id="coursefee"
                    
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
                   
                    placeholder="Enter course duration"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="image/*"
                    id="image"
                  
                    placeholder="add Course tumbnail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
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
    </div>
  )
}

export default Addclass
