import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function AcountCard({}: Props) {
  return (
    <article>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src=""
              className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />

<div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          
            <img
              key="{technology._id}"
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
         
        </div>

    </article>

  )
}

export default AcountCard