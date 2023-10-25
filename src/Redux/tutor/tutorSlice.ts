import { createSlice } from "@reduxjs/toolkit";

type initialStateType ={
    accessToken : string,
    tutorName:string
}

const initialState: initialStateType ={
    accessToken:'',
    tutorName:'',
}

const tutorSlice = createSlice({
    name :'tutor',
    initialState,
    reducers:{
        updateTutorCredentials:(state,action)=>{
            state.accessToken = action.payload?.accessToken
            state.tutorName = action.payload?.tutorName
            
        }
        
    }
})

export const {updateTutorCredentials} = tutorSlice.actions
export default tutorSlice.reducer