export const servicesEndpoints = {
    getAllServices: "https://ghoomokashi-bk.onrender.com/api/service/all",
    createServices: "https://ghoomokashi-bk.onrender.com/api/service/create",
    deleteServiceById: (id) =>
        `https://ghoomokashi-bk.onrender.com/api/service/${id}`,
    editServiceById: (id) =>
        `https://ghoomokashi-bk.onrender.com/api/service/${id}`,
};
