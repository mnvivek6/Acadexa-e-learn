import tutorAxios from "../../Axios/tutorAxios";
import { CategoryType, Payment } from "../../Models/Models";

export const getcategories = async():Promise<CategoryType[]>=>{
    const res = await  tutorAxios.get('/getallcategories')
    const data = res.data
    return data
}

export const Totalrevenue = async():Promise<Payment[]|null>=>{
    const response = await tutorAxios.get('/totalrevenue')
    const data = response.data
    return data
}   
