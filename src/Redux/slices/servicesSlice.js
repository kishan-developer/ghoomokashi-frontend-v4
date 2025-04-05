import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    services: [],
    isLoaded: false,
};
const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setIsServicesLoaded: (state, value) => {
            state.isLoaded = value.payload;
        },
        setServices: (state, value) => {
            state.services = value.payload;
        },
    },
});

export const { setIsServicesLoaded, setServices } = servicesSlice.actions;
export default servicesSlice.reducer;
