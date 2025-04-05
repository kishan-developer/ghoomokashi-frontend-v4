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

            {/* Packages Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages?.length > 0 ? (
                    filteredPackages.map((pkg) => (
                        <div
                            key={pkg._id}
                            className="border border-gray-200 bg-white rounded-lg overflow-hidden transition-all hover:border-red-500"
                        >
                            {/* Package Image */}
                            <img
                                src={pkg.ImageUrl}
                                alt={pkg.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Package Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {pkg.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    {pkg.content}
                                </p>
                                <p className="text-gray-700 font-medium mb-3">
                                    🕒 {pkg.days}
                                </p>

                                {/* Destinations */}
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {pkg.destination.map((item, i) => (
                                        <span
                                            key={i}
                                            className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex gap-3">
                                    <button
                                        onClick={() => handleData(pkg)}
                                        className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-600 transition-all"
                                    >
                                        Enquiry Now
                                    </button>
                                    <button
                                        onClick={() => navigate("/contact")}
                                        className="w-full bg-gray-800 text-white font-medium py-2 rounded-md hover:bg-gray-900 transition-all"
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
