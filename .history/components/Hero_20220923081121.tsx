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
    <div className=''>
      <BackgroundCircles />  
    <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src=""
        alt=""
      />

    </div>
  )
}

export default Hero