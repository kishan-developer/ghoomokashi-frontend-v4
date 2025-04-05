import React from "react";
import { IoArrowUpSharp } from "react-icons/io5";
import { IoArrowDownSharp } from "react-icons/io5";

function DashboardCard({
    Icon,
    count,
    heading,
    growth,
    iconColor,
    growthData,
}) {
    const colorRGB = {
        red: "250, 0, 0",
        blue: "0, 0, 255",
        green: "0, 128, 0",
        yellow: "255, 255, 0",
    };
    return (
        <div className="w-full h-full p-3 space-y-2 bg-white rounded-md shadow-sm">
            {/* Icons And Heading */}
            <div className="flex items-center justify-between ">
                <div
                    className={`text-xl  p-2 rounded-md`}
                    style={{
                        backgroundColor: `rgba(${colorRGB[iconColor]}, 0.2)`, // 30% opacity
                        color: iconColor,
                    }}
                >
                    {Icon}
                </div>
                <h2 className="text-sm  font-medium capitalize text-gray-500 tracking-wide">
                    {heading}
                </h2>
            </div>
            {/* Count */}
            <div>
                <h3 className="text-2xl font-semibold tracking-wide text-gray-800">
                    {count}
                </h3>
            </div>
            <div
                className={`capitalize flex items-center gap-2 ${
                    growth ? "text-green-500" : "text-red-500"
                }`}
            >
                {growth ? <IoArrowUpSharp /> : <IoArrowDownSharp />}{" "}
                {growthData} Complete
            </div>
        </div>
    );
}

export default DashboardCard;
