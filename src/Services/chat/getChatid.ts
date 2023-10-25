
import tutorAxios from "../../Axios/tutorAxios";
import userAxios from "../../Axios/userAxios"
import { Message } from "../../Models/Models";



export const getchatid = async(tutorid:any)=>{

    const response = await userAxios.post(`/createchat/${tutorid}`)
    console.log(response,"respooooooooooooooo");
    
    const data = response.data
    return data
}

export const sendingmessage =async (content:any,chatid:any) => {
    console.log(content,'content');
    const response = await userAxios.post('/sendingtotutor',{content,chatid})
    const data = response.data
    return data
}

export const AllmessagesBychatid = async(chatid:any)=>{


    console.log(chatid,'inallmessagesby id were getting the chat id ');
    
    const response = await userAxios.get(`/allchatsbychatid/${chatid}`)
    console.log(response,"response for all message by chat id");
    
    const data = response.data
    return data
}
export const Alltutormessagebychatid = async(chatid:any)=>{
    const response = await tutorAxios.get(`/allchatsbychatid/${chatid}`)
    const data = response.data
    return  data;
}
export const chatWithUser = async(id:string)=>{
    const response = await tutorAxios.post(`/createChatwithuser/${id}`)
    const data=  response.data;
    return data

}
export const sendingmessagetouser = async(content:string|undefined,chatid:string|undefined  )=>{
    const response = await tutorAxios.post('/sendigtouser',{content,chatid})
    const data = response.data
    return data
}
 
