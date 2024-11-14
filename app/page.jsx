"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const text = "I'm a fresh graduate of Bachelor of Science in Computer Science with a passion for QA Testing and creating elegant digital experiences.";

  const languages = [
    "Hello, I'm",
    "Kumusta, ako si", // Filipino
    "Hola, soy", // Spanish
    "สวัสดี, ฉันคือ", // Thai
    "Bonjour, je suis", // French
    "Hallo, ich bin", // German
    "こんにちは、私は", // Japanese
    "안녕하세요, 저는", // Korean
    "你好，我是", // Chinese
  ];

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentLanguage((prev) => {
          const currentIndex = languages.indexOf(prev);
          return languages[(currentIndex + 1) % languages.length];
        });
        setIsTransitioning(false);
      }, 500); // Duration of the transition (matches the CSS transition duration)
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-20">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg user-select-none">QA Tester & Web Designer</span>
            <h1 className="h1 mb-5 user-select-none">
              <span
                className={`h2 ${isTransitioning ? "fade-out" : "fade-in"}`}
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning
                    ? "translateX(100%)"
                    : "translateX(0)",
                  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                }}
              >
                {currentLanguage}
              </span>
              <br />
              <span className="text-accent gradient-text">Kyle Batac</span>
            </h1>
            <p className="max-w-[450px] mb-7 text-white/80 whitespace-pre-wrap user-select-none">
              {text}
            </p>
            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              {/* Download Resume button */}
              <a href="/assets/resume2.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span className="text-sm">Download Resume</span>
                  <FiDownload className="text-lg" />
                </Button>
              </a>

              <div className="mb-6 xl:mb-0">
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="w-8 h-8 border border-accent rounded-full flex items-center text-accent justify-center text-base hover:bg-accent hover:text-primary hover:transition-all hover:duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
