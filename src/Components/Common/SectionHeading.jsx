import React from 'react'

function SectionHeading({ text }) {
  return (
    <h2
      className="font-semibold lg:text-[1.5rem] text-[1.3rem] uppercase border-b-5 border-[#e8464b] px-5"
    >
      {text}
    </h2>
  )
}

export default SectionHeading;

