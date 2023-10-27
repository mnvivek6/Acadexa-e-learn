import { StringLiteral } from "typescript";
import adminAxios from "../../Axios/adminAxios";
import { tutorType } from "../../Models/Models";
import admin from "../../Routes/admin";
import { StepIconProps } from "@mui/material";

export const GetTutors =async () => {
    
    const response= await adminAxios.get('/alltutuors');
    const data = response.data
     
     
    return data
}

export const getTutorBysearch = async(value:string):Promise<tutorType[]|undefined>=>{
    const response = await adminAxios.get(`searchtutorbyname?value=${value}`)
    const data  =response?.data;
    return data
}
export const blocktutor = async(tutorid:string,action:string):Promise<any>=>{
    const res = await adminAxios.post('/blocktutor',{tutorid,action})
    const data = res.data
    return data
}
export const unverifiedTutors = async():Promise<tutorType[]|null>=>{
    const res = await adminAxios.get('/unverifiedtutors')
    console.log(res,'response');
    
    const data = res.data
    return data
}
export const getTutorbyid = async(tutorid:string|undefined):Promise<tutorType>=>{
    const res = await adminAxios.get(`/gettutorbyid/${tutorid}`)
    const data = res.data
    return data
}

export const verifyTutor = async(tutorid:string|undefined,tutoremail:string|undefined,tutorname:string|undefined):Promise<any>=>{

    const res = await adminAxios.post(`/verify/${tutorid}`)
    const data = res.data
    return data
}
export const DeclineVerification = async(tutoremail:string|undefined,tutorname:string|undefined):Promise<any>=>{

    const res = await adminAxios.get(`/decline?values=${tutoremail}`)
    const data = res.data
    return data
}