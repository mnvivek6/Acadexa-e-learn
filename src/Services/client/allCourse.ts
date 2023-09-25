import userAxios from "../../Axios/userAxios";

export const AllCourse = async()=>{

    const res = await userAxios.get('/allcourses')
    const data = res.data
    return data
}
export const GetCourseById = async(id:string|undefined)=>{
    const res = await userAxios.get(`/singleCourse/${id}`)
    const data = res.data
    return data
}

export const GetCourseByTutor = async(tutor:string|undefined)=>{
    const res=await  userAxios.get(`/coursebytutor/${tutor}`); 
    const data = res.data
    return data
}

