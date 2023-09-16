import adminAxios from "../../Axios/adminAxios";

export const getUsers = async()=>{
    const res = await adminAxios.get('/getusers')
    console.log(res,'getUsers log');
    
    const data = res.data.result
    return data
}

export const blockuser = async(userid:string,action:string):Promise<any>=>{

    const res = await adminAxios.post('/blockuser',{userid,action})
    console.log(res,'response from ffton');
    
    
    const data = res.data
    return data
}
