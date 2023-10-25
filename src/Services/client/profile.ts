import userAxios from "../../Axios/userAxios";
import Dashboard from "../../Components/admin/Dashboard";
import { Course, Payment, UserType } from "../../Models/Models";

export const ViewProfile= async():Promise<UserType>=>{
    const res = await userAxios.get('profile')

    const data = res.data
    return data
}
export const EditProfile = async(name:string|undefined,email:string,phone:string,fileUrl:string):Promise<UserType>=>{

    const res = await userAxios.post('/editprofile',{name,email,phone,fileUrl})
    const data = res.data

    return data
}
export const PurchasedCourses = async():Promise<Payment[]|null>=>{
    const res  = await userAxios.get('/purchasedcourse')
    const data = res.data
    return data
}
export const CheckingpurchasedOrnot = async(courseid:string):Promise<Payment|undefined>=>{
    // console.log(coursed,'course id is hrer');
    try {
        const res = await userAxios.get(`/checkingpurchased/${courseid}`)
        const data  = res.data
        return data
    } catch (error) {
        console.log(error);
        
    }
   
}
