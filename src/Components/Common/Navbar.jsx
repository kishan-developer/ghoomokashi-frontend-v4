import React, { useState } from "react";
import Menus from "./NavbarComponents/Menus";
import Logo from "./NavbarComponents/logo";
import MobileManu from "./NavbarComponents/MobileManu";
import { MdMenuOpen } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [menuState, setMenuState] = useState(false);

    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-row items-center lg:justify-evenly justify-around px-0 py-3 text-center bg-[#f3f2ee]  text-black fixed top-0 z-100">
            <Logo />
            <div className="menu  hidden lg:block md:hidden sm:hidden xs:hidden ml-36">
                <Menus />
            </div>
            {menuState && (
                <div className=" w-full transition-transform duration-1000 text-black bg-white mobileMenu lg:hidden block absolute z-20 top-[9vh] left-[0%] right-[-50%]">
                    <MobileManu
                        setMenuState={setMenuState}
                        menuState={menuState}
                    />
                </div>
            )}
            <button
                onClick={() => navigate("/contact")}
                className="bg-[#e8464b] text-gray-50 lg:px-5 px-2 mx-2 py-2 rounded-lg font-semibold cursor-pointer  hidden lg:block uppercase "
            >
                Online Booking
            </button>
            <button
                className="lg:hidden text-[35px] px-5 cursor-pointer"
                onClick={() => setMenuState(!menuState)}
            >
                {" "}
                {menuState ? <IoCloseCircleSharp /> : <MdMenuOpen />}
            </button>
        </div>
    );
}

export default Navbar;
