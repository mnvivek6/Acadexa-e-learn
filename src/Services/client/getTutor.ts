import userAxios from "../../Axios/userAxios";
import { tutorType } from "../../Models/Models";

export const tutorById = async(tutor:string):Promise<tutorType|undefined>=>{
    try {
        console.log(tutor,'from tutor by id');
        
        const res = await userAxios.get(`/getTutor/${tutor}`)
        const data = res.data.response
        return data
      
        
    } catch (error) {
        console.log(error);
        
    }
}