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
          "Or maybe grab some coffee?"
        ],
        loop: true,
        delaySpeed: 2000,

      });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />  
    <img
        className="relative opacity rounded-full h-40 w-40 mx-auto object-cover"
        src="/images/noe.png"
        alt=""
      />
      <div className='z-20 relative' >
        <h2 className='tracking-[15px] text-sm uppercase text-gray-500 pb-2"'>
            Solar Guy
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-blue-100">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="blue" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Accounts</button>
          </Link>

          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>

          <Link href="">
            <button className="heroButton">Testimonials</button>
          </Link>

          

          
        </div>

      </div>

    </div>
  )
}

export default Hero