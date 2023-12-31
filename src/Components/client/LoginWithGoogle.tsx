
import { useGoogleLogin } from '@react-oauth/google'
import { error } from 'console'
import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../Redux/hooks'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { loginWithGoogle } from '../../Services/client/userLogin'
import { updateUserCredentials } from '../../Redux/client/userSlice'



const UserLoginWithGoogle:React.FC=()=> {

  const dispatch = useAppDispatch()
  const navigate =useNavigate()
   const [googleUser, setGoogleUser]= useState<{access_token:string}>()

   const [ googleProfile,setGoogleProfile] = useState<{

    name:string,
    email:string,

   }|null>()
   const LoginwithGoogelHelper = useGoogleLogin({
    onSuccess:(codeResponse)=>setGoogleUser(codeResponse),
    onError:(error)=>console.log('Login Failed:',error)
    
   })
   useEffect(()=>{
    const fetchGoogleProfile = async()=>{
        if(googleUser){
            try {
                const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,{

                headers:{
                  Authorization:`Bearer ${googleUser?.access_token}`,
                  Accept:'application/json',
                },
                })
                setGoogleProfile(res.data);
                const User = await loginWithGoogle(res?.data?.email,res?.data?.name)   
                if (User) {
                  const {accessToken,user}=User

                  dispatch(updateUserCredentials({accessToken:accessToken,userImage:user?.image?user.image:'',userName:user?.name}))
                  navigate('/')
                }            
            } catch (error:any) {
                console.log(error?.response);
                
            }
        }
    }

    fetchGoogleProfile()
   },[googleUser])




  return (
    <div>
      <button
      type="button"
      className="button-style mx-1 them h-9 bg-lavender leading-normal  transition duration-150 ease-in-out  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      onClick={() => { LoginwithGoogelHelper(); }}
    >
     
    </button>

    </div>
  )
}

export default UserLoginWithGoogle

