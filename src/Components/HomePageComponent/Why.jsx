import React from "react";
import LazyLoad from "react-lazyload";

function Why() {
    return (
        <div className="lg:w-[80%] w-[90%] lg:h-[70vh] h-fit py-5  ">
            <div className="flex lg:flex-row flex-col items-center justify-center bg-gray-100 rounded-lg h-full ">
                <div className="left lg:w-[60%] w-[90%]  lg:h-[60vh] p-5  ">
                    <img
                        src={`${
                            "/packages/Tr_500x500_package_card_3.svg" ||
                            "/public/placholder.jpg"
                        }`}
                        loading="lazy"
                        alt="ghat"
                        className="w-[100%] h-[100%] rounded-md"
                    />
                </div>

                <div className=" lg:w-[50%] w-[90%] py-10 flex flex-col items-start gap-2 ">
                    <h2 className="font-bold text-[25px] text-center w-full text-gray-800">
                        Why Choose Us?
                    </h2>
                    <h2 className="font-semibold text-center text-[20px] text-gray-700">
                        Why Book Your Varanasi, Prayagraj, Ayodhya And Gaya.
                        Trip with Us
                    </h2>
                    <p className="text-center text-gray-600">
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
}

export default Why;
