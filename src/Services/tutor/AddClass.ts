import tutorAxios from "../../Axios/tutorAxios";


export const Createclass = async(title:string,description:string,fileUrl:string,id:string|undefined)=>{

     const res = await tutorAxios.post(`/addclass/${id}`,{title,description,fileUrl})
     const data = res.data
     return data
}