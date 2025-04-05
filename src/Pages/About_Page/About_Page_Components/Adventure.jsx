import React from 'react'

function Adventure() {
  return (
    <div className="w-[80%]  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 bg-blue-500 h-[700px] p-5" >
      <div className="bg-gray-300 flex flex-col gap-5">
      
      </div>

      <div className="bg-gray-300 flex flex-col gap-5 h-full">
        <img className="w-full h-[60%]" src="/varanasi_ghat.jpg" alt="ghat" />
        <img className="w-full h-[40%]" src="/varanasi_ghat.jpg" alt="ghat" />
      </div>

      <div className="bg-gray-300 flex flex-col gap-5 h-full">
        <img className="w-full h-[70%]" src="/varanasi_ghat.jpg" alt="ghat" />
        <div className="w-full h-[25%] px-3 font-semibold">
          <h2 className="text-[1.2rem]">Heading</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta unde assumenda tempore ab officiis odit eos, nesciunt tenetur est. Voluptatem!
        </div>
        
      </div>
    </div>

  )  
}

export default Adventure;