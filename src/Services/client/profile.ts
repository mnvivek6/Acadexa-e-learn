import userAxios from "../../Axios/userAxios";
import { UserType } from "../../Models/Models";

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