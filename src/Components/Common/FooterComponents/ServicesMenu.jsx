import React from 'react';
import { NavLink } from "react-router-dom";
import { GiSailboat } from "react-icons/gi";
import { RiHotelBedFill } from "react-icons/ri";
import { FaTrainSubway } from "react-icons/fa6";
import { MdOutlineFlight } from "react-icons/md";
import { RiVipLine } from "react-icons/ri";

function ServicesMenu() {
    const menuList = [
        {
            path: "/service",
            lable: "Hotel Booking",
            icon: <RiHotelBedFill />
        },
        {
            path: "/service",
            lable: "Bus Booking",
            icon: <GiSailboat />
        },
        {
            path: "/service",
            lable: "Boat Booking",
            icon: <GiSailboat />
        },
        {
            path: "/service",
            lable: "Car Booking",
            icon: <GiSailboat />
        },
        {
            path: "/service",
            lable: "Train Booking",
            icon: <FaTrainSubway />
        },
        {
            path: "/service",
            lable: "Flight Booking",
            icon: <MdOutlineFlight />
        },
        {
            path: "/service",
            lable: "VIP Darshan",
            icon: <RiVipLine />
        },
        {
            path: "/service",
            lable: "Aarti",
            icon: null,
            iconUrl: "/logo/candlestick.png"
        },
        {
            path: "/service",
            lable: "Temple View",
            icon: null,
            iconUrl: "/logo/temple.png"
        }
    ]
    return (
        <div className="flex flex-col items-start px-5">
            <h2 className="w-full items-start font-semibold text-[18px] uppercase ">SERVICES</h2>
            <ul className="flex flex-col gap-1 items-start mt-5">
                {
                    menuList?.map((item, i) => (
                        <li
                            className="px-5 py-2 flex flex-row items-center gap-2 rounded-lg cursor-pointer  "
                            key={i}
                        >
                            {
                                item.icon ? (
                                    <span className="flex flex-row gap-2 items-center text-black hover:text-[#e8464b] ">
                                        <span className="text-[22px] border-[1px] border-black hover:border-[#e8464b]    px-2  py-2 rounded-full">{item.icon}</span>
                                        <NavLink to={item.path}>{item.lable}</NavLink>
                                    </span>
                                ) : (

                                     <span className="flex flex-row gap-2 items-center text-black hover:text-[#e8464b] ">
                                            <img className="w-[40px] h-[40px] border-[1px] border-black hover:border-[#e8464b] p-2 rounded-full" src={item.iconUrl} alt="icon" />
                                        <NavLink to={item.path}>{item.lable}</NavLink>
                                    </span>
                                        
                                )
                            }

                            {/* <NavLink to={item.path}>{item.lable}</NavLink> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ServicesMenu

