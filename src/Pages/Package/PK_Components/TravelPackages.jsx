import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TravelPackages() {
    const navigate = useNavigate();
    const travelPackages = useSelector((state) => state.packages.packages);
    const [search, setSearch] = useState("");

    const filteredPackages = travelPackages?.filter((pkg) =>
        pkg.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleData = (pkg) => {
        navigate(`/packag/${pkg._id}`, { state: { data: pkg } });
    };

    return (
        <div className="max-w-6xl mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Choose Your Perfect Getaway
            </h2>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search packages..."
                    value={search}
                    onChange={(e) => setSearch(e?.target?.value)}
                    className="w-full max-w-lg p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages?.length > 0 ? (
                    filteredPackages.map((pkg) => (
                        <div
                            key={pkg._id}
                            className="flex flex-col h-[540px] bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:border-red-500"
                        >
                            {/* Image */}
                            <img
                                src={pkg.ImageUrl}
                                alt={pkg.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5">
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {pkg.title}
                                </h3>

                                {/* Description (fixed height, no scroll, hides overflow text) */}
                                <div
                                    className="text-sm text-gray-600 mb-3 h-[60px] overflow-hidden"
                                    dangerouslySetInnerHTML={{
                                        __html: pkg?.content,
                                    }}
                                ></div>

                                {/* Duration */}
                                <p className="text-gray-700 text-sm font-medium mb-3">
                                    🕒 {pkg.days}
                                </p>

                                {/* Destinations (wrap, max height, overflow hidden) */}
                                <div className="flex flex-wrap gap-2 mb-4 max-h-[48px] overflow-hidden">
                                    {pkg.destination.map((item, i) => (
                                        <span
                                            key={i}
                                            className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm whitespace-nowrap"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons at Bottom */}
                                <div className="mt-auto flex gap-3">
                                    <button
                                        onClick={() => handleData(pkg)}
                                        className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-600 transition"
                                    >
                                        Enquiry Now
                                    </button>
                                    <button
                                        onClick={() => navigate("/contact")}
                                        className="w-full bg-gray-900 text-white font-medium py-2 rounded-md hover:bg-gray-950 transition"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 col-span-3">
                        No packages found. Try another search!
                    </p>
                )}
            </div>
        </div>
    );
}
