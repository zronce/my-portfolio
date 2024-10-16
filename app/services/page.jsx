"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'I develop responsive and user-friendly websites using the latest technologies and best practices.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'I develop responsive and user-friendly websites using the latest technologies and best practices.',
    href: ""
  },
  {
    num: '03',
    title: 'Logo Design',
    description: 'I develop responsive and user-friendly websites using the latest technologies and best practices.',
    href: ""
  },
  {
    num: '04',
    title: 'Graphic Design',
    description: 'I develop responsive and user-friendly websites using the latest technologies and best practices.',
    href: ""
  },
]


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
      <motion.div initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4,
        ease: "easeIn"
      }}}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6
            group">
              {/* top */}
            <div className="w-full flex justify-between items-center">
             <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] flex justify-center items-center bg-white text-2xl text-white rounded-full
              hover:-rotate-45 group-hover:bg-accent transition-all duration-300">
              <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            {/* heading*/}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300"> {service.title}</h2>
            {/* description */}
            <p className="text-white/60"> {service.description}</p>
            {/* border */}
            <div className="border-b border-white/20 w-full"></div>
            </div>
          )
        })}
      </motion.div>
      </div>
    </section>
  )
}

{/* 22:36 */}
export default Services;
