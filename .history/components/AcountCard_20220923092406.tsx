
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

function AcountCard({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
  >
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
      My Clients
    </h3>

    <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      
        <motion.div
          key=""
          className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen"
        >
          <Link key="" href="">
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/147697335_129553542357987_755596173781952822_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=Nv4l_Rdp5MsAX9TvFl-&tn=IVOxt8W0Ngmg8j-w&_nc_ht=scontent-sea1-1.xx&oh=00_AT8q9fI-nb1ZBCdcwp-FGgyLB5A8NV1AGFN237i9C7egzw&oe=63545BCF"
              className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
            />
          </Link>

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="decoration-[#F7AB0A]/50 underline">
                Roof Mount System
              </span>{" "}
              
            </h4>

            <p className="text-lg text-center md:text-left">
              
            </p>
          </div>
        </motion.div>
        <motion.div
          key=""
          className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen"
        >
          <Link key="" href="">
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/147697335_129553542357987_755596173781952822_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=Nv4l_Rdp5MsAX9TvFl-&tn=IVOxt8W0Ngmg8j-w&_nc_ht=scontent-sea1-1.xx&oh=00_AT8q9fI-nb1ZBCdcwp-FGgyLB5A8NV1AGFN237i9C7egzw&oe=63545BCF"
              className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
            />
          </Link>

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="decoration-[#F7AB0A]/50 underline">
                Roof Mount System
              </span>{" "}
              
            </h4>

            <p className="text-lg text-center md:text-left">
              
            </p>
          </div>
        </motion.div>
      
    </div>
    <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
  </motion.div>
  );
}

export default AcountCard