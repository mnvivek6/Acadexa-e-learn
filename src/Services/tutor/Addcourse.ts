import tutorAxios from "../../Axios/tutorAxios";


export const CreateCourse = async (title:string,description:string,coursefee:string,duration:string,level:string,selectedCategory:string,fileUrl:string)=>{

    const res = await tutorAxios.post('/addcourse',{title,description,coursefee,duration,level,selectedCategory,fileUrl})
    const data = res.data
    return data

}

export const Category = async ()=>{
    const res = await tutorAxios.get('/getcategory')
    const data = res.data
    return data
}

export const Allcourse = async ()=>{
    console.log('adni');
    
    const res = await tutorAxios.get('/getcourse')
    console.log(res,'all courses');
    
    const data = res.data
    return data
}

export const SigleCourse = async (id:string|undefined)=>{
    const res = await tutorAxios.get(`/sigleCourse/${id}`)
    const data = res.data
    return data
}