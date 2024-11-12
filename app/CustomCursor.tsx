// components/CustomCursor.tsx
import React, { useEffect, useState, useRef } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(0);

  const debounceTime = 16; // Time in ms (60 FPS)

  // Use requestAnimationFrame for smoother animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only update the target position if enough time has passed
      const now = Date.now();
      if (now - lastMoveTime.current > debounceTime) {
        targetPosition.current = { x: e.clientX, y: e.clientY };
        lastMoveTime.current = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Calculate the new position using interpolation (lerp)
      setPosition((prevPosition) => ({
        x: prevPosition.x + (targetPosition.current.x - prevPosition.x) * 0.2, // Slightly smoother movement
        y: prevPosition.y + (targetPosition.current.y - prevPosition.y) * 0.2,
      }));
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute  top-0 left-0 size-12  rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-4 border-yellow-300 pointer-events-none transition-transform duration-0 z-[1000]"
    //   className="absolute  top-0 left-0 size-24  z-[1000]"

      style={{
        transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0)`, // Center the cursor
      }}
    >
      {/* <img
      className="w-full"
        src="https://png.pngtree.com/png-clipart/20230311/ourmid/pngtree-cute-school-anime-chibi-character-png-image_6644585.png"
        alt=""
      /> */}
    </div>
  );
};

export default CustomCursor;
