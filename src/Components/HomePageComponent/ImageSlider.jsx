import React from "react";

const ImageSlider = () => {
    return (
        <div className="relative w-full lg:h-screen h-[70vh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                src="/ghoomokashi_banner.mp4" // Ensure the correct path & filename
                className="object-center object-cover h-full w-full"
            ></video>

            <div className="absolute lg:top-[50%] top-[50%] lg:left-[25%] lg:right-[25%] left-[10%] right-[10%] w-[full] h-[300px] bg-gray-500 bg-transparent ">
                <div className="w-full  lg:p-5 text-white flex flex-col gap-5 flex items-center justify-center">
                    <h2 className="text-center lg:text-[70px] text-[30px] font-semibold">
                        Ghoomo Kashi
                    </h2>
                    <p className="text-center lg:text-[20px] text-[18px] ">
                        Varanasi. Prayagraj. Gaya. Ayodhya
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
