import React from "react";
import {
    FaEdit,
    FaTrash,
    FaEye,
    FaMapMarkerAlt,
    FaUsers,
    FaClock,
} from "react-icons/fa";

const BlogCard = ({ blogData, onEdit, onDelete, onPreview }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-102">
            {/* Blog Image */}
            <img
                src={blogData?.ImageUrl || "/default-image.jpg"} // Default image fallback
                alt={blogData?.title}
                className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
                {/* Blog Title */}
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {blogData?.title}
                </h3>

                {/* Blog Content */}
                <p
                    className="text-gray-600 text-sm mt-1 truncate"
                    dangerouslySetInnerHTML={{
                        __html: blogData?.content?.slice(0, 50),
                    }}
                ></p>

                {/* Blog Metadata */}
                <div className="flex items-center justify-between text-gray-600 text-sm mt-3">
                    <div className="flex items-center gap-1">
                        <FaClock className="text-red-500" />{" "}
                        {blogData?.author?.date}
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-3 text-gray-500 text-sm">
                    {blogData?.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block text-blue-500 mr-2 text-xs bg-blue-100 rounded-full px-2 py-1 my-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                    {/* Preview Button */}
                    <button
                        onClick={() => onPreview(blogData)}
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm cursor-pointer"
                    >
                        <FaEye /> Preview
                    </button>

                    {/* Edit & Delete Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => onEdit(blogData)}
                            className="text-yellow-500 hover:text-yellow-600 text-sm cursor-pointer"
                        >
                            <FaEdit />
                        </button>
                        <button
                            onClick={() => onDelete(blogData)}
                            className="text-red-500 hover:text-red-600 text-sm cursor-pointer"
                        >
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
