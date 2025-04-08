import React, { lazy, Suspense } from "react";

// Lazy-loaded components
const MissionSection = lazy(() =>
    import("./About_Page_Components/MissionSection")
);
const VisionSection = lazy(() =>
    import("./About_Page_Components/VisionSection")
);
const FAQSection = lazy(() =>
    import("../../Components/HomePageComponent/FAQSection")
);

const AboutPage = () => {
    return (
        <section className="bg-gray-100">
            {/* Hero Section */}
            <div
                className="w-full h-[400px] bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center z-0 font-semibold text-[1.3rem]"
                style={{
                    backgroundImage:
                        "url(/banner/Ayodhya-Travels_1920X999_3.jpg)",
                }}
            >
                <div className="w-[70%] py-10 flex flex-col items-start text-white gap-2">
                    <h2 className="font-semibold text-[20px] lg:text-[35px] border-b-5 border-[#e8464b] pr-10 py-2">
                        About
                    </h2>
                </div>
            </div>

            {/* Intro Content */}
            <div className="max-w-6xl mx-auto px-9 pb-4 pt-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Your Trusted Travel Partner
                </h2>
                <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                    Welcome to our travel services! We specialize in providing
                    the best travel experiences in Varanasi, Prayagraj, Ayodhya,
                    and Gaya. Whether you need car rentals, hotel bookings, or
                    guided tours, we ensure a smooth and unforgettable journey.
                </p>
            </div>

            {/* Lazy Sections */}
            <Suspense fallback={null}>
                <div className="w-full flex items-center justify-center py-4">
                    <MissionSection />
                </div>
                <div className="w-full flex items-center justify-center pb-4">
                    <VisionSection />
                </div>
                <div
                    className="w-full lg:h-[400px] h-fit bg-cover bg-center bg-no-repeat opacity-80 flex items-center justify-center bg-fixed font-semibold lg:text-[1.3rem] text-[16px]"
                    style={{
                        backgroundImage:
                            "url(/banner/Ayodhya-Travels_1920X999_3.jpg)",
                    }}
                >
                    <div className="lg:w-[70%] w-[90%] py-10 flex flex-col items-center text-white gap-2">
                        <h2 className="font-bold text-center w-full lg:text-[25px] text-[18px]">
                            Experience Varanasi, Prayagraj, Ayodhya And Gaya
                            with Our Premium Travel Services
                        </h2>
                        <p className="text-center text-[16px]">
                            Embark on a memorable journey to Varanasi,
                            Prayagraj, Ayodhya and Gaya with our premium travel
                            services. We offer hassle-free car rentals, hotel
                            bookings, and flexible pickup locations to suit your
                            needs. Our user-friendly booking process and 24/7
                            support ensure a smooth experience.
                        </p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center py-10">
                    <FAQSection />
                </div>
            </Suspense>
        </section>
    );
};

export default AboutPage;
