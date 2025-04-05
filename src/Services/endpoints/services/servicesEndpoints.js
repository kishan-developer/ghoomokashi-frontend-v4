export const servicesEndpoints = {
    getAllServices: "https://final-gk.onrender.com/api/service/all",
    createServices: "https://final-gk.onrender.com/api/service/create",
    deleteServiceById: (id) => `https://final-gk.onrender.com/api/service/${id}`,
    editServiceById: (id) => `https://final-gk.onrender.com/api/service/${id}`,
};
