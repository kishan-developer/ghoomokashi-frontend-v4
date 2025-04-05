import React from "react";
import Navbar from "../Components/Common/Navbar";
import TwoSection from "../Components/HomePageComponent/TwoSection";
import Section_3 from "../Components/HomePageComponent/Section_3";
import ServicesSection from "../Components/HomePageComponent/Blog";
import Blog from "../Components/HomePageComponent/Blog";
import Packages from "../Components/HomePageComponent/Packages";
import TestimonialSection from "../Components/HomePageComponent/TestimonialSection";
import Gallery from "../Components/HomePageComponent/Gallery";
import ImageSlider from "../Components/HomePageComponent/ImageSlider";
import Services_section from "../Components/HomePageComponent/Services_section";
import Testimonials from "../Components/HomePageComponent/Testimonials";
import Why from "../Components/HomePageComponent/Why";
import FAQSection from "../Components/HomePageComponent/FAQSection";

function Home() {
    return (
        <div className="w-full flex flex-col items-center  pb-10 z-0 ">
            <div className="w-full lg:h-screen h-[70vh]  ">
                {/* <div className="absolute top-0 left-0 w-full ">
          <Navbar />
        </div> */}
                <ImageSlider />
            </div>

            <div className="w-full flex items-center justify-center ">
                <Services_section />
            </div>

            {/* Second section  */}
            {/* <div className="hidden lg:block w-full">
        <TwoSection />
      </div> */}

            {/* Services card section  */}
            {/* <Section_3 /> */}

            {/* Gallery section  */}

            <div className="w-full flex items-center justify-center bg-gray-100 ">
                <Gallery />
            </div>

            {/* Packages */}
            {/* <Packages /> */}

            {/* blog section   */}

            <div className="w-full flex items-center justify-center  ">
                <Blog />
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
                        Embark on a memorable journey to Varanasi, Prayagraj,
                        Ayodhya And Gaya with our premium travel services. We
                        offer hassle-free car rentals, straightforward hotel
                        bookings, and flexible pickup locations to suit your
                        needs. Our user-friendly booking process and clear
                        pricing ensure a smooth travel experience. Plus, with
                        24/7 customer support, we’re always ready to assist you.
                        Choose us to handle the details while you enjoy the rich
                        heritage and vibrant culture of Varanasi, Prayagraj,
                        Ayodhya And Gaya.
                    </p>

                    {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}
                </div>
            </div>

            <div className="w-full flex items-center justify-center bg-gray-100  ">
                <Why />
            </div>

            {/* Testimonials */}
            <Testimonials />

            <FAQSection />
        </div>
    );
}

export default Home;
