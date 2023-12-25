import { createSlice } from "@reduxjs/toolkit";

const initilaState ={
    _id: '',
    email: '',
    username: '',
    auth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initilaState,
    reducers: {
        setUser : (state, action) => {},
        resetUser : (state, action) => {}
    }
}) 

export const {setUser, resetUser} = userSlice.actions;

export default userSlice.reducer;