import React, { useState } from 'react';

function TestimonialSection() {
  const [currentdata, setCurrentData] = useState();
  const cardData = [
    { id: 1, title: "One", imgUrl: "./indian-city-buildings-scene.jpg" },
    { id: 2, title: "Two", imgUrl: "./varanasi_ghat.jpg" },
    { id: 3, title: "Three", imgUrl: "indian-city-buildings-scene_2.jpg" },
    { id: 4, title: "Four", imgUrl: "./indian-city-buildings-scene.jpg" }
  ];


  return (
    <div className="w-full h-[90vh] bg-blue-500 flex flex-col items-center justify-center  ">
      TestimonialSection
      <div className=" h-[80%] bg-gray-500 p-10 f
      lex flex-row ">

        {cardData?.map((item, i)=> (
          <TestimonialCard key={i} item={item} />
        ))}
       
      </div>
    </div>
  )
}

function TestimonialCard({ item }) {

  return (
    <div className="w-[80vw] h-full bg-blue-500 rounded-lg ">
      <h2>{item.title}</h2>
    </div>
    
  )
}

export default TestimonialSection;