import React, { useMemo, useState } from "react";
import SectionHeading from "../Common/SectionHeading";
import LazyLoad from "react-lazyload";

function Gallery() {
    const [data, setData] = useState();

    const row1 = useMemo(() => [
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
    ]);

    const row2 = useMemo(() => [
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
    ]);

    const row3 = useMemo(() => [
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
    ]);

    return (
        <div className="w-[90%] mx-auto py-10 flex flex-col items-center gap-8">
            <SectionHeading text="Gallery" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {[...row1, ...row2, ...row3].map((item, i) => (
                    <div
                        key={i}
                        className="relative overflow-hidden rounded-xl group aspect-[4/3] bg-gray-100"
                    >
                        <LazyLoad>
                            <img
                                src={item.url || "/public/placholder.jpg"}
                                alt={`galleryImg-${i}`}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-70"
                                loading="lazy"
                            />
                        </LazyLoad>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
