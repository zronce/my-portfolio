"use client"
import CountUp from "react-countup"

const stats = [
  {
    number: 0,
    text: "Years of Work Experience",
  },
  {
    number: 5,
    text: "Projects Completed",
  },
  {
    number: 9,
    text: "Web Dev Technologies",
  },
  {
    number: 3,
    text: "Graphic Design Tools",
  },
]

const Stats = () => {
  return (
    <section className="pt-2 pb-10 xl:pt-0 xl:pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div className="flex-1 flex gap-3 items-center justify-center xl:justify-start" key={index}>
                <CountUp end={item.number} duration={5} delay={2} className="text-3xl xl:text-5xl font-extrabold" />
                <p className={`${
                  item.text.length < 15 ? "max-w-[90px]" : "max-w-[130px]"
                } leading-snug text-white/80`}>
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div> 
    </section>
  )
}

export default Stats;
