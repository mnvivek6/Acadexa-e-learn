import axios from "axios";
import { tutorAPI } from "../Constants/API";
import tutor from "../Routes/tutor";
import { object } from "yup";

const tutorAxios = axios.create({
    baseURL:tutorAPI
})

export default tutorAxios


tutorAxios.interceptors.request.use(
    (config) => {
        const TutorCredentialsString = localStorage.getItem("persist:tutor") 
        if(TutorCredentialsString){
             console.log(TutorCredentialsString,'tutor credentials');
             
            const TutorCredentialObject = JSON.parse(TutorCredentialsString)
            console.log(TutorCredentialObject,'tutor credential objectt');
            
            const accessTokenString = TutorCredentialObject.accessToken; 
            console.log(accessTokenString,'access token string');
            
            const accessTokenObject = JSON.parse(accessTokenString);
                const tutorToken = accessTokenObject.tutorToken.token
            
            // const tutorToken = accessTokenObject?.token?.replace(/^"(.*)"$/, "$1"); // Added null checks
            console.log(tutorToken,'tutor token is ok interceptors');
            
            config.headers["tutor"] = `Bearer ${tutorToken}`;
        }
        
        return config;
    },
    (error) => {
        console.log("errror und");
        
        return Promise.reject(error);
    }
);


tutorAxios.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        return Promise.reject(error)
    }
)


