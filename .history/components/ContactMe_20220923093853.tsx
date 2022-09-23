import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {}

function ContactMe({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >

<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

    </motion.div>
  )
}

export default ContactMe