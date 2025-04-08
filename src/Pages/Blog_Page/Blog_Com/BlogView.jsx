import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import parse, { domToReact } from "html-react-parser";

const BlogView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const blog = location.state?.blog;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to parse and render HTML content step by step
    const renderContent = (htmlString) => {
        return parse(htmlString, {
            replace: (domNode) => {
                if (domNode.type === "tag") {
                    const { name, attribs, children } = domNode;
                    switch (name) {
                        case "h1":
                            return (
                                <h1 className="text-2xl font-semibold text-gray-900 mt-5 mb-3 leading-snug">
                                    {domToReact(children)}
                                </h1>
                            );
                        case "h2":
                            return (
                                <h2 className="text-xl font-medium text-gray-800 mt-4 mb-2 leading-snug">
                                    {domToReact(children)}
                                </h2>
                            );
                        case "h3":
                            return (
                                <h3 className="text-lg font-medium text-gray-700 mt-3 mb-2 leading-snug">
                                    {domToReact(children)}
                                </h3>
                            );
                        case "p":
                            return (
                                <p className="text-gray-700 text-base leading-relaxed my-2">
                                    {domToReact(children)}
                                </p>
                            );
                        case "a":
                            return (
                                <a
                                    href={attribs.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline transition-all"
                                >
                                    {domToReact(children)}
                                </a>
                            );
                        case "ul":
                            return (
                                <ul className="list-disc ml-6 my-3">
                                    {domToReact(children)}
                                </ul>
                            );
                        case "ol":
                            return (
                                <ol className="list-decimal ml-6 my-3">
                                    {domToReact(children)}
                                </ol>
                            );
                        case "li":
                            return (
                                <li className="text-gray-700 text-base leading-relaxed my-1">
                                    {domToReact(children)}
                                </li>
                            );
                        default:
                            return domNode;
                    }
                }
            },
        });
    };

    const isAdminRoute = useMemo(
        () => location.pathname.startsWith("/admin"),
        [location.pathname]
    );
    return (
        <div
            className={`bg-white min-h-screen py-10 px-6  ${
                isAdminRoute ? "" : "mt-[60px] lg:mt-[80px]"
            }}`}
        >
            <div className="max-w-3xl mx-auto">
                {/* Back Button */}

                {blog ? (
                    <div className="mt-6">
                        {/* Blog Title */}
                        <h1 className="text-lg  md:text-[1.7rem]  font-semibold text-gray-800 leading-snug ">
                            {blog.title}
                        </h1>

                        {/* Blog Image */}
                        {blog.ImageUrl && (
                            <img
                                src={blog.ImageUrl || "/public/placholder.jpg"}
                                loading="lazy"
                                alt={blog.title}
                                className="w-full h-92  object-cover rounded-md mt-5"
                            />
                        )}

                        {/* Blog Content - Render step by step */}
                        <div className="mt-5">
                            {renderContent(blog.content)}
                        </div>

                        {/* Blog Meta */}
                        <div className="flex justify-between text-gray-500 text-sm border-t pt-4 mt-6">
                            <span>📅 {blog.author.date || "Unknown Date"}</span>
                            <span>
                                ✍️ By {blog.author?.name || "Anonymous"}
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-600 mt-12">
                        <p className="text-lg">No blog data available.</p>
                        <button
                            onClick={() => navigate("/")}
                            className="mt-6 px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                        >
                            Go to Home
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogView;
