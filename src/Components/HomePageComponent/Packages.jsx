import React from 'react'
import SectionHeading from '../Common/SectionHeading';

function Packages() {
    return (
        <div className="w-full h-fit bg-gray-300 text-black  flex flex-col items-center py-5 justify-center">
            <SectionHeading text="Packages" />
            <div className="w-[80%]  text-black h-fit rounded-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
                <PackagesCard />
                
            </div>
        </div>
    )
}

function PackagesCard(){
    return (
        <div className="w-full h-[300px] bg-white rounded-lg p-5 cursor-pointer " >
            Package Card
        </div>
    )
}

export default Packages;