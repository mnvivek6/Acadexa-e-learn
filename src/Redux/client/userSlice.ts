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
            state.accessToken = action.payload?.accessToken
            state.userName = action.payload?.userName        }
    }
})
export const {updateUserCredentials} = userSlice.actions
export default userSlice.reducer