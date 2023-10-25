import tutorAxios from "../../Axios/tutorAxios";
import { Course } from "../../Models/Models";


export const Createclass = async(classData:object,id:string|undefined):Promise<Course|null>=>{
console.log(classData,'value checking hre in backend');

     const res = await tutorAxios.post(`/addclass/${id}`,{classData})
     const data = res.data
     return data
}