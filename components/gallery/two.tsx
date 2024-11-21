"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Element {
  id: number;
  img: string;
  widthClass: string; // Added widthClass for dynamic width
}

interface TwoProps {
  images: string[]; // List of image paths
}

const Two: React.FC<TwoProps> = ({ images }) => {
  const [activeItem, setActiveItem] = useState<Element | null>(null);
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    // Automatically generate IDs and random widths for the images once
    const elementsWithWidth = images.map((img, index) => {
      // Random width logic using tailwind classes
      const widthClasses = ["w-1/2", "w-5/12", "w-7/12", "w-3/12", "w-10/12"];
      const randomWidth = widthClasses[Math.floor(Math.random() * widthClasses.length)];

      return {
        id: index + 1,
        img,
        widthClass: randomWidth, // Assigning a random width class
      };
    });
    
    // Set the elements state with the computed width classes
    setElements(elementsWithWidth);
  }, [images]);

  // Group elements into rows of 2
  const rows = [];
  for (let i = 0; i < elements.length; i += 2) {
    rows.push(elements.slice(i, i + 2));
  }

  const handleItemClick = (ele: Element) => {
    setActiveItem(ele);
  };

  return (
    <div className="h-full w-full flex flex-col gap-5 relative">
      <motion.div
        className="flex flex-col gap-5"
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex w-full justify-between gap-4"
            animate={{
              opacity: activeItem !== null ? 0 : 1,
              willChange: "auto",
            }}
          >
            {row.map((ele, index) => (
              <Gallery
                key={ele.id}
                item={ele}
                onClick={() => handleItemClick(ele)}
                isSecondInRow={index === 1} // Pass the flag to determine if it's second in the row
              />
            ))}
          </motion.div>
        ))}
      </motion.div>

      {activeItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, willChange: "auto" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeItem.id}
              className="w-full h-full flex items-center justify-center gap-10 overflow-hidden"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              layout
            >
              <motion.div
                layoutId={`card-${activeItem.id}`}
                className="w-full h-full rounded-3xl center font-bold text-5xl cursor-pointer overflow-hidden z-10 "
                onClick={() => setActiveItem(null)}
              >
                <img
                  src={activeItem.img}
                  alt=""
                  className="w-full object-contain h-full rounded-xl"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-4 justify-center items-center"
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {elements
                  .filter((ele) => ele.id !== activeItem.id)
                  .map((ele) => (
                    <Gallery
                      key={ele.id}
                      item={ele}
                      onClick={() => handleItemClick(ele)}
                      isSmall
                    />
                  ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

const Gallery = (props: {
  item: Element;
  onClick: () => void;
  isSmall?: boolean;
  isSecondInRow?: boolean; // Flag for second image in a row
}) => {
  return (
    <motion.div
      className={cn(
        "relative h-48 rounded-2xl cursor-pointer text-3xl center overflow-hidden",
        props.isSecondInRow ? "w-full" : props.item.widthClass // If second in row, set to w-full
      )}
      layoutId={`card-${props.item.id}`}
      onClick={props.onClick}
    >
      <motion.img
        src={props.item.img}
        alt=""
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  );
};

export default Two;
