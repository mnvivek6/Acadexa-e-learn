import React, { FormEvent, useState } from 'react'
import { adminLogin } from '../../Services/admin/adminLogin';
import { updateAdminCredentials } from '../../Redux/admin/adminSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

    const AdminLogin:React.FC =()=> {

        const [resError, setResError]= useState<string | undefined>(undefined)
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const [email,setEmail]= useState<string>('')
        const [password,setPassword] = useState<string>('')
        
        const loginForm = async (e:FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
            try {
                
                const Admin = await adminLogin(email,password)
              console.log(Admin,'geting admin login');
              
                if ( Admin) {
                   const{ adminToken }= Admin

                    console.log(adminToken.token,'access toke admin');
                    
                     
                    dispatch(updateAdminCredentials({accessToken:adminToken.token}))
                    navigate('/admin/dashboard')
                    
                }
            } catch (error:any) {
                console.log(error?.resposnse?.data?.message);
                setResError(error?.respnse?.message)
            }
        }
  return (
    <div>
       <section className="signUp " >
                <div className="container_login" style={{ marginTop: "100px" }}>
                    <div className="signUp-content">
                        <div className="signUp-form">
                            <h2 className="form-title text-lavender">Login</h2>
                            <form method="POST" className="register-form" id="register-form" onSubmit={loginForm}>
                                <div className="form-group">
                                    <label htmlFor="name" placeholder='please enter your name'>
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                   <input type="email" name='email' id='email' placeholder='please enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
                                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" >
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                   <input type="password" name='password' placeholder='please enter your password' id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                   
                                </div>
                                
                                
                                <div className="form-group form-button">
                                <button
                                 type="submit"
                               className="w-full text-white bg-lavender hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                 login
                                </button>
                              
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                               Not registered? <a  className="text-midnight  hover:underline cursor-pointer dark:text-blue-500" >Create account</a>
                               </div>
                                </div>
                            </form>

                        </div>
                        <div className="signUp-image">
                            <figure>
                                <img src='https://i.pinimg.com/564x/04/4a/22/044a22586da10fb5b88bfbb6da4b61c9.jpg'alt="sing up image" />
                            </figure>
                            
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default AdminLogin
