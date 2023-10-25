import adminAxios from "../../Axios/adminAxios";
import { Course } from "../../Models/Models";

export const Courses = async():Promise<Course[]|undefined>=>{
    const response = await adminAxios.get('/getcourses')
    const data = response.data
    return data
}
export const searchCoursebyName = async(value:string):Promise<Course[]|undefined>=>{
    const res = await adminAxios.get(`/searchcoursebyname?value=${value}`)
    const data = res.data
    return data
}
