import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import SectionHeading from "../Common/SectionHeading";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import getPlainTextSnippet from "../../Utils/getPlainText";
function Blog() {
    // THis Data Will Come Dynamically
    const blogData = useSelector((state) => state.blogs.blogs, shallowEqual);

    return (
        <div className="w-full  py-5  flex items-center flex-col justify-center h-[fit] px-4">
            <SectionHeading text="Blog" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-4">
                {blogData?.map((item) => (
                    <BlogCard key={item?._id} item={item} />
                ))}
            </div>
        </div>
    );
}

const BlogCard = React.memo(({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-red-500">
            {/* Image */}
            <LazyLoad>
                <img
                    src={item.ImageUrl || "/public/placholder.jpg"}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                />
            </LazyLoad>

            {/* Blog Content */}
            <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 mb-1">
                    {item.author?.name} • {item.author?.date}
                </p>
                <h3 className="text-lg font-medium text-gray-900 line-clamp-2 leading-tight">
                    {item.title}
                </h3>
                <p className="text-sm  text-gray-600 my-2 line-clamp-3">
                    {getPlainTextSnippet(item?.content, 150)}
                </p>

                {/* Read More Button */}
                <button
                    onClick={() =>
                        navigate(`/blog/${item?._id || "blogId"}`, {
                            state: { blog: item },
                        })
                    }
                    className="mt-auto text-blue-600 hover:underline text-sm font-medium self-start cursor-pointer"
                >
                    Read More →
                </button>
            </div>
        </div>
    );
});

export default Blog;
