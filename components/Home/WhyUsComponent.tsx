import React from 'react'
import Image from 'next/image'

const WhyUsComponent = (props: any) => {
  return (
    <div className="container flex h-full flex-col rounded-lg items-center bg-white py-5 px-4 lg:px-6 pb-0 drop-shadow-xl">
      <div className="aspect-w-7 aspect-h-6">
        <img
          src={props.image}
          alt="Handpicked tutor image"
          className="object-cover"
        />
      </div>

      <h1 className="mt-3 text-center text-xl font-bold text-[#1A3765] lg:text-2xl 2xl:text-3xl">
        {props.title}
      </h1>
      <p
        className="text-center  text-[#1A3765] text-lg md:text-xl lg:text-xl 2xl:text-2xl"
      >
        {props.description}
      </p>
    </div>
  )
}

export default WhyUsComponent
