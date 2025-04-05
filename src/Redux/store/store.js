import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import servicesReducer from "../slices/servicesSlice";
import packagesReducer from "../slices/packagesSlice";
import blogsReducer from "../slices/blogsSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        services: servicesReducer,
        packages: packagesReducer,
        blogs: blogsReducer,
    },
});

export default store;
