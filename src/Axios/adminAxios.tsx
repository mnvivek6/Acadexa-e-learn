import axios from "axios";
import { adminAPI } from "../Constants/API";



const adminAxios = axios.create({
    baseURL:adminAPI
})

export default adminAxios;

adminAxios.interceptors.request.use(
    (config) => {
        const AdminCredentialsString = localStorage.getItem("persist:admin") 

        console.log(AdminCredentialsString,'this is admin credentials');
        
        if(AdminCredentialsString){

            const AdminCredentlObject = JSON.parse(AdminCredentialsString)
           
            
            const accessTokenString = AdminCredentlObject.accessToken; 
            const tokenobj = JSON.parse(accessTokenString)
            console.log(tokenobj,'token obj is parsed');
        
            console.log(tokenobj,'admin token is not getting');
            
            config.headers["tutor"] = `Bearer ${tokenobj}`;
        }
        
        return config;
    },
    (error) => {
        console.log("errror und");
        
        return Promise.reject(error);
    }

    
);
adminAxios.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        return Promise.reject(error)
    }
)