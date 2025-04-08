import React, { Suspense, lazy } from "react";

// Lazy load all sections
const ImageSlider = lazy(() =>
    import("../Components/HomePageComponent/ImageSlider")
);
const Services_section = lazy(() =>
    import("../Components/HomePageComponent/Services_section")
);
const Gallery = lazy(() => import("../Components/HomePageComponent/Gallery"));
const Blog = lazy(() => import("../Components/HomePageComponent/Blog"));
const Why = lazy(() => import("../Components/HomePageComponent/Why"));
const Testimonials = lazy(() =>
    import("../Components/HomePageComponent/Testimonials")
);
const FAQSection = lazy(() =>
    import("../Components/HomePageComponent/FAQSection")
);

function Home() {
    return (
        <div className="w-full flex flex-col items-center pb-10 z-0 ">
            {/* Image Slider */}
            <Suspense fallback={null}>
                <div className="w-full lg:h-screen h-[70vh]">
                    <ImageSlider />
                </div>
            </Suspense>

            {/* Services Section */}
            <Suspense fallback={null}>
                <div className="w-full flex items-center justify-center">
                    <Services_section />
                </div>
            </Suspense>

            {/* Gallery */}
            <Suspense fallback={null}>
                <div className="w-full flex items-center justify-center bg-gray-100">
                    <Gallery />
                </div>
            </Suspense>

            {/* Blog */}
            <Suspense fallback={null}>
                <div className="w-full flex items-center justify-center">
                    <Blog />
                </div>
            </Suspense>

            {/* Travel Highlight Banner */}
            <div
                className="w-full lg:h-[400px] h-fit bg-cover bg-center bg-no-repeat opacity-80 flex items-center justify-center bg-fixed font-semibold lg:text-[1.3rem] text-[16px]"
                style={{
                    backgroundImage:
                        "url(/banner/Ayodhya-Travels_1920X999_3.jpg)",
                }}
            >
                <div className="lg:w-[70%] w-[90%] py-10 flex flex-col items-center text-white gap-2">
                    <h2 className="font-bold text-center w-full lg:text-[25px] text-[18px]">
                        Experience Varanasi, Prayagraj, Ayodhya And Gaya with
                        Our Premium Travel Services
                    </h2>
                    <p className="text-center text-[16px]">
                        Embark on a memorable journey with our hassle-free car
                        rentals, hotel bookings, and flexible pickups. Let us
                        handle the details while you explore the vibrant
                        heritage of these spiritual cities.
                    </p>
                </div>
            </div>

            {/* Why Section */}
            <Suspense fallback={null}>
                <div className="w-full flex items-center justify-center bg-gray-100">
                    <Why />
                </div>
            </Suspense>

            {/* Testimonials */}
            <Suspense fallback={null}>
                <Testimonials />
            </Suspense>

            {/* FAQ */}
            <Suspense fallback={null}>
                <FAQSection />
            </Suspense>
        </div>
    );
}

export default Home;
