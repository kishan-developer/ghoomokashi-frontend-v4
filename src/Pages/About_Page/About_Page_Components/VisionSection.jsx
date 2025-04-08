function VisionSection() {
    return (
        <section className="w-[90%] max-w-7xl mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
                {/* Mobile Section */}
                <div className="overflow-hidden  rounded-t-sm md:hidden">
                    <img
                        src={`${
                            "/services/Tr_1080x1080_services_page_7_.jpg" ||
                            "/public/placholder.jpg"
                        }`}
                        alt="Travel"
                        loading="lazy"
                        className="w-full h-full lg:max-h-[300px] object-cover hover:scale-105 transition-transform duration-300 object-bottom"
                    />
                </div>
                {/* Text Section */}
                <div className="bg-white   p-6 flex flex-col justify-between rounded-b-sm md:rounded-l-sm ">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            Our Vision
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At{" "}
                            <span className="font-semibold text-red-500">
                                Ghoomo Kashi
                            </span>
                            , our mission is to inspire and empower travelers by
                            providing seamless, hassle-free travel experiences.
                            We offer personalized itineraries, expert guidance,
                            and top-notch service to make every journey
                            memorable and stress-free.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="overflow-hidden  rounded-r-sm hidden md:block">
                    <img
                        src={`${
                            "/services/Tr_1080x1080_services_page_7_.jpg" ||
                            "/public/placholder.jpg"
                        }`}
                        alt="Travel"
                        loading="lazy"
                        className="w-full h-full lg:max-h-[300px] object-cover hover:scale-105 transition-transform duration-300 object-bottom"
                    />
                </div>
            </div>
        </section>
    );
}

export default VisionSection;
