import React from 'react'
import FirstSection from './FirstSection';
import SupportSection from './SupportSection';
import Menu from './Menu';
import ServicesMenu from './ServicesMenu';

function MenuSections() {
    return (
        <div
            className="w-full h-[fit] lg:px-5 px-2 bg-gray-300  flex lg:flex-row flex-col gap-5"
        >
            <div className="lg:w-[40%] w-full h-full lg:p-5 p-1">
                <FirstSection />

            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  h-full px-5 lg:py-20 py-5">
                {/* <h2>Package Manu</h2> */}
                <ServicesMenu />
                {/* <h2>Menu</h2> */}
                <Menu />
                {/* <h2>Support</h2> */}
                <SupportSection />
            </div>

        </div>
    )
}

export default MenuSections;