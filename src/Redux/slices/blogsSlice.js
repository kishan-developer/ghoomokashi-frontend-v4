import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    blogs: [],
    isLoaded: false,
};
const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        setIsBlogsLoaded: (state, value) => {
            state.isLoaded = value.payload;
        },
        setBlogs: (state, value) => {
            state.blogs = value.payload;
        },
    },
});

export const { setIsBlogsLoaded, setBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
