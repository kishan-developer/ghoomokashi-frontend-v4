import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

function FirstSection() {
    return (
        <div className="w-full flex flex-col gap-5 lg:px-5 px-1 py-5">
            <img
                className="w-[100px] h-[100px] "
                src="/logo/GH_Logo.png"
                alt="logo"
                loading="lazy"
            />
            <h2 className="text-[1.5rem] font-bold">Ghoomo Kashi</h2>
            <h2>
                At <b>Ghoomo Kashi</b>, we are passionate about helping you
                explore the rich heritage and vibrant culture of Varanasi,
                Prayagraj, Ayodhya And Gaya.
            </h2>
            <h3 className="w-full text-[20px] font-semibold">
                Our Social Media
            </h3>
            <div className="flex text-[40px] flex-row gap-2 ">
                <span className="text-[#e8464b] hover:text-black">
                    <BiLogoInstagramAlt />
                </span>
                <span className="text-[#e8464b] hover:text-black">
                    <FaYoutube />
                </span>
                <span className="text-[#e8464b] hover:text-black">
                    <IoLogoFacebook />
                </span>
                <span className="text-[#e8464b] hover:text-black">
                    <RiTwitterXFill />
                </span>
            </div>
        </div>
    );
}

export default FirstSection;
