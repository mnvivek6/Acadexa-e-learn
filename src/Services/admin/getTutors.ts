import adminAxios from "../../Axios/adminAxios";

export const GetTutors =async () => {
    
    const response= await adminAxios.get('/alltutuors');
    const data = response.data
     console.log(data,'datas are here');
     
    return data
}