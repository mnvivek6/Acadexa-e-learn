import adminAxios from "../../Axios/adminAxios";


export const adminLogin = async (email:string,password:string):Promise<any>=>{
    const res = await adminAxios.post('/login',{email,password})
         
         
    const data = res.data
    console.log(data,'admin datas are here');
    
    return data
}