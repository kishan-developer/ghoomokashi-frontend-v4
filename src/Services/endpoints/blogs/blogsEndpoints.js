export const blogEndpoints = {
    getAllBlogs: "https://ghoomokashi-bk.onrender.com/api/blog/all",
    editBlogById: (id) => `https://ghoomokashi-bk.onrender.com/api/blog/${id}`,
    createBlog: "https://ghoomokashi-bk.onrender.com/api/blog/create",
    deleteBlogById: (id) =>
        `https://ghoomokashi-bk.onrender.com/api/blog/${id}`,
};
