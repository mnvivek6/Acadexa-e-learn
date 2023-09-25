import tutorAxios from "../../Axios/tutorAxios";
import { tutorType } from "../../Models/Models";

export const tutorLogin = async ( email:string,password:string):Promise<any>=>{
    
        const res = await tutorAxios.post('login',{email, password})
        const data = await res.data
        console.log(data);
        return data
}

export const setProfile = async (qualification:string,experience:string,about:string):Promise<any>=>{

        const res = await tutorAxios.post('setupProfile',{qualification,experience,about})
        const data = await res.data
        return data
}
export const ViewProfile = async ():Promise<tutorType>=>{
        const res = await tutorAxios.get('profile')
        const data = res.data
        console.log(data);
        
        return data
}