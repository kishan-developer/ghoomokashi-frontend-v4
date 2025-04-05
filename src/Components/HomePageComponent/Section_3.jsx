import React from 'react'
import SectionHeading from '../Common/SectionHeading';

function Section_3() {

    const cardData = [
        {
            id: 1,
            title: "Hotel Booking",
            imgUrl: "./indian-city-buildings-scene.jpg",
            decription: "Hotel Booking Content",
            price: 500
        },
        {
            id: 2,
            title: "Boat Booking",
            imgUrl: "./varanasi_ghat.jpg",
            decription: "decriptions",
            price: 500
        },
        {
            id: 1,
            title: "Train Booking",
            imgUrl: "./indian-city-buildings-scene.jpg",
            decription: "decriptions",
            price: 500
        },
        {
            id: 2,
            title: "Flight Booking",
            imgUrl: "./varanasi_ghat.jpg",
            decription: "decriptions",
            price: 500
        },
        {
            id: 3,
            title: "VIP Dharshan",
            imgUrl: "indian-city-buildings-scene_2.jpg",
            decription: "decriptions",
            price: 500
        },
        {
            id: 4,
            title: "Aarti",
            imgUrl: "./indian-city-buildings-scene.jpg",
            decription: "decriptions",
            price: 500
        },
        {
            id: 3,
            title: "Temple View",
            imgUrl: "indian-city-buildings-scene_2.jpg",
            decription: "decriptions",
            price: 500
        }
    ];

    return (
        <div className="parent flex flex-col w-full items-center  py-5  bg-white ">

            <SectionHeading text="Services" />
            {/* <p>Expert guides to enrich your spiritual experience.</p> */}

            <div
                className="w-[80%]  rounded-lg text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 h-[80vh] lg:px-5 lg:py-5 md:px-10 md:pb-20  my-2"
            >
                <div className="w-full rounded-lg">
                    <div
                        className="bg-[url(./topSection/Tr_608x400_top_section_3.svg)] bg-center bg-cover h-full w-full rounded-lg"
                    >
                    </div>
                </div>
                <div
                    className="content  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 overflow-y-scroll"
                >
                    {cardData.map((item) => (
                        <Card
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


function Card({ key, item }) {

    return (
        <div className="bg-gray-800 rounded-lg p-5 hover:font-bold h-[30vh] items-end text-white ">
            <h2 className="text-[1.2rem]">{item.title}</h2>
            <br />
            <p>₹{item.price}</p>
            <p> {item.decription}</p>
        </div>
    )
}

export default Section_3;