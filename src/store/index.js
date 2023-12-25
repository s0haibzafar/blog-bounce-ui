import { createSlice } from "@reduxjs/toolkit";

const initilaState = {
    _id: '',
    email: '',
    username: '',
    auth: false
}

export const userSlice = createSlice({
    name: 'user',                               // use this name when we import userSlice in other file
    initialState: initilaState,
    reducers: {
        setUser: (state, action) => {
            //when data come form api and we can get api data by action
            const { _id, email, username, auth } = action.payload;

            //now we will date state
            state._id = _id;
            state.email = email;
            state.username = username;
            state.auth = auth;

        },
        resetUser: (state, action) => {
            //now we will reset state
            state._id = '';
            state.email = '';
            state.username = '';
            state.auth = false;
        }
    }
})

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;