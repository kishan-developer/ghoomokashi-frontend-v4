function MissionSection() {
    return (
        <section className="w-[90%] max-w-7xl mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
                {/* Image Section (Now on Left) */}
                <div className="overflow-hidden  rounded-t-sm  md:rounded-l-sm">
                    <img
                        src={`${
                            "/services/Tr_1080x1080_services_page_6_.jpg" ||
                            "/public/placholder.jpg"
                        }`}
                        alt="Mission"
                        loading="lazy"
                        className="w-full h-full lg:max-h-[300px] object-cover hover:scale-105 transition-transform duration-300 object-center"
                    />
                </div>

                {/* Text Section */}
                <div className="bg-white  shadow p-6 flex flex-col justify-between rounded-b-sm  md:rounded-r-sm">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            Our Mission
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At{" "}
                            <span className="font-semibold text-red-500">
                                Ghoomo Kashi
                            </span>
                            , our mission is to redefine spiritual and cultural
                            travel in India. We aim to offer transformative
                            journeys that connect travelers to sacred places,
                            traditions, and unforgettable experiences, making
                            every trip deeply meaningful and smooth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionSection;
