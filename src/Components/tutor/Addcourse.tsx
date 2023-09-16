import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Allcourse, Category, CreateCourse } from '../../Services/tutor/Addcourse'
import { CategoryType, Course } from '../../Models/Models'
import { log } from 'console'
import { Link } from 'react-router-dom'

function Addcourse() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [coursefee, setCoursefee] = useState<string>('')
  const [duration, setDuration] = useState<string>('')
  const [level, setLevel] = useState<string>('')
  const [category, setCategory] = useState<CategoryType[]>([]) // Initialize as an empty array
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [addedcourse , setAddedCourse] = useState<Course[]>()
        console.log(addedcourse,'set state added coursees are here');
        
  const [fileUrl, setUrl] = useState<string>('')
  console.log(fileUrl,'image string');
  
  const [showButton, setShowButton] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      generateUrl(file)
    } else {
      console.log("nulll");
    }
  }

  const createCourse = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      console.log(title, description, coursefee, duration, level, 'here we got the form datas');
      const newCourse = CreateCourse(title, description, coursefee, duration, level,selectedCategory,fileUrl)

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
        setShowButton(true)
      }
      console.log("hahahahahahahahahahahahahahahahahahahahahahahahahahahaha");
      return data.url
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    const getCourse = async()=>{
      console.log('shunni nameer');
      
      try {
        
        const Course = await Allcourse()
        console.log(Course,'courses got here');
        setAddedCourse(Course.message)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getCourse()
  },[])
 const handileId=(Id:string|undefined)=>{
  console.log(Id,'hehehhehehhehehehhe');
  
  
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
                <div>
                  <input
                    type="file"
                    name="image/*"
                    id="image"
                   onChange= { handleFileChange}
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


      <div className="flex flex-col justify-center">
      
{addedcourse?.map((course: Course, index: number) => (
    <div
      key={index} // Make sure to provide a unique key for each course
      className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
    >
    <div className="w-full md:w-1/3 bg-white grid place-items-center">
  <Link to={`/tutor/addclasses/${course._id}`}>
    <img
      src={course.image}
      alt={course.title}
      className="rounded-xl"
    />
  </Link>
</div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        {/* Render other course details here */}
        <h3 className="font-black text-gray-800 md:text-3xl text-xl">{course.title}</h3>
        <p className="md:text-lg text-gray-500 text-base">{course.description}</p>
       
      </div>
    </div>
  ))}
</div>


    </div>
  )
}

export default Addcourse
