"use client";
import { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const formattedTime = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZoneName: "short",
      }).format(currentTime);
      setTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <section className="pt-2 pb-10 xl:pt-0 xl:pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none">
          <div className="flex-1 flex gap-3 items-center justify-center xl:justify-start">
            <p className="text-3xl xl:text-5xl font-extrabold text-white font-roboto">
              {time}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeDisplay;
