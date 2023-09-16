import { configureStore } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./client/userSlice"
import adminReducer from './admin/adminSlice'
import tutorReducer from "./tutor/tutorSlice";

const userPersistConfig = {
    key:'user',
    storage,
}

const adminPersistConfig={
    key:'admin',
    storage,
}
const tutorPersistConfig ={
    key:'tutor',
    storage,
}

const persistedUserReducer = persistReducer(userPersistConfig,userReducer)
const persistedAdminReducer = persistReducer(adminPersistConfig,adminReducer)
const persistedTutorReducer = persistReducer(tutorPersistConfig,tutorReducer)



export const store = configureStore({
    reducer:{
        user:persistedUserReducer,
        admin:persistedAdminReducer,
        tutor:persistedTutorReducer
    }
})

const persistor = persistStore(store)
console.log(persistor);

export default persistor;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch




