import React from "react";

const ImageSlider = () => {
    return (
        <div className="relative w-full lg:h-screen h-[70vh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                // src="/ghoomokashi_banner.mp4"
                src="https://res.cloudinary.com/ddrss0nel/video/upload/v1744184142/ghoomokashi_banner_svgsvg.mp4"
                className="object-center object-cover h-full w-full"
            ></video>

            <div className="absolute lg:top-[50%] top-[50%] lg:left-[25%] lg:right-[25%] left-[10%] right-[10%] w-[full] h-[300px] bg-gray-500 bg-transparent ">
                <div className="w-full  lg:p-5 text-white flex flex-col gap-5 flex items-center justify-center">
                    <h2
                        className="text-center lg:text-[80px] text-[30px] font-semibold "
                        style={{ fontFamily: "'allright', sans-serif" }}
                    >
                        Ghoomo Kashi
                    </h2>
                    <p className="text-center lg:text-[20px] text-[18px] font-medium">
                        Varanasi. Prayagraj. Gaya. Ayodhya
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
