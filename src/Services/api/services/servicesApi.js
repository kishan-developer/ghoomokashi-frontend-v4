import axiosInstance, { uploadFile } from "../../apiConnector";
import { servicesEndpoints } from "../../endpoints/services/servicesEndpoints";
import { handleApiError } from "../../handleApiError";

export const servicesApi = {
    getAllServices: async () => {
        const res = await axiosInstance.get(servicesEndpoints.getAllServices);
        return res?.data.data;
    },
    createServices: async (data) => {
        const res = await axiosInstance.post(
            servicesEndpoints.createServices,
            data
        );
        return res?.data?.data;
    },
    deleteServiceById: async (id) => {
        const res = await axiosInstance.delete(
            servicesEndpoints.deleteServiceById(id)
        );
        return res.data;
    },
    editServiceById: async (id, newData) => {
        if (
            newData.ImageUrl instanceof FileList && // Ensure it's a FileList
            newData.ImageUrl.length > 0 && // Ensure it contains at least one file
            newData.ImageUrl[0] instanceof File // Ensure first item is a valid file
        ) {
            const ImageUrl = await uploadFile(newData.ImageUrl[0]);
            if (!ImageUrl) {
                return;
            }
            newData.ImageUrl = ImageUrl;
        }

        const res = await axiosInstance.put(
            servicesEndpoints.editServiceById(id),
            newData
        );
        return res.data;
    },
};
