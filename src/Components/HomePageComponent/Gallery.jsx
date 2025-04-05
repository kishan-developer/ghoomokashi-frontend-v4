import React, { useState } from "react";
import SectionHeading from "../Common/SectionHeading";
import LazyLoad from "react-lazyload";

function Gallery() {
    const [data, setData] = useState();

    const row1 = [
        {
            id: 1,
            url: "/gallery/Tr_306x364_gallerysec_1.1.jpg",
        },
        {
            id: 2,
            url: "/gallery/Tr_306x364_gallerysec_2.2.jpg",
        },
        {
            id: 3,
            url: "/gallery/Tr_306x364_gallerysec_3.3.jpg",
        },
        {
            id: 4,
            url: "/gallery/Tr_306x364_gallerysec_4.4.jpg",
        },
    ];

    const row2 = [
        {
            id: 2.1,
            url: "/gallery/Tr_415x322_gallerysec_4_415_.jpg",
        },
        {
            id: 2.2,
            url: "/gallery/Tr_415x322_gallerysec_2_.jpg",
        },
        {
            id: 2.3,
            url: "/gallery/Tr_415x322_gallerysec_3_.jpg",
        },
    ];

    const row3 = [
        {
            id: 5,
            url: "/gallery/Tr_306x364_gallerysec_10_.jpg",
        },
        {
            id: 6,
            url: "/gallery/Tr_306x364_gallerysec_9_.jpg",
        },
        {
            id: 7,
            url: "/gallery/Tr_306x364_gallerysec_7_.jpg",
        },
        {
            id: 8,
            url: "/gallery/Tr_306x364_gallerysec_8_.jpg",
        },
    ];

    return (
        <div className="w-[80%] py-5 flex flex-col items-center gap-5 ">
            {/* <h2 className="w-full text-[30px] font-bold  ">Gallery</h2> */}
            <SectionHeading text="gallery" />

            <div className="w-full  h-fit flex flex-col gap-5">
                <div className="firstRow w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 ">
                    {row1?.map((item, i) => (
                        <LazyLoad>
                            <img
                                className="hover:opacity-55 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                                src={item.url}
                                alt="galleryImg"
                            />
                        </LazyLoad>
                    ))}
                </div>

                <div className="secondrow w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
                    {row2?.map((item, i) => (
                        <LazyLoad>
                            <img
                                className="hover:opacity-55 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                                src={item.url}
                                alt="galleryImg"
                            />
                        </LazyLoad>
                    ))}
                </div>

                <div className="firstRow w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 ">
                    {row3?.map((item, i) => (
                        <div
                            className=" bg-center bg-cover h-[45vh] w-full hover:cursor-pointer flex items-center rounded-lg hover:opacity-75 justify-center transition-transform duration-300 ease-in-out hover:scale-105"
                            style={{ backgroundImage: `url(${item.url})` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
