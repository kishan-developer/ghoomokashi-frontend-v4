import React from "react";
import { FaPhoneVolume, FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import FAQSection from "../../Components/HomePageComponent/FAQSection";
import Contact_Us from "./Con_Com/Contact_Us";

function ContactPage() {
    return (
        <div className="min-h-screen lg:mt-50 mt-20 flex flex-col items-center ">
            {/* Banner Section */}

            {/* Contact Details & Form Section */}
            <div className="w-full lg:w-[80%] flex flex-col-reverse md:flex-row gap-10 ">
                {/* Contact Details */}
                <div className="w-full lg:w-[50%] p-5">
                    <h2 className="text-2xl sm:text-3xl font-bold font-[Poppins] mb-4">
                        Contact with Us for Any Help
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base">
                        We offer carefully curated destinations and tours that
                        capture the true essence of the location, ensuring you
                        have the best experience. Our attraction pass saves you
                        more than buying individual tickets.
                    </p>

                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-5 mt-5">
                        {/* Location */}
                        <div className="rounded-lg p-5 flex gap-3 bg-gray-100 text-black items-start">
                            <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-black text-xl sm:text-2xl bg-white rounded-full">
                                <FaMapMarkerAlt />
                            </span>
                            <div className="flex flex-col w-full px-2">
                                <p className="text-sm sm:text-base text-[#e8464b] mb-1">
                                    Our Location
                                </p>
                                <p className="text-sm sm:text-lg">
                                    Address : 2/5 Nati Imli, Ramanand Nagar
                                    Colony, Varanasi, Uttar Pradesh
                                </p>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="rounded-lg p-5 flex gap-3 bg-gray-100 text-black items-start">
                            <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-black text-xl sm:text-2xl bg-white rounded-full">
                                <FaPhoneVolume />
                            </span>
                            <div className="flex flex-col w-full px-2">
                                <p className="text-sm sm:text-base text-[#e8464b] mb-1">
                                    Phone Number
                                </p>
                                <p className="text-sm sm:text-lg">
                                    +91 9235171660
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="rounded-lg p-5 flex gap-3 bg-gray-100 text-black items-start">
                            <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-black text-xl sm:text-2xl bg-white rounded-full">
                                <MdAttachEmail />
                            </span>
                            <div className="flex flex-col w-full px-2">
                                <p className="text-sm sm:text-base text-[#e8464b] mb-1">
                                    Send Email
                                </p>
                                <p className="text-sm sm:text-lg">
                                    Support@ghoomokashi.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-[50%] bg-white md:shadow-lg rounded-2xl p-2 sm:p-10 ">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 lg:pl-0 pl-5">
                        Send Your Message!
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-4 lg:pl-0 pl-5">
                        We offer carefully curated destinations and tours that
                        capture the true essence of the location.
                    </p>
                    <Contact_Us />
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full flex items-center justify-center py-10 px-4">
                <FAQSection />
            </div>
        </div>
    );
}

export default ContactPage;
