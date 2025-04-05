import React from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

function Logo() {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate("/")}
            className=" gap-2 items-center cursor-pointer px-5 w-fit "
        >
            <LazyLoad className="flex items-center gap-2 md:gap-4">
                <img
                    className="lg:w-[80px] w-[50px] lg:h-[80px] h-[50px]"
                    src="/logo/GH_Logo.png"
                    alt="logo"
                />
                <span className="text-lg font-semibold text-gray-800 capitalize">
                    Ghoomo Kashi
                </span>
            </LazyLoad>

            {/* <h1 className="lg:text-[20px] text-[16px] font-bold underline cursor-pointer" >Ghoomokashi</h1> */}
        </div>
    );
}

export default Logo;
