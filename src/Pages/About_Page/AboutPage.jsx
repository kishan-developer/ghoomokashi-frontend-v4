import React from "react";
import MissionSection from "./About_Page_Components/MissionSection";
import FAQSection from "../../Components/HomePageComponent/FAQSection";
import VisionSection from "./About_Page_Components/VisionSection";

const AboutPage = () => {
    return (
        <section className="bg-gray-100">
            {/* Hero Section */}

            <div
                className="w-full h-[400px] bg-cover bg-center bg-no-repeat  flex items-center justify-center bg-fixed z-0 font-semibold text-[1.3rem] "
                style={{
                    backgroundImage:
                        "url(/banner/Ayodhya-Travels_1920X999_3.jpg)",
                }}
            >
                <div className=" w-[70%] py-10 flex flex-col items-start text-white gap-2  ">
                    <h2 className="font-semibold text-[20px] lg:text-[35px] border-b-5 border-[#e8464b] pr-10 py-2  ">
                        About
                    </h2>

                    {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}
                </div>
            </div>
            {/* About Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Your Trusted Travel Partner
                </h2>
                <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
                    Welcome to our travel services! We specialize in providing
                    the best travel experiences in Varanasi, Prayagraj, Ayodhya And Gaya. Whether you need car rentals, hotel bookings, or
                    guided tours, we ensure a smooth and unforgettable journey.
                </p>

                {/* Mission Section */}
                {/* <div className="mt-12 bg-blue-500 text-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-3 text-lg">
            Our mission is to provide seamless travel experiences with top-notch customer service, making your journey stress-free and memorable.
          </p>
        </div> */}
            </div>

            <div className="w-full flex items-center justify-center py-10 ">
                <MissionSection />
            </div>

            <div className="w-full flex items-center justify-center py-10 ">
                <VisionSection />
            </div>

            <div
                className="w-full lg:h-[400px] h-fit bg-cover bg-center bg-no-repeat opacity-80 flex items-center justify-center bg-fixed font-semibold lg:text-[1.3rem] text-[16px]"
                style={{
                    backgroundImage:
                        "url(/banner/Ayodhya-Travels_1920X999_3.jpg)",
                }}
            >
                <div className=" lg:w-[70%] w-[90%] py-10 flex flex-col items-center text-white gap-2  ">
                    <h2 className="font-bold text-center w-ful lg:text-[25px] text-[18px]">
                        Experience Varanasi, Prayagraj, Ayodhya And Gaya with
                        Our Premium Travel Services
                    </h2>

                    <p
                        className="text-center text-[16px]
          "
                    >
                        Embark on a memorable journey to Varanasi, Prayagraj, Ayodhya And Gaya with our premium travel services. We
                        offer hassle-free car rentals, straightforward hotel
                        bookings, and flexible pickup locations to suit your
                        needs. Our user-friendly booking process and clear
                        pricing ensure a smooth travel experience. Plus, with
                        24/7 customer support, we’re always ready to assist you.
                        Choose us to handle the details while you enjoy the rich
                        heritage and vibrant culture of Varanasi, Prayagraj, Ayodhya And Gaya.
                    </p>

                    {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}
                </div>
            </div>

            <div className="w-full flex items-center justify-center py-10 ">
                <FAQSection />
            </div>
        </section>
    );
};

export default AboutPage;
