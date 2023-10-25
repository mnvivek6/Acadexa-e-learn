import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { FormEvent, useState } from 'react'
import * as Yup from 'yup'
import { Verification } from '../../../Services/tutor/TutorLogin'
import { useNavigate } from 'react-router-dom'

interface modaldata {
    showModal:boolean
    setShowModal:(showModal:boolean)=>void
    tutorid:string|undefined
}

type initialValuesType ={
    email:string
    qualification:string
    experience:string
    subject:string
    category:string
}
const VerificationModal:React.FC<modaldata>=({setShowModal,tutorid})=> {
   
  console.log(tutorid,'id');
  
    const navigate = useNavigate()
    const initialValues:initialValuesType ={
        email:'',
        qualification:'',
        experience:'',
        subject:'',
        category:''
    }
    const [fileUrl, setUrl] = useState<string>('')
    const [Qualification,setQualification] = useState<string>('')
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);
    const [waiting,setWaiting] = useState(false)

  const handleYearsChange = (e:any) => {
    setYears(e.target.value);
  };

  const handleMonthsChange = (e:any) => {
    setMonths(e.target.value);
  };
  console.log(years,months);
  
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Please enter your email'),
        qualification: Yup.string().required('Qualification is required'),
        experience: Yup.string().required('Please enter your experience'),
        subject: Yup.string().required('Please specify your area of expertise'),
        category: Yup.string().required('Please select your sector')
      });

      const onSubmit = (values:any)=>{
        console.log(values,'datas are here');
        
      }
      const [selectedCategory, setSelectedCategory] = useState('');
      const categories = ['Cooking', 'Music', 'Tech', 'General Knowledge','Fashion'];
      
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
          console.log(file,'img file got at handle filechange');
          
          generateUrl(file)
        } else {
          console.log("nulll");
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
      const editedCourse = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    
        try {
            
            console.log('datas are here',Qualification,selectedCategory,fileUrl,months,years);
            const verificationData ={
              Qualification : Qualification,
              selectedCategory : selectedCategory,
              fileUrl : fileUrl,
              months : months,
              years : years
            }
            const res = await Verification(verificationData,tutorid)
            console.log(res,'from backend');
            if(res){
               setShowModal(false)
               navigate('/tutor/submitionsuccess')
            }
          
        } catch (error) {
            
        }
      }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 w-3/6">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <svg
            className="w-6 h-6 text-grey dark:tex-grey"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 15"
          >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"/>
          </svg>
        </button>
        <div className="px-6 py-6 lg:px-8">

          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-laven">Setup Profile</h3>
          <form className="space-y-6" action="#" onSubmit={editedCourse}>
           
            <div className="flex space-x-4">
              
              <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-lavender">Qualification</p>
                <input
                  type="text"
                  name="Qualification"
                  id="Qualification"
                  value={Qualification}
                  placeholder="Qualification"
                  onChange={(e) => {
                    setQualification(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                  required
                />
              </div>
              <div className="">
              <p className="text-sm text-gray-600 dark:text-lavender">Experience</p>
                <div className="flex space-x-2">
                  <div className="flex flex-col">
                 
                    <input
                      name="experienceYears"
                      id="experienceYears"
                      placeholder="Years"
                      value={years}
                      onChange={handleYearsChange}
                      className="w-16 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* <label className="text-sm text-gray-600 dark:text-lavender">Months of Experience</label> */}
                    <input
                      name="experienceMonths"
                      id="experienceMonths"
                      placeholder="Months"
                      value={months}
                      onChange={handleMonthsChange}
                      className="w-16 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
                      required
                    />
                  </div>
                </div>
              </div>
              </div>
          <div className="">
          <p className="text-sm text-gray-600 dark:text-lavender">Category</p>
            <select
              name="category"
              id="category"
              placeholder=''
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue block w-full p-2.5 dark:bg-gray dark:border-gray-500 dark:placeholder-gray-400 dark:text-lavender"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            
          </div>
          <p className="text-sm text-gray-600 dark:text-lavender">Certificate</p>
          <div className='form-group border border-lavender rounded-md'>
         
  {fileUrl ? (
    <div className=''>
      
      <img className="ml-24 w-[350px] p-5 pt-1" src={fileUrl} alt="" />
      <div className='text-center'>
        <label htmlFor="imageUpload">
          <input type="file" accept="image/*" name="image" id="imageUpload" className="hidden" multiple onChange={handleFileChange} />
          <p className="mt-4 ml-44 text-white">
            <span className="text-sm"></span> <br /> If you need to change click here <a href="" id="" className="text-blue-600 hover:underline"></a> 
          </p>
          <div className="absolute pt-4 pl-4 inset-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-800 bg-grey dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
            </svg>
          </div>
        </label>
      </div>
    </div>
  ) : (
    <div className='w-full mt-10 p-10 bg-cover flex justify-end'>
  <div className='text-center'>
    <label htmlFor="imageUpload">
    
      <input type="file" accept="image/*" name="image" id="imageUpload" className="hidden" multiple onChange={handleFileChange} />
      <div className="flex flex-col items-center"> 
        <img className="ml-52 w-[74px] p-5" src="https://i.pinimg.com/564x/0b/71/1b/0b711bef6d51a7e86aedd264e53c2133.jpg" alt="video" />
        <p className="ml-44 text-sm text-grey">
          <span className="text-sm">Drag and drop</span> Your certificate here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer
        </p>
      </div>
    
    </label>
  </div>
</div>
  )}
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
  
  )
}

export default VerificationModal
