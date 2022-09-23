import { motion } from "framer-motion";
import React from 'react'

type Props = {}

const Accounts = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center"
    >

<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        My Customers
      </h3>

        <div>
            <
        </div>
    </motion.div>
  )
}

export default Accounts