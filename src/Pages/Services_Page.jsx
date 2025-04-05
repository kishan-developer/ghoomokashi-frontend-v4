import React from "react";

import { useSelector } from "react-redux";
import LeftImageRightContent from "../Components/ServicesPage_Components/Left_Img_Right_Content";
import RightImageLeftContent from "../Components/ServicesPage_Components/Right_Img_Left_Content";
import { useNavigate } from "react-router-dom";
function ServicesPage() {
    const { services } = useSelector((state) => state.services);
    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-col bg-gray-100">
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
                        Services{" "}
                    </h2>

                    {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full flex flex-col items-center py-10 space-y-8">
                {services?.map((item, index) =>
                    index % 2 === 0 ? (
                        <LeftImageRightContent
                            key={item._id}
                            item={item}
                            onBook={() => navigate("/contact")}
                        />
                    ) : (
                        <RightImageLeftContent
                            key={item._id}
                            item={item}
                            onBook={() => navigate("/contact")}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default ServicesPage;
