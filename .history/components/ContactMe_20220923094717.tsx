import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

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

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-blue-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">1800-solar</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-blue-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">Noe@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text- h-7 w-7 animate-pulse" />
            <p className="text-2xl">1234 solarguy</p>
          </div>
        </div>

        <form
          onSubmit=""
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              placeholder="Name"
              type="text"
            
            />
            <input
              className="contactInput"
              placeholder="Email"
              type="text"
              
            />
          </div>
          <input
            className="contactInput"
            placeholder="Subject"
            type="text"
            
          />
          <textarea
            className="contactInput h-36"
            placeholder="Message"
           
          />

          <button
            type="submit"
            className="
            bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>

    </motion.div>
  )
}

export default ContactMe