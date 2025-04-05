import React from 'react'
import { NavLink } from "react-router-dom";




function MobileManu({ setMenuState, menuState }) {

    const menuList = [
        {
            path: "/",
            lable: "Home",
        },
        {
            path: "/about",
            lable: "About"
        },
        {
            path: "/service",
            lable: "Services"
        },
        {
            path: "/package",
            lable: "Packages"
        },
        {
            path: "/blog",
            lable: "Blog"
        },
        {
            path: "/contact",
            lable: "Contact"
        }
    ]

    return (
        <ul className="w-full flex flex-col gap-5 py-5 px-5 items-center justify-center bg-black  ">
            {
                menuList?.map((item, i) => (
                    <li
                        className="bg-white text-black px-5 py-2 w-fit rounded-lg cursor-pointer hover:text-white hover:bg-black delay-75 font-semibold "
                        key={i}
                    >
                        <NavLink onClick={() => setMenuState(!menuList)} to={item.path}>{item.lable}</NavLink>
                    </li>
                ))
            }
        </ul>
    )
}

export default MobileManu;