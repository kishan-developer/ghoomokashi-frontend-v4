import axiosInstance, { uploadFile } from "../../apiConnector";
import { packagesEndpoints } from "../../endpoints/packages/packagesEndpoints";

export const packagesApis = {
    getAllPackages: async () => {
        const res = await axiosInstance.get(packagesEndpoints.getAllPackages);
        return res?.data?.data;
    },
    deletePackageById: async (id) => {
        const res = await axiosInstance.delete(
            packagesEndpoints.deletePackageById(id)
        );
        return res.data;
    },
    createPackage: async (data) => {
        const res = await axiosInstance.post(
            packagesEndpoints.createPackage,
            data
        );
        return res?.data?.data;
    },
    editPackageById: async (id, newData) => {
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
            packagesEndpoints.editPackageById(id),
            newData
        );
        return res.data;
    },
};
