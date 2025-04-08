export const packagesEndpoints = {
    getAllPackages: "https://ghoomokashi-bk.onrender.com/api/package/all",
    deletePackageById: (id) =>
        `https://ghoomokashi-bk.onrender.com/api/package/${id}`,
    createPackage: "https://ghoomokashi-bk.onrender.com/api/package/create",
    editPackageById: (id) =>
        `https://ghoomokashi-bk.onrender.com/api/package/${id}`,
};
