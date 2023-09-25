import {createSlice} from "@reduxjs/toolkit"


type initialStateType = {

    accessToken : string,
    userName:string,

}

const initialState :initialStateType ={

    accessToken:'',
    userName:"",
}

const userSlice = createSlice({
    name :"user",
    initialState,
    reducers:{
        updateUserCredentials:(state,action)=>{
            console.log(state,action,'state and action is here');
            
            state.accessToken = action.payload?.accessToken
            state.userName = action.payload?.userName       
         },
         logoutUser:(state,action)=>{
            state.accessToken=''
         }
    }
})
export const {updateUserCredentials,logoutUser} = userSlice.actions
export default userSlice.reducer