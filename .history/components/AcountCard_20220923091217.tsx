import React from 'react'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

      

    </motion.div>
  )
}

export default AcountCard