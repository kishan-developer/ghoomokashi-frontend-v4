import axiosInstance from "../../apiConnector";
import { authEndpoints } from "../../endpoints/auth/authEndpoints";

export const authApis = {
    login: async (authData) => {
        const res = await axiosInstance.post(authEndpoints.login, authData);
        return res?.data?.token;
    },
};
