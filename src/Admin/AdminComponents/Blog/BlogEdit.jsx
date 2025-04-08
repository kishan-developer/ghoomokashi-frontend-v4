import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller, useForm } from "react-hook-form";
import TextInput from "../../../Components/Common/CustomInputs/TextInput";
import FileInput from "../../../Components/Common/CustomInputs/FileInput";
import { uploadFile } from "../../../Services/apiConnector";
import { handleApiError } from "../../../Services/handleApiError";
import { blogApis } from "../../../Services/api/blogs/blogsApis";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setBlogs, setIsBlogsLoaded } from "../../../Redux/slices/blogsSlice";

const BlogEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const existingBlog = location.state?.blog;
    const [fileInputKey, setFileInputKey] = useState(1);
    const [quillKey, setQuillKey] = useState(1);
    const {
        control,
        handleSubmit,
        register,
        setValue,
        formState: { errors },
        reset,
    } = useForm();

    useEffect(() => {
        console.log(existingBlog);
        if (existingBlog) {
            reset({
                title: existingBlog?.title,
                content: existingBlog?.content,
                author: existingBlog?.author?.name,
                tags: existingBlog?.tags.join(","),
                categories: existingBlog?.categories,
            });
        }
    }, [existingBlog, reset]);

    const onSubmit = async (data) => {
        if (!isUpdated(existingBlog, data)) {
            return toast.error("Please Update Something");
        }
        const toastId = toast.loading("Updating Blog...");
        let ImageUrl = existingBlog?.ImageUrl;

        if (data.ImageUrl?.length > 0) {
            ImageUrl = await uploadFile(data.ImageUrl[0]);
            if (!ImageUrl) {
                return toast.error("Image upload failed.");
            }
        }

        const updatedBlog = {
            ...existingBlog,
            ...data,
            ImageUrl,
            tags: data.tags.split(",").slice(0, 5),
        };

        try {
            await blogApis.editBlogById(existingBlog._id, updatedBlog);
            dispatch(setIsBlogsLoaded(false));
            toast.success("Blog updated successfully.");
            navigate(-1);
        } catch (error) {
            console.error(error);
            toast.error(handleApiError(error, "Error updating blog"));
        } finally {
            toast.dismiss(toastId);
        }
    };

    const isUpdated = (originalData, updatedData) => {
        if (originalData?.title.trim() !== updatedData?.title.trim()) {
            return true;
        }
        if (
            originalData?.content.split(" ").join("") !==
            updatedData?.content.split(" ").join("")
        ) {
            return true;
        }
        if (
            originalData?.ImageUrl !== updatedData?.ImageUrl &&
            updatedData?.ImageUrl.length != 0
        ) {
            return true;
        }
        if (
            originalData?.tags?.toString().trim() !==
            updatedData?.tags?.toString().trim()
        ) {
            return true;
        }
        if (
            originalData?.categories.trim() !== updatedData?.categories.trim()
        ) {
            console.log(
                originalData?.categories.trim(),
                updatedData?.categories.trim()
            );
            return true;
        }
        return false;
    };

    return (
        <div className="p-8  rounded-lg shadow-md  bg-white">
            <h2 className="text-2xl font-semibold mb-4">Edit Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <TextInput
                    label="Blog Title"
                    name="title"
                    register={register}
                    required
                    validation={{ required: "Blog title is required" }}
                    errors={errors}
                />

                <div>
                    <label className="block text-sm font-medium">Content</label>
                    <Controller
                        key={quillKey}
                        name="content"
                        control={control}
                        rules={{ required: "Content is required" }}
                        render={({ field }) => (
                            <ReactQuill
                                {...field}
                                theme="snow"
                                className="mt-2 p-2 border rounded-md"
                            />
                        )}
                    />
                    {errors.content && (
                        <p className="text-red-500 text-sm">
                            {errors.content.message}
                        </p>
                    )}
                </div>

                <FileInput
                    key={fileInputKey}
                    label="Change Image (Only JPG,JPEG,PNG allowed)*"
                    name="ImageUrl"
                    register={register}
                    errors={errors}
                    preUrl={existingBlog.ImageUrl}
                />

                <TextInput
                    label="Author Name"
                    name="author"
                    register={register}
                    required
                    validation={{ required: "Author name is required" }}
                    errors={errors}
                />

                <TextInput
                    label="Tags (comma separated, max 5)"
                    name="tags"
                    register={register}
                    required
                    validation={{ required: "Tags are required" }}
                    errors={errors}
                />

                <TextInput
                    label="Categories"
                    name="categories"
                    register={register}
                    required
                    validation={{ required: "Categories are required" }}
                    errors={errors}
                />

                <button
                    type="submit"
                    className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Update Blog
                </button>
            </form>
        </div>
    );
};

export default BlogEdit;
