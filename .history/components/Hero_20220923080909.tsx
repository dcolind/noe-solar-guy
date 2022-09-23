import React from 'react'
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
          `Hi, The name's Noe`,
          "....or, Noe the Solar Guy :)",
          "I love coffee",
        ],
        loop: true,
        delaySpeed: 2000,
      });

  return (
    <div>Hero</div>
  )
}

export default Hero