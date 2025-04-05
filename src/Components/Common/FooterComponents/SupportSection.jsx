import React from 'react'
import { MdContacts } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function SupportSection() {
    return (
        <div className="w-full flex flex-col gap-5 ">
            <h2 className="text-[18px] font-semibold  uppercase">Contact Now </h2>
            <div className="px-2 py-2 flex flex-col items-start gap-2">
                {/* <h2 className="flex flex-row gap-2 items-center">
                    <span className="text-[22px] bg-[#e8464b] px-2 text-white py-2 rounded-full ">
                        <MdContacts />
                    </span >
                    Contact No: 1111111111
                </h2> */}


                <h2 className="flex flex-row gap-3 items-center">
                    <span className="text-[22px] bg-[#e8464b] px-2 text-white py-2 rounded-full ">
                        <MdEmail />
                    </span >
                    Email : Support@ghoomokashi.com
                </h2>


                <h2 className="flex flex-row gap-3 items-center">
                    <span className="text-[22px] bg-[#e8464b] px-2 text-white py-2 rounded-full ">
                        <FaPhoneVolume />
                    </span >
                    Phone : +91 9235171660


                </h2>


                <h2 className="flex flex-row gap-3 items-center  ">
                    <span className="text-[22px] bg-[#e8464b] px-2 text-white py-2 rounded-full ">
                        <FaAddressCard />
                    </span >
                    <span className="capatalize">Address : 2/5 Nati Imli,Ramanand Nagar Colony Varanasi Uttar Pradesh</span>
                </h2>

               
            </div>

        </div>
    )
}

export default SupportSection;