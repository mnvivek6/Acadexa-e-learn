
import { userAPI } from '../Constants/API'
import axios from 'axios'



const userAxios = axios.create({
  baseURL:userAPI
})

export default userAxios


userAxios.interceptors.request.use(
  (config) => {
      const UserCredentialsString = localStorage.getItem("persist:user") 
      // console.log(UserCredentialsString,'user credential string is here');
      
      if(UserCredentialsString){

          const UserCredentialObject = JSON.parse(UserCredentialsString)
          // console.log(UserCredentialObject,'user credentialobject');
          
          const accessTokenString = UserCredentialObject.accessToken; 
          // console.log(accessTokenString,'accesstoken string is hereeeeeeeeeeeeeeeeeeeeeeeeee');
          
          
          // const userToken = accessTokenString?.token?.replace(/^"(.*)"$/, "$1"); // Added null checks
          // console.log(accessTokenString,'user token is not here');
          
          config.headers["user"] = `Bearer ${accessTokenString}`;
      }
      
      return config;
  },
  (error) => {
      console.log("errror und");
      
      return Promise.reject(error);
  }
);


userAxios.interceptors.response.use(
  (response)=>{
      return response
  },
  (error)=>{
      return Promise.reject(error)
  }
)