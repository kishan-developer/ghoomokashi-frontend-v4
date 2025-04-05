import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoaded: false,
    packages: [],
};
const packagesSlice = createSlice({
    name: "packages",
    initialState,
    reducers: {
        setIsPackagesLoaded: (state, value) => {
            state.isLoaded = value.payload;
        },
        setPackages: (state, value) => {
            state.packages = value.payload;
        },
    },
});

export const { setIsPackagesLoaded, setPackages } = packagesSlice.actions;
export default packagesSlice.reducer;
