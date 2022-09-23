import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {}

function ContactMe({}: Props) {
  return (
    <motion.div>
        initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
   

    </motion.div>
  )
}

export default ContactMe