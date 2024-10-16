// src/components/CircularTextCursor.js
import { useEffect, useState } from "react";

const CircularTextCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const textArray = "Web Designer"; // The text to display
  const radius = 30; // Distance of text from cursor

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}>
      {textArray.split("").map((letter, index) => {
        const angle = (index / textArray.length) * 2 * Math.PI; // Angle for each letter
        const xOffset = radius * Math.cos(angle); // X offset based on the angle
        const yOffset = radius * Math.sin(angle); // Y offset based on the angle

        return (
          <span
            key={index}
            className="letter"
            style={{
              position: "absolute",
              left: `calc(50% + ${xOffset}px)`,
              top: `calc(50% + ${yOffset}px)`,
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.8)",
              transition: "all 0.2s ease",
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default CircularTextCursor;
