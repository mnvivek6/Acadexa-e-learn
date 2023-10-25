import axios from 'axios'
import { url } from 'inspector'
import React, { FormEvent, useState } from 'react'
import { editCourse } from '../../../Services/admin/addcategory'

interface EditCatProps{
    showModal:boolean
    setShowModal:(showModal:boolean)=>void
    categoryname:string
    categorydescription:string
    categoryimage:string
    categoryid:string
}


const  Editcategor:React.FC<EditCatProps>=({showModal,setShowModal,categoryname,categorydescription,categoryimage,categoryid})=> {

    const [fileUrl, setUrl] = useState<string>('')
    const [name,setName] = useState<string>('')
    const [description,setDescription] = useState<string>('')

    
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      generateUrl(file)
    } else {
      console.log("nulll");
    }
  }
  const editedCourse = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    try {
        
        console.log(name,description);
        const res = await editCourse(name,description,fileUrl,categoryid)
    } catch (error) {
        
    }
  }
    const generateUrl = async (img: File) => {
    try {
    const datas = new FormData()
      datas.append('file', img)
      datas.append('upload_preset', 'e-learn')
      datas.append('cloud_name', 'dfrh4b8nq')
      console.log("hereeee????");

      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dfrh4b8nq/image/upload", datas
      )

      setUrl(data.url)
      
      if (data.url) {   
      }
      return data.url
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
    <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 w-3/6">
      <button
        type="button"
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
        onClick={() => setShowModal(false)}>
        <svg className="w-6 h-6 text-grey dark:tex-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"/>
  </svg>
      </button>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Setup Profile</h3>
        <form className="space-y-6" action="#" onSubmit={editedCourse} >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={categoryname}
              value={name} onChange={(e)=>{setName(e.target.value)}}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
              required
            />
          </div>
          <div>
  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
  <textarea
    name="description"
    id="description"
    placeholder={categorydescription}
    value={description} onChange={(e)=>{setDescription(e.target.value)}}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
    required
  />
</div>
<div className='form-group'>
              {fileUrl?(
          <div className='w-60 h-60 p-5 bg-cover flex justify-end' style={{ backgroundImage:` url(${fileUrl})` }}>
          <div className='w-5 h-5 lg:w-7 lg:h-7 rounded-full bg-white '>
          <div className='text-center relative'>
               <label className="cursor-pointer">
                   <input type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />  
                  </label>
            </div>
            </div> 
          </div>
      ):(
        <div className='w-full h-60 p-5 bg-white flex justify-center'>
       <label>
       <input  type="file" accept="image/*" name="image" className="hidden" multiple onChange={handleFileChange} />
       <div className="flex flex-auto  w-3/5 mx-auto -mt-10">
            <img className="has-mask ml-8 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="image"/>
             </div>
         <p className="ml-20 pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
       </label>
        </div> 
      ) }
    </div>       
          <button
            type="submit"
            className="w-full text-white bg-violet hover:bg-lavender focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
              SAVE DATAS
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
export default Editcategor
