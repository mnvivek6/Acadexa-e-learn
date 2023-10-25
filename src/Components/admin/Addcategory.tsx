import React, {  useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Createcategory, getCategory } from '../../Services/admin/addcategory'
import axios from 'axios'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import { CategoryType } from '../../Models/Models'
import Listcourse from '../tutor/listitems/Listcourse'
import { ErrorMessage, Field, Form, Formik } from 'formik'

type initialValueType ={
  name:string
  description:string
}

function Addcategory() {

  const initialValues:initialValueType={
    name:'',
    description :''
  }
  const validationSchema = Yup.object({
    name:Yup.string().matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Invalid name format')
    .min(3, 'title must be at least 3 characters')
    .required('Please enter name'),
     description: Yup.string() .required('Please enter description')
  })


const [fileUrl,setUrl] = useState<string>('')
const [categoryData, setcategoryData] = useState<CategoryType[]|undefined>(undefined)
const [imageError,setImageError] = useState<string|null>(null)


const handleFileChange = ((e: React.ChangeEvent<HTMLInputElement>) => {

  const file = e.target.files?.[0]
  const allowedImageTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/webp"];
  if (allowedImageTypes.includes(file!.type)) {
    console.log('only image files will comes');
    
    setImageError("Only image files (jpeg, png,bmp, webp) are allowed.")
  }
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
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dfrh4b8nq/image/upload", datas
    )
    setUrl(data.url) 
    if (data.url) {
    }
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
    setcategoryData(category.message)

    } catch (error) {
      console.log(error);  
    }
  }
  getcategory()
},[])
const onSubmit = async(values:initialValueType)=>{
  try {
    const categoryData = {
      ...values,
      image:fileUrl
    }
    const newCategory = await Createcategory(categoryData)

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
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
    <div>
      <Sidebar/>
      <section className="signUp ml-20">
  <div className="container_login" style={{ marginTop: "30px" }}>
    <div className="signUp-content">
      <div className="signUp-form">
        <h2 className="form-title text-lavender">Add Category</h2>
        <Form className="space-y-6" action="#">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>     
            <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Category Name"
                    // value={title} onChange={(e) => { setTitle(e.target.value) }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                    required
                  />
                  <ErrorMessage name='name'>
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
           <p id="errorMessage" className="text-red-500"></p>
          </div>
          
          <button
            type="submit"
            className="w-full text-white bg-violet hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Category
          </button>
          <ToastContainer/>
        </Form>
      </div>
    </div>
  </div>
</section>
<div className="flex flex-col justify-center gap-5"> 
{ 
    categoryData?.map((Categoryy, index) => (
     <Listcourse category={Categoryy}/>
          ))}
      </div>
    </div>
    </Formik>
  )
}

export default Addcategory
