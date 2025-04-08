import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

export default function TravelPackages() {
    const navigate = useNavigate();
    const travelPackages = useSelector(
        (state) => state.packages.packages,
        shallowEqual
    );
    const [search, setSearch] = useState("");

    const filteredPackages = useMemo(() => {
        return travelPackages?.filter((pkg) =>
            pkg.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [travelPackages, search]);

    const handleData = useCallback(
        (pkg) => {
            navigate(`/packag/${pkg._id}`, { state: { data: pkg } });
        },
        [navigate]
    );

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
                            className="flex flex-col md:h-[400px] h-fit bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden transition hover:shadow-md hover:border-red-500"
                        >
                            {/* Image */}
                            <img
                                src={pkg.ImageUrl || "/public/placholder.jpg"}
                                loading="lazy"
                                alt={pkg.title}
                                className="w-full h-52 object-cover"
                            />

                            {/* Content */}
                            <div className="flex flex-col flex-1 px-4 py-3">
                                {/* Title */}
                                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                                    {pkg.title}
                                </h3>

                                {/* Description */}
                                <div className="text-xs text-gray-600 flex-1 leading-relaxed">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                (pkg?.content?.length > 150
                                                    ? pkg?.content
                                                          .slice(0, 150)
                                                          .trim() + "..."
                                                    : pkg?.content.trim()) ||
                                                "",
                                        }}
                                    ></div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={() => handleData(pkg)}
                                        className="w-full bg-red-500 text-white text-sm py-2 rounded hover:bg-red-600 transition"
                                    >
                                        Enquiry Now
                                    </button>
                                    <button
                                        onClick={() => navigate("/contact")}
                                        className="w-full bg-black text-white text-sm py-2 rounded hover:bg-gray-900 transition"
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
