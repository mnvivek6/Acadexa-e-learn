import adminAxios from "../../Axios/adminAxios";

export const Createcategory = async(CategoryData:object)=>{
     if (!CategoryData) {
        throw new Error("Missing required fields");
     }
     console.log(CategoryData,'category datasa are here');
     
    const res = await adminAxios.post('/addcategory',{CategoryData})
    const data = res.data
    return data
}

export const getCategory = async ()=>{
    const res=await  adminAxios.get("/getcategory")
    const data = res.data
    return   data;
}
export const editCourse = async(name:string,description:string,fileUrl:string,categoryid:string)=>{
    const res = await adminAxios.post(`/editcourse/${categoryid}`,{name,description,fileUrl})
    const data =res.data
    return data
}  