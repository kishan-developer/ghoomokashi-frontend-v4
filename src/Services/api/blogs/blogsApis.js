import axiosInstance from "../../apiConnector";
import { blogEndpoints } from "../../endpoints/blogs/blogsEndpoints";

export const blogApis = {
    createBlog: async (blogData) => {
        const res = await axiosInstance.post(
            blogEndpoints.createBlog,
            blogData
        );
        return res?.data?.data;
    },
    editBlogById: async (id, blogData) => {
        const res = await axiosInstance.put(
            blogEndpoints.editBlogById(id),
            blogData
        );
        return res.data;
    },
    deleteBlogById: async (id) => {
        const res = await axiosInstance.delete(
            blogEndpoints.deleteBlogById(id)
        );
        return res.data;
    },
    getAllBlogs: async () => {
        const res = await axiosInstance.get(blogEndpoints.getAllBlogs);
        return res.data?.data;
    },
};
