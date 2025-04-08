import React, { useMemo } from "react";
import SectionHeading from "../Common/SectionHeading";
import { FaHotel } from "react-icons/fa6";
import { FaSailboat } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
import { RiVipFill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";

function Services_section() {
    const cardData = useMemo(() => [
        {
            id: 1,
            title: "Hotel Booking",
            imgUrl: "./indian-city-buildings-scene.jpg",
            decription:
                "Book top-rated hotels at the best prices. Enjoy a comfortable and hassle-free stay. Choose from budget to luxury options.",
            price: 7000,
            icon: <FaHotel />,
        },
        {
            id: 2,
            title: "Boat Booking",
            imgUrl: "./varanasi_ghat.jpg",
            decription:
                "Experience the beauty of the river with our boat rides. Safe and affordable booking. Enjoy scenic views and peaceful rides.",
            price: 2500,
            icon: <FaSailboat />,
        },
        {
            id: 3,
            title: "Train Booking",
            imgUrl: "./indian-city-buildings-scene.jpg",
            decription:
                "Reserve your train tickets with ease. Get the best routes and fares instantly. Travel safely with confirmed ticket bookings.",
            price: 500,
            icon: <FaTrainSubway />,
        },
        {
            id: 4,
            title: "Flight Booking",
            imgUrl: "./varanasi_ghat.jpg",
            decription:
                "Find affordable flights to your destination. Quick booking with exclusive discounts. Travel comfortably with top airlines.",
            price: 500,
            icon: <MdFlight />,
        },
        {
            id: 5,
            title: "Bus Booking",
            imgUrl: "./varanasi_ghat.jpg",
            decription:
                "Book your bus tickets effortlessly. Enjoy safe and budget-friendly travel options. Choose from multiple routes and operators.",
            price: 500,
            icon: <FaBus />,
        },
        {
            id: 7,
            title: "Car Booking",
            imgUrl: "./varanasi_ghat.jpg",
            decription:
                "Hire a car for a smooth journey. Choose from a range of vehicles at great prices. Enjoy comfortable rides with expert drivers.",
            price: 500,
            icon: <AiFillCar />,
        },
        {
            id: 8,
            title: "VIP Dharshan",
            imgUrl: "indian-city-buildings-scene_2.jpg",
            decription:
                "Skip the queue with VIP Darshan. Enjoy a divine and peaceful temple visit. Get a closer view and an enriching experience.",
            price: 500,
            icon: <RiVipFill />,
        },
        {
            id: 9,
            title: "Aarti",
            icon: null,
            decription:
                "Witness the spiritual Aarti ceremony. Book your front-row experience now. Feel the divine energy and positive vibes.",
            price: 500,
            iconUrl: "/logo/candlestick.png",
        },
        {
            id: 10,
            title: "Temple View",
            icon: null,
            decription:
                "Enjoy breathtaking temple views. Experience the divine aura from a great spot. Capture the beauty of ancient architecture.",
            price: 500,
            iconUrl: "/logo/temple.png",
        },
    ]);

    return (
        <div className="w-full flex flex-col gap-2 items-center justify-center py-5 ">
            <SectionHeading text={"Services"} />
            <div className="w-[80%] h-[fit] lg:p-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   ">
                {cardData?.map((item, i) => (
                    <div className="rounded-lg p-5 flex flex-col  gap-3 bg-gray-300 text-black  hover:text-white hover:bg-[#e8464b] items-start ease-in-out transition-all duration-200 cursor-pointer">
                        {item.icon ? (
                            <span className="w-[60px] h-[60px] rounded-full p-4 text-black text-[30px] bg-white">
                                {item.icon}
                            </span>
                        ) : (
                            <span className="flex flex-row gap-2 items-center p-2 bg-white rounded-full  text-black hover:text-[#e8464b] ">
                                <img
                                    className="w-[40px] h-[40px] p-1 rounded-full"
                                    src={
                                        item.iconUrl || "/public/placholder.jpg"
                                    }
                                    alt="icon"
                                    loading="lazy"
                                />
                                {/* <NavLink to={item.path}>{item.lable}</NavLink> */}
                            </span>
                        )}

                        <div className="flex flex-col items-start w-full gap-0  px-2">
                            <p className="text-[20px] mb-2">{item.title}</p>
                            <p className="text-[15px]">{item.decription}</p>
                            {/* <p className="text-end px-5 w-full  text-[16px] text-red-500">₹{item.price}</p> */}
                            {/* <button
                                onClick={() => navigate("/contact")}
                                className="px-2 py-1 bg-black   text-white rounded-lg  mt-2 w-fit text-[14px] cursor-pointer">
                                Book Now
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services_section;
