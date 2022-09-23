import React from 'react'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {}

function AcountCard({}: Props) {
  return (
    <motion.div>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

    </motion.div>
  )
}

export default AcountCard