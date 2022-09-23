import React from 'react'
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
          `Hi, The name's Noe`,
          "....or, Noe the Solar Guy :)",
          "Need a Solar Quote?",
        ],
        loop: true,
        delaySpeed: 2000,
      });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />  
    <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src=""
        alt=""
      />
      <div className='z-20 relative' >
        <h2 className='tracking-[15px] text-sm uppercase text-gray-500 pb-2"'>
            Solar Guy
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        

      </div>

    </div>
  )
}

export default Hero