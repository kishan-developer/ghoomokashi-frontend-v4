import React from "react";

function Package() {
    return (
        <div className="w-[80%] h-fit flex flex-col gap-5 items-center py-5">
            <Card />
        </div>
    );
}

function Card() {
    return (
        <div className="w-full h-[fit] bg-blue-500 rounded-lg p-5 flex flex-row gap-5">
            <div className="img w-[30%]">
                <img
                    src="/packages/Tr_500x500_package_card_1.svg"
                    alt=""
                    className="w-full"
                />
            </div>
            <div className="data w-full flex flex-1  bg-gray-300 rounded-lg p-5 "></div>
        </div>
    );
}

export default Package;
