import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";

const BlogSection = () => {
    const blogData = useSelector((state) => state?.blogs?.blogs ?? []);

    return (
        <section className="w-full py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Latest Blogs
                </h2>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {blogData?.map((item) => (
                        <BlogCard key={item?._id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const BlogCard = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-gray-400">
            {/* Image */}
            <LazyLoad>
                <img
                    src={item.ImageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                />
            </LazyLoad>

            {/* Blog Content */}
            <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-gray-500 mb-1">
                    {item.author?.name} • {item.author?.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {item.title}
                </h3>
                <p
                    className="text-sm  text-gray-600 mt-2 line-clamp-3"
                    dangerouslySetInnerHTML={{
                        __html: item?.content,
                    }}
                ></p>

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
};

export default BlogSection;
