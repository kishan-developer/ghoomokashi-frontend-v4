import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
    baseURL: 'https://final-gk.onrender.com/api',
    timeout: 15000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

export default axiosInstance;

// Public Function Upload File
export const uploadFile = async (image) => {
    const res = await axiosInstance.post(
        "https://final-gk.onrender.com/api/img/uploadimg",
        { image: image },
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return res.data.imgUrl;
};
