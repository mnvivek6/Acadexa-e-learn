import React, { FormEvent, useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Createcategory, getCategory } from '../../Services/admin/addcategory'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

import { CategoryType } from '../../Models/Models'




function Addcategory() {

const [categoryName,SetCategoryname] = useState<string>('')
const [description,setDescription] = useState<string>('')
const [fileUrl,setUrl] = useState<string>('')
const [categoryData, setcategoryData] = useState<CategoryType[]|undefined>(undefined)


const handleFileChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]
  if (file) {
    generateUrl(file)
  } else {
    console.log("nulll");

  }
})
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
      
    }
    console.log("");
    return data.url

  }
  catch (error) {
    console.log(error);

  }


}

useEffect(()=>{
  const getcategory = async()=>{
    try {
    const category = await getCategory()
    console.log(category.message,'get in frontend');
    setcategoryData(category.message)
    

    } catch (error) {
      console.log(error);
      
    }
  }
  getcategory()
},[])

const CreateCategory = async(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  try {
    console.log(categoryName,description);
    
    const newCategory = await Createcategory(categoryName,description,fileUrl)

    if (newCategory) {
      toast.success('🦄 Added successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  } catch (error:any) {
    toast.error('🦄 Please wait something went wrong!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
}

  return (
    <div>
      <Sidebar/>
      <section className="signUp ml-20">
  <div className="container_login" style={{ marginTop: "30px" }}>
    <div className="signUp-content">
      <div className="signUp-form">
        <h2 className="form-title text-lavender">Add Category</h2>
        <form className="space-y-6" action="#" onSubmit={CreateCategory}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Category name"
                value={categoryName} onChange={(e)=>{SetCategoryname(e.target.value)}}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                required
              />
            </div>
            <div>
             
              <input
                type="text"
                name="description"
                id="description"
                placeholder="description"
                value={description} onChange={(e)=>{setDescription(e.target.value)}}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                required
              />
            </div>
          </div>
          <div>
           
            <input
              type="file"
              name="image/*"
              id="image"
              onChange={handleFileChange}
              placeholder="drage your image here"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full text-white bg-violet hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Category
          </button>
          <ToastContainer/>
        </form>
      </div>
    </div>
  </div>
</section>
<section className="signUp ml-20">
{categoryData && Array.isArray(categoryData) ? (
    categoryData.map((Categoryy: CategoryType, index: number) => (
      <div className="flex flex-col justify-center h-full">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img
            src={Categoryy.image}
            alt="tailwind logo"
            className="rounded-xl"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
           
            
            <div className="">
             
            </div>
           
          </div>
          <h5 className="font-black text-gray-800 ">{Categoryy.name}</h5>
          <p className="md:text-lg text-gray-500 text-base">
            {Categoryy.description}
          </p>
         
        </div>
      </div>
    </div>
          ))
          ) : (
            <p>No category data available.</p>
          )}
      </section>
    
    </div>
  )
}

export default Addcategory
