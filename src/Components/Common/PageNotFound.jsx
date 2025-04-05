import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-5">
            {/* 3D Icon */}
            <div className="relative">
                <FaExclamationTriangle className="text-[#E8464B] text-9xl drop-shadow-lg animate-bounce" />
                <div className="absolute -top-1 left-1 w-full h-full bg-[#E8464B] opacity-30 blur-lg"></div>
            </div>

            <h1 className="text-7xl font-extrabold text-gray-900 dark:text-gray-200 mt-4">
                404
            </h1>
            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
                Oops! Page Not Found
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
                The page you are looking for does not exist.
            </p>

            {/* Button */}
            <Link
                to="/"
                className="mt-6 px-6 py-3 text-white bg-[#E8464B] rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
                Go Home
            </Link>
        </div>
    );
}

export default PageNotFound;
