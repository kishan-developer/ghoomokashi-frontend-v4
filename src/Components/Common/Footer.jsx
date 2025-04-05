import React from 'react'
import MenuSections from './FooterComponents/MenuSections';

function Footer() {
  return (
    <div className="w-full h-[fit] flex flex-col gap-2 bg-gray-800 ">

      <MenuSections />

      <h3 className="w-full text-center flex items-center justify-center py-5 text-white lg:text-[16px] text-[15px] px-10 ">
        Copyright 2021 | Made with ❤️ by Media FleetBlue.
      </h3>

    </div>
  )
}

export default Footer;