import React, { useState , useEffect } from "react";
import SectionHeading from "../Common/SectionHeading";

function TwoSection() {
    const [selectedCard, setSelectedCard] = useState(null); // Store the selected card's ID
    
    const cardData = [
        { 
            id: 1, 
            title: "One", 
            imgUrl: "./topSection/Tr_608x400_top_section_1.svg"
        },
        { 
            id: 2, 
            title: "Two", 
            imgUrl: "./topSection/Tr_608x400_top_section_2.svg" 
        },
        { 
            id: 3, 
            title: "Three", 
            imgUrl: "./topSection/Tr_608x400_top_section_3.svg"
        },
        { 
            id: 4, 
            title: "Four", 
            imgUrl: "./topSection/Tr_608x400_top_section_4.svg"
        }
    ];

    useEffect(()=> {
        // alert("one")
        setSelectedCard(cardData.length) // select the current data ( using card data length ) ( current data in slide card )
    }, [])

    return (
        <div className="w-full Banner bg-[url(./line-pattern2-1.webp)] bg-center bg-cover h-[fit] flex flex-col  gap-10 py-5 text-black items-center">
            <SectionHeading text="Top Destination" />

            <div className="cards_Parent w-[80%] p-2 flex lg:flex-row flex-col  gap-5 ">
                {cardData.map((item) => (
                    <Card
                        key={item.id}   
                        item={item}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                    />
                ))}
            </div>
        </div>
    );
}

function Card({ item, selectedCard, setSelectedCard }) {

    const isExpanded = selectedCard === item.id; 
    // check our id is matched or not if mached than ( isExpanded ( store true value ))

    

    return (
        <div
            onClick={() => setSelectedCard(isExpanded ? null : item.id)} // Toggle selection
            className={`p-5 card flex items-end cursor-pointer duration-500 ease-in-out lg:h-[70vh] w-full rounded-[30px] 
                ${isExpanded ? " lg:w-full w-full bg-cover bg-center opacity-100 text-white flex-1" : "lg:w-[175px] w-full bg-cover bg-center opacity-75 text-black"}
            `}
            style={{ backgroundImage: `url(${item.imgUrl})` }}
        >
            <h2 className="font-bold text-[1.3rem] text-white">{item.title}.</h2>
        </div>
    );
}

export default TwoSection;
