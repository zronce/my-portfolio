"use client";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {

  SiNextdotjs,
  SiFigma,
  SiFramer,
  SiAdobephotoshop,
  SiCanva,
  SiJirasoftware,
  SiPostman,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Work Experience",
  description:
    "I have 300 hours of internship experience as a QA Tester and also a self-taught web designer.",
  items: [
    {
      position: "QA Tester Intern",
      company: "XURPAS Enterprise Inc.",
      date: "April 15 - July 5, 2024",
    },
    {
      position: "Lead Web Developer",
      company: "Thesis Project",
      date: "2023 - 2024",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "Since I was in Senior High School, I have been studying about Computer Technology and now I am a fresh graduate with a degree in Computer Science.",
  items: [
    {
      program: "Bachelor of Science in Computer Science",
      university: "Eulogio Amang Rodriguez Institute of Science and Technology",
      date: "August 2020 - September 2024",
  
    },
    {
      program: "Senior High School ICT",
      university: "AMA Basic Education of Apalit",
      date: "2017 - 2019",
      
    }
  ],
};

const skills = {
  title: "My Skills",
  description:
    "These are the technologies that I have experience with, not expert level but I can use them.",
  skillList: [
    { name: "React.JS", icon: <FaReact /> },
    { name: "Next.JS", icon: <SiNextdotjs /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Framer", icon: <SiFramer /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "Jira", icon: <SiJirasoftware /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
};

const about = {
  title: "About Me",
  description:
    "I'm a fresh graduate with a degree in Computer Science and internship experience as a QA Tester. I have a passion for creating beautiful and functional web application designs. I'm a quick learner and always looking to improve my skills.",
  info: [
    { fieldName: "Name", fieldValue: "Adrian Kyle Batac" },
    { fieldName: "Age", fieldValue: "25" },
    { fieldName: "Nationality", fieldValue: "Filipino" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.6, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {["experience", "education", "skills", "about"].map(tab => (
              <TabsTrigger key={tab} value={tab} className="bg-[#232329] text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition duration-300">
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[160px] py-4 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.date}</span>
                        <h3 className="text-lg max-w-[240px] min-h-[50px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-2">
                          <span className="w-[5px] h-[5px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
  <div className="flex flex-col gap-[20px] text-center xl:text-left">
    <h3 className="text-3xl font-bold">{education.title}</h3>
    <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">
      {education.description}
    </p>
    <ScrollArea className="h-[300px]"> {/* Reduced height */}
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]"> {/* Adjusted gap */}
        {education.items.map((item, index) => (
          <li key={index} className="bg-[#232329] py-4 px-6 rounded-xl flex flex-col justify-start items-start gap-1"> {/* Reduced padding */}
            <span className="text-accent">{item.date}</span>
            <h3 className="text-lg text-left">{item.program}</h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
              <p className="text-white/60 text-left">{item.university}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>


            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 xl:gap-[20px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 transition duration-300">
                              <div className="text-6xl group-hover:text-white transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>{skill.name}</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
