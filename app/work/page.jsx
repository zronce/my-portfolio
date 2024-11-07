"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowDown, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Kulitan Learning System",
    title: "project 1",
    description: "This thesis aims to develop a learning system about Pampanga's Kulitan Writing System with the help of Machine Learning.",
    stack: [{ name: 'nextjs' }, { name: 'typescript' }, { name: 'teachable machine' }],
    image: '/assets/work/thumb1.png',
    live: 'https://kulayan.vercel.app',
    github: 'https://github.com/zronce/kulayan/tree/main/kulitan'
  },
  {
    num: "02",
    category: "Weather Public",
    title: "project 2",
    description: "This project is a weather application that allows users to search for weather information for a specific city.",
    stack: [{ name: 'Vite' }, { name: 'React.JS' }, { name: 'OpenWeather API' }],
    image: '/assets/work/thumb2.png',
    live: 'https://weatherpublic.vercel.app',
    github: 'https://github.com/zronce/weather-app'
  },
  {
    num: "03",
    category: "VYKES MNL",
    title: "project 3",
    description: "This is a website for a local business that sells bikes, motorcycles, and other related products. Live demo is not available.",
    stack: [{ name: 'PHP' }, { name: 'Javascript' }, { name: 'XAMPP' }],
    image: '/assets/work/thumb_old.png',
    live: '',
    github: ''
  }
];

const figmaDesigns = [
  {
    num: "01",
    category: "Under Construction",
    title: "figma 1",
    description: "",
    stack: [{ name: 'DESIGNS' }],
    image: '/assets/work/',
    live: '',
    github: ''
  }
];

const Work = () => {
  const [project, setProjects] = useState(projects[0]);
  const [figma, setFigma] = useState(figmaDesigns[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProjects(projects[currentIndex]);
  };

  const handleFigmaSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setFigma(figmaDesigns[currentIndex]);
  };

  return (
    <>
      {/* Original Work Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/* Project Info Section */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 capitalize">
                  {project.category}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent text-xl">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  {project.live && (
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-500">
                            <BsArrowUpRight className="text-white text-3xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {project.github && (
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-500">
                            <BsGithub className="text-white text-3xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Slider Section */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                speed={600}
                preloadImages
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full h-full">
                    <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-lg"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover rounded-lg" alt="" loading="eager" priority />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-lg transition-all duration-500" />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
      <h2 className="text-3xl xl:text-4xl font-bold text-center text-white mb-8">
            DESIGN PROJECTS
          </h2>
      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 3, duration: 0.4, ease: "easeInOut" } }}
      >
        <BsArrowDown className="text-white text-3xl animate-bounce" />
      </motion.div>

      {/* New Figma Designs Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/* Figma Info Section */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {figma.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 capitalize">
                  {figma.category}
                </h2>
                <p className="text-white/60">{figma.description}</p>
                <ul className="flex gap-4">
                  {figma.stack.map((item, index) => (
                    <li key={index} className="text-accent text-xl">
                      {item.name}
                      {index !== figma.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Figma Slider Section */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                speed={600}
                preloadImages
                className="xl:h-[520px] mb-12"
                onSlideChange={handleFigmaSlideChange}
              >
                {figmaDesigns.map((design, index) => (
                  <SwiperSlide key={index} className="w-full h-full">
                    <div className="h-[460px] relative flex justify-center items-center bg-blue-50/20 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-lg"></div>
                      <div className="relative w-full h-full">
                        <Image src={design.image} fill className="object-cover rounded-lg" alt="" loading="eager" priority />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-lg transition-all duration-500" />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Work;
