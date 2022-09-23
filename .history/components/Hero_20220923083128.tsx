import React from 'react'
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from 'next/link';

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
        src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/299619666_435054268650613_3411321487384537039_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=24AdTgLmBMIAX93u-y9&_nc_ht=scontent-sea1-1.xx&oh=00_AT_dB69thcBSvo01h2TxwapX3eTRvI7kF69MC2rr_IP57g&oe=63328DE4"
        alt=""
      />
      <div className='z-20 relative' >
        <h2 className='tracking-[15px] text-sm uppercase text-gray-500 pb-2"'>
            Solar Guy
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-blue-100">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="blue-200" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Hero