import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

function Menu() {
    const menuList = [
        {
            path: "/",
            lable: "Home",
            icon: <FaHome />,
        },
        {
            path: "/about",
            lable: "About",
            icon: <FaInfoCircle />,
        },
        {
            path: "/service",
            lable: "Services",
            icon: <MdOutlineMiscellaneousServices />,
        },
        {
            path: "/blog",
            lable: "Blog",
            icon: <FaBlogger />,
        },
        {
            path: "/contact",
            lable: "Contact",
            icon: <MdContacts />,
        },
    ];
    return (
        <div className="flex flex-col items-start  px-5">
            <h2 className="w-full items-start font-semibold text-[18px] uppercase">
                Pages
            </h2>
            <ul className="flex flex-col gap-1 items-start mt-5">
                {menuList?.map((item, i) => (
                    <li
                        className="px-5 py-2 flex flex-row items-center gap-2 rounded-lg cursor-pointer  "
                        key={i}
                    >
                        {item.icon ? (
                            <span className="flex flex-row gap-2 items-center text-black hover:text-[#e8464b] ">
                                <span className="text-[22px] border-[1px] border-black hover:border-[#e8464b]    px-2  py-2 rounded-full">
                                    {item.icon}
                                </span>
                                <NavLink to={item.path}>{item.lable}</NavLink>
                            </span>
                        ) : (
                            <span className="flex flex-row gap-2 items-center text-black hover:text-[#e8464b] ">
                                <img
                                    className="w-[40px] h-[40px] border-[1px] border-black hover:border-[#e8464b] p-2 rounded-full"
                                    src={
                                        item.iconUrl || "/public/placholder.jpg"
                                    }
                                    alt="icon"
                                    loading="lazy"
                                />
                                <NavLink to={item.path}>{item.lable}</NavLink>
                            </span>
                        )}

                        {/* <NavLink to={item.path}>{item.lable}</NavLink> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
