import { createSlice } from "@reduxjs/toolkit";


type initialStateType ={
    accessToken:string,
    adminName:string,
}

const initialState:initialStateType ={
    accessToken:'',
    adminName:''
}

const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        updateAdminCredentials:(state,action)=>{
         
            state.accessToken= action.payload?.accessToken;
            state.adminName = action.payload?.adminName
           
            
        }
    }
})

export const {updateAdminCredentials}= adminSlice.actions


export default adminSlice.reducer