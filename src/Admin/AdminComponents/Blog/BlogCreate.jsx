import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for Quill

import { FaTags } from "react-icons/fa";
import TextInput from "../../../Components/Common/CustomInputs/TextInput";
import { Controller, useForm } from "react-hook-form";
import SelectInput from "../../../Components/Common/CustomInputs/SelectInput";
import FileInput from "../../../Components/Common/CustomInputs/FileInput";
import { uploadFile } from "../../../Services/apiConnector";
import { handleApiError } from "../../../Services/handleApiError";
import { blogApis } from "../../../Services/api/blogs/blogsApis";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setBlogs, setIsBlogsLoaded } from "../../../Redux/slices/blogsSlice";

const BlogCreate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    // Submit handler for form
    const onSubmit = async (data) => {
        const toastId = toast.loading("Please Wait");
        const ImageUrl = await uploadFile(data?.ImageUrl[0]);
        if (!ImageUrl) {
            return toast.error("Please Try Again.");
        }

        const newBlog = {
            ...data,
            ImageUrl: ImageUrl, // Image URL
            tags: data.tags.split(",").slice(0, 5), // Limit tags to 5
            views: 0,
            author: {
                name: data.author,
                date: new Date(Date.now()).toISOString().split("T")[0],
            },
        };

        try {
            console.log("Blog Data --->", newBlog);
            const res = await blogApis.createBlog(newBlog);
            dispatch(setBlogs(res));
            dispatch(setIsBlogsLoaded(false));
            toast.success("Blog post created successfully.");
            setFileInputKey(fileInputKey + 1);

            reset({
                title: "",
                content: "", // Ensure content resets properly
                ImageUrl: "",
                author: "",
                tags: "",
                categories: "",
            });
            setQuillKey(quillKey + 1);
        } catch (error) {
            console.log(error);
            const err = handleApiError(
                error,
                `Error WHile Posting New Blog Due To ${error}`
            );
            toast.error(err);
        } finally {
            toast.dismiss(toastId);
        }
    };

    return (
        <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title */}
                <div>
                    <TextInput
                        label="Blog Title"
                        name="title"
                        register={register}
                        required
                        validation={{
                            required: "Blog title is required",
                            maxLength: {
                                value: 100,
                                message:
                                    "Title cannot be longer than 100 characters",
                            },
                        }}
                        errors={errors}
                    />
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium">Content</label>
                    <Controller
                        key={quillKey}
                        name="content"
                        control={control}
                        rules={{
                            required: "Content is required",
                            minLength: {
                                value: 50,
                                message:
                                    "Content should be at least 50 characters long",
                            },
                        }}
                        render={({ field }) => (
                            <ReactQuill
                                {...field}
                                theme="snow"
                                className="mt-2 p-2 border rounded-md"
                                placeholder="Write your blog content..."
                            />
                        )}
                    />
                    {errors.content && (
                        <p className="text-red-500 text-sm">
                            {errors.content.message}
                        </p>
                    )}
                </div>

                {/* Image URL */}
                <div>
                    <FileInput
                        key={fileInputKey}
                        label="Image"
                        name="ImageUrl"
                        register={register}
                        validation={{
                            required: "Image is required",
                            validate: (value) =>
                                value.length > 0 || "Please upload an image",
                        }}
                        errors={errors}
                    />
                </div>

                {/* Author */}
                <div>
                    <TextInput
                        label="Author Name"
                        name="author"
                        register={register}
                        required
                        validation={{
                            required: "Author name is required",
                            maxLength: {
                                value: 20,
                                message:
                                    "Author name cannot be longer than 20 characters",
                            },
                            minLength: {
                                value: 3,
                                message:
                                    "Author name cannot be smaller than 3 characters",
                            },
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message:
                                    "Author name can only contain letters and spaces",
                            },
                        }}
                        errors={errors}
                    />
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-sm font-medium">
                        Tags (comma separated, max 5)
                    </label>
                    <input
                        type="text"
                        {...register("tags", {
                            required: "Tags are required",
                            pattern: {
                                value: /^[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*(?:,\s*[A-Za-z0-9]+(?:\s[A-Za-z0-9]+)*)*$/,
                                message:
                                    "Invalid format: No spaces before/after commas",
                            },
                            validate: (value) => {
                                const tags = value
                                    .split(",")
                                    .map((tag) => tag.trim());
                                return (
                                    tags.length <= 5 ||
                                    "You can only add up to 5 tags"
                                );
                            },
                        })}
                        className="w-full p-2  rounded-md mt-2 border focus:outline-none focus:ring-2 focus:ring-red-500
                focus:border-transparent "
                    />
                    {errors.tags && (
                        <p className="text-red-500 text-sm">
                            {errors.tags.message}
                        </p>
                    )}
                </div>

                {/* Categories */}
                <div>
                    <TextInput
                        label="Categories"
                        name="categories"
                        register={register}
                        required
                        validation={{
                            required: "categories is required",

                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message:
                                    "categories can only contain letters and spaces",
                            },
                        }}
                        errors={errors}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                    Create Blog
                </button>
            </form>
        </div>
    );
};

export default BlogCreate;
