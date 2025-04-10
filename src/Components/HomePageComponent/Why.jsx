import React from "react";

const Why = () => {
    return (
        <div className="w-[90%] lg:w-[80%] mx-auto py-10">
            <div className="flex flex-col lg:flex-row items-center  rounded-xl overflow-hidden">
                {/* Left Image Section */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
                    <img
                        src="/packages/Tr_500x500_package_card_3.webp"
                        alt="Ghat"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 p-6 text-center lg:text-left flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Why Choose Us?
                    </h2>
                    <h3 className="text-lg font-medium text-gray-700">
                        Why Book Your Varanasi, Prayagraj, Ayodhya And Gaya Trip
                        with Us
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        We make your trips to Varanasi, Prayagraj, Ayodhya And
                        Gaya simple and enjoyable. Our easy booking system, many
                        pickup locations, and no hidden fees ensure a smooth
                        experience from start to finish. We offer reliable car
                        rentals and hotel bookings to meet your travel needs.
                        Plus, our 24/7 support is here to help whenever you need
                        it. Choose us for a worry-free and memorable travel
                        experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Why;
