
import userAxios from "../../Axios/userAxios";

export const getCategory = async ()=>{
    const res = await  userAxios.get("/getCategory")
    const data = res.data
    console.log(data,'categories are here');
    
    return   data;
}
export const category = async(Id:string)=>{
try {
      
     const res = await userAxios.get(`/singlecategory/${Id}`)
      const data = res.data
      console.log(data,'daljeiurinjdvvnj hriuekm vnbfdcn vfvjdcms nkm');
      
return data
} catch (error) {
    
}
   
}   