import React from "react";
import { NavLink } from "react-router-dom";

function Menus() {
    const menuList = [
        {
            path: "/",
            lable: "Home",
        },
        {
            path: "/about",
            lable: "About",
        },
        {
            path: "/service",
            lable: "Services",
        },
        {
            path: "/package",
            lable: "Packages",
        },
        {
            path: "/blog",
            lable: "Blog",
        },
        {
            path: "/contact",
            lable: "Contact",
        },
    ];
    return (
        <ul className="flex flex-row gap-0 items-center ">
            {menuList?.map((item, i) => (
                // <li
                //     className=" text-black uppercase px-5 py-2 bg-blue-500 rounded-lg cursor-pointer font-times-roman  hover:bg-transparent delay-75 font-semibold "
                //     key={i}
                // >
                //     <NavLink  to={item.path}>{item.lable}</NavLink>
                // </li>

                <NavLink to={item.path}>
                    <li
                        className=" text-gray-800 uppercase px-5 py-2  rounded-lg cursor-pointer font-times-roman  hover:bg-transparent delay-75 font-semibold "
                        key={i}
                    >
                        {item.lable}
                    </li>
                </NavLink>
            ))}
        </ul>
    );
}

export default Menus;
