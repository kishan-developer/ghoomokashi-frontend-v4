import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isAdmin: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAdmin: (state, value) => {
            state.isAdmin = value.payload;
        },
    },
});

export const { setIsAdmin } = authSlice.actions;
export default authSlice.reducer;
