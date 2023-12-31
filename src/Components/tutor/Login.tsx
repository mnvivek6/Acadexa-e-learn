
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ToastContainer } from 'react-toastify'
import * as Yup from 'yup'
import React from 'react'
import tutorAxios from '../../Axios/tutorAxios'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../Redux/hooks';
import { updateTutorCredentials } from '../../Redux/tutor/tutorSlice'
import { log } from 'util'
 type initialValueType = {
    email:string,
    password : string 
}

function Login() {


    const initialValues:initialValueType ={

        email:'',
        password:'',
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Please enter your email'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 digits')
        .matches(/^[a-zA-Z0-9]*$/, 'Password can only contain letters and numbers')
        .required('Please enter your password'),
    })

      const navigate = useNavigate()
      const dispatch = useAppDispatch()
    const onSubmit=async (values:initialValueType)=>{

    console.log(values.email,values.password,'dfiusnhfiurdsfnvenvygthrebnvoiudewvewwvsdfgvfv');
    try {
        const res = await tutorAxios.post('/login',{email:values.email,password:values.password})
        console.log(res,'sfsdfdsfsfsfdsfsdfdfsdfdf');
        
      const data = await res.data
      dispatch(updateTutorCredentials({accessToken:data}))
        navigate('/tutor/home')
        
    } catch (error) {
     console.log(error);
        
    }
    //   const res = await tutorAxios.post('/login',{email:values.email,password:values.password})
   
    }
  return (
    <div>
      <div>
         <Formik
           initialValues={initialValues}
           validationSchema= {validationSchema}
           onSubmit={onSubmit}
        >
           <div className='h-screen w-fulltop-0 flex items-center justify-center' >
            <section className="signUp "  >
                <div className="container_login ">
                    <div className="signUp-content  ">
                        <div className="signUp-form ">
                            <h2 className="form-title text-lavender">Tutor Login</h2>
                            <Form method="POST" className="register-form" id="register-form" >
                                
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"

                                        placeholder="Your Email"
                                    />
                                    <ErrorMessage name='email'>
                                       {
                                        (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                                       }    
                                    </ErrorMessage>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="re-pass">
                                        <i className="zmdi zmdi-lock-outline"></i>
                                    </label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"

                                        placeholder="Enter your Password"
                                    />
                                    <ErrorMessage name='password'>
                                       {
                                        (errorMsg)=> <div className='error text-red'>{errorMsg}</div>
                                       }    
                                    </ErrorMessage>
                                </div>
                                
                                <div className="form-group form-button">
                                <button
                                 type="submit"
                                className="w-full text-white bg-lavender hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  >
                                Sign Up
                               </button>
                               
                                </div>
                            </Form>

                        </div>
                        <div className="signUp-image">
                            <figure>
                                <img src='https://i.pinimg.com/474x/2d/85/ae/2d85ae06ebaf34732c45d95cb333a114.jpg' alt="sing up image" />
                            </figure>
                             <ToastContainer/>
                        </div>
                    </div>
                </div>
                
            </section>
           
            </div>
           

        </Formik>
    </div>
    </div>
  )
}

export default Login

