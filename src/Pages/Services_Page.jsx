import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LeftImageRightContent from "../Components/ServicesPage_Components/Left_Img_Right_Content";
import RightImageLeftContent from "../Components/ServicesPage_Components/Right_Img_Left_Content";

function ServicesPage() {
    const { services } = useSelector((state) => state.services);
    const navigate = useNavigate();

    // Memoized handler to avoid re-creating on each render
    const handleBook = useCallback(() => {
        navigate("/contact");
    }, [navigate]);

    // Render content blocks with alternating layouts
    const renderServices = () => {
        return services?.map((item, index) => {
            const Component =
                index % 2 === 0 ? LeftImageRightContent : RightImageLeftContent;

            return <Component key={item._id} item={item} onBook={handleBook} />;
        });
    };

    return (
        <div className="w-full flex flex-col bg-gray-100">
            {/* Hero Section */}
            <div
                className="w-full h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center bg-fixed text-white font-semibold text-[1.3rem]"
                style={{
                    backgroundImage:
                        "url(/banner/Ayodhya-Travels_1920X999_3.jpg)",
                }}
            >
                <div className="w-[70%] py-10 flex flex-col items-start gap-2">
                    <h2 className="font-semibold text-[20px] lg:text-[35px] border-b-4 border-[#e8464b] pr-10 py-2">
                        Services
                    </h2>
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full flex flex-col items-center py-10 space-y-8">
                {renderServices()}
            </div>
        </div>
    );
}

export default ServicesPage;
