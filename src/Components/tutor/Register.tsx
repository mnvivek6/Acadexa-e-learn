import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import tutorAxios from '../../Axios/tutorAxios'
import { ToastContainer, toast } from 'react-toastify'


type initialValuesType = {
  name:string
  email:string
  phone:number|undefined
  password:string
}

const Register:React.FC=()=> {


  const initialValues:initialValuesType={
    name:'',
    email:'',
    phone:undefined,
    password:'',
  }

  const validationSchema = Yup.object({
       
    name: Yup.string()
    .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Invalid name format')
    .min(3, 'Name must be at least 3 characters')
    .required('Please enter your name'),
    email: Yup.string().email('Invalid email format').required('Please enter your email'),
    phone:  Yup.string()
    .test('is-ten-digits', 'Phone number must have 10 digits', (value) => {

      const digits = value?.replace(/\D/g, '');
  
      if (digits?.length !== 10) {
        return false;
      }
    
  
      return true;
    })
    .required('Please enter your phone number')
    .test('is-valid', 'Invalid phone number', (value) => {
      const digits = value.replace(/\D/g, '');
  
      if (digits.length !== 10) {
        return true; 
      }
  
  
      const firstDigit = digits[0];
    console.log(firstDigit)
    const checkNumber = digits.split('')

    console.log(checkNumber);
    
      if (digits.split('').every((digit) => digit === firstDigit)) {
        return false; 
      }
      return true;
    }),
    password: Yup.string()
      .min(6, 'Password must be at least 6 digits')
      .matches(/^[a-zA-Z0-9]*$/, 'Password can only contain letters and numbers')
      .required('Please enter your password'),


confirmPassword: Yup.string() // Add validation for confirmPassword
    .oneOf([Yup.ref('password'), ], 'Passwords must match') // Check if it matches the 'password' field
    .required('Please confirm your password'),
})

 const onSubmit = (values:initialValuesType)=>{

  console.log(values.name);
  
  tutorAxios.post('/signup',{name:values.name,email:values.email,phone:values.phone,password:values.password}).then((res)=>{
    console.log('submit', res.data.message);
    
    toast.success('🦄 Tutor signup successfull please verify your mail', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }).catch((err:any)=>{
    console.log(err?.resposnse?.data?.message);
    
    toast.error('🦄 Oops tutor Already exist!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  })
 }


  return (
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
                            <h2 className="form-title text-lavender">Tutor Sign up</h2>
                            <Form method="POST" className="register-form" id="register-form" >
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"

                                        placeholder="Your Name"
                                    />
                                    <ErrorMessage  name='name'>
                                               {
                                                (errorMsg)=><div className='error text-red'>{errorMsg}</div>
                                               }              
                                    </ErrorMessage>
                                </div>
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
                                    <label htmlFor="pass">
                                        <i className="fa-sharp fa-solid fa-address-book"></i>
                                    </label>
                                    <Field
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Your Dial number"
                                    />
                                    <ErrorMessage name='phone'>
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
                                <div className="form-group">
                                        <label htmlFor="confirmPassword">
                                            <i className="zmdi zmdi-lock-outline"></i>
                                        </label>
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            placeholder="Confirm Password"
                                        />
                                        <ErrorMessage name='confirmPassword'>
                                            {
                                                (errorMsg) => <div className='error text-red'>{errorMsg}</div>
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
  )
}

export default Register
