import adminAxios from "../../Axios/adminAxios";

export const Createcategory = async(CategoryName:string,description:string,fileUrl:string)=>{
     if (!CategoryName||!description||!fileUrl) {
        throw new Error("Missing required fields");
        
     }
    const res = await adminAxios.post('/addcategory',{CategoryName,description,fileUrl})
    const data = res.data
    return data
}

export const getCategory = async ()=>{
    const res=await  adminAxios.get("/getcategory")
    const data = res.data
    return   data;
}