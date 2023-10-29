import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser(state, action){
            state = {}
           return {...state, ...action.payload};
        },
        closeUser(state, action){
            console.log('cerrar sesion: ',action);
            state = {}
            return state 
        }
    }
})

export const { setUser, closeUser } = userReducer.actions;
export default userReducer.reducer