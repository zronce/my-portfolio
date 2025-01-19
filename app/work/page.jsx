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
import Head from "next/head";

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
    category: "SOLARMADE",
    title: "figma 1",
    description: "SolarMade is a leading provider of sustainable solar energy solutions, dedicated to harnessing the power of the sun to create clean, renewable energy for homes and businesses.",
    stack: [{ name: 'Figma' }],
    note: "Click the image to view the full design",
    image: '/assets/work/thumbd2.png',
    live: '/assets/work/solarmade.png', // Full image for preview
  },
  {
    num: "02",
    category: "MANGAN",
    title: "figma 2",
    description: "Mangan is a dynamic and modern brand specializing in authentic Kapampangan cuisine. With a commitment to quality and tradition, we bring the rich flavors of Pampanga to every dish.",
    stack: [{ name: 'Figma' }],
    note: "Click the image to view the full design",
    image: '/assets/work/thumbd1.png',
    live: '/assets/work/mangan.png', // Full image for preview
  },
  {
    num: "03",
    category: "KapeCo.",
    title: "figma 3",
    description: "KapeCo. crafts premium coffee, blending rich flavors and quality to inspire and energize with every cup.",
    stack: [{ name: 'Figma' }],
    note: "Click the image to view the full design",
    image: '/assets/work/thumbd3.png',
    live: '/assets/work/KapeCo.png', // Full image for preview
  }
];

const Work = () => {
  const [project, setProjects] = useState(projects[0]);
  const [figma, setFigma] = useState(figmaDesigns[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProjects(projects[currentIndex]);
  };

  const handleFigmaSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setFigma(figmaDesigns[currentIndex]);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  // Preloading Figma design images
  const preloadImages = figmaDesigns.map((design) => design.live);

  return (
    <>
      <Head>
        {preloadImages.map((imageSrc, index) => (
          <link
            key={index}
            rel="preload"
            href={imageSrc}
            as="image"
          />
        ))}
      </Head>

      {/* Original Work Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[20px]">
            {/* Project Info Section */}
            <div className="w-full xl:w-[50%] xl:h-[420px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[20px] h-[50%]">
                <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[36px] font-bold leading-none text-white transition-all duration-500 capitalize">
                  {project.category}
                </h2>
                <p className="text-white/70">{project.description}</p>
                <ul className="flex gap-3">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent text-lg">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-3">
                  {project.live && (
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-500">
                            <BsArrowUpRight className="text-white text-2xl" />
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
                          <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-500">
                            <BsGithub className="text-white text-2xl" />
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
                spaceBetween={20}
                slidesPerView={1}
                speed={600}
                preloadImages
                className="xl:h-[460px] mb-10"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full h-full">
                    <div className="h-[420px] relative flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-lg"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover rounded-lg" alt="" loading="eager" priority />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent text-primary text-[20px] w-[40px] h-[40px] flex justify-center items-center rounded-lg transition-all duration-500" />
              </Swiper>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center py-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 3, duration: 0.4, ease: "easeInOut" } }}
        >
          <BsArrowDown className="text-white text-2xl animate-bounce" />
        </motion.div>
      </motion.section>

      <h2 className="text-2xl xl:text-3xl font-bold text-center text-white mb-6">
        Personal Web Design Projects
      </h2>

      {/* New Figma Designs Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[60vh] flex flex-col justify-center py-8 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[20px]">
            {/* Figma Design Info Section */}
            <div className="w-full xl:w-[50%] xl:h-[420px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[20px] h-[50%]">
                <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                  {figma.num}
                </div>
                <h2 className="text-[36px] font-bold leading-none text-white transition-all duration-500 capitalize">
                  {figma.category}
                </h2>
                <p className="text-white/70">{figma.description}</p>
                <ul className="flex gap-3">
                  {figma.stack.map((item, index) => (
                    <li key={index} className="text-accent text-lg">
                      {item.name}
                      {index !== figma.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <p className="text-white/70">{figma.note}</p>
                <div className="border border-white/20"></div>
              </div>
            </div>

            {/* Figma Design Slider Section */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                speed={600}
                preloadImages
                className="xl:h-[460px] mb-10"
                onSlideChange={handleFigmaSlideChange}
              >
                {figmaDesigns.map((figma, index) => (
                  <SwiperSlide key={index} className="w-full h-full">
                    <div className="h-[420px] relative flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-lg"></div>
                      <div className="relative w-full h-full">
                        <Image src={figma.image} fill className="object-cover rounded-lg" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center overflow-auto">
          <div className="relative bg-white rounded-lg shadow-lg max-w-full sm:max-w-3xl w-full p-4 max-h-[90vh] overflow-auto">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50 bg-gray-800 hover:bg-gray-600 rounded-full p-2 transition duration-300"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Preview"
                layout="intrinsic"
                width={1000}
                height={1000}
                className="object-contain rounded-lg max-w-full max-h-[150vh]"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
