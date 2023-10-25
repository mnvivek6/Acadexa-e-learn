import userAxios from "../../Axios/userAxios"
import { Course } from "../../Models/Models"

export const searchCourse = async(value:string):Promise<Course[]|null>=>{
    
        const response = await userAxios.get(`/searchsortfilter?input=${value}`)
        const data = response.data
        return data
  
}