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
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/147697335_129553542357987_755596173781952822_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=Nv4l_Rdp5MsAX9TvFl-&tn=IVOxt8W0Ngmg8j-w&_nc_ht=scontent-sea1-1.xx&oh=00_AT8q9fI-nb1ZBCdcwp-FGgyLB5A8NV1AGFN237i9C7egzw&oe=63545BCF"
              className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />

<div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">""</h4>
        <p className="font-bold text-2xl mt-1"></p>
        <div className="flex space-x-2 my-2">
          
            <img
              key=""
              className="h-10 w-10 rounded-full"
              src=""
            />
        </div>



        </div>

    </article>

  )
}

export default AcountCard