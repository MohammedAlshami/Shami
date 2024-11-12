"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import parse from "html-react-parser";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    date: string;
    notes: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [selectedNotes, setSelectedNotes] = useState<string>(""); // State to hold notes for modal

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            notes={item.notes} // Pass notes to the Card component
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-64 object-cover rounded-xl"
            />
            <CardTitle>{item.title}</CardTitle>
            <div className="mt-4 text-zinc-400">
              <CardDescription>{item.description}</CardDescription>
            </div>
            <div className="mt-4 text-purple-600">
              <CardDescription>{item.date}</CardDescription>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  notes, // Accept the notes prop
}: {
  className?: string;
  children: React.ReactNode;
  notes: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <Modal>
          <ModalTrigger className="group/modal-btn">
            <div className="p-4 text-left">{children}</div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <div className="h-96 overflow-y-scroll text-white [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
                <h2 className="text-xl font-bold mb-4">Meeting Summary</h2>
                {/* Display the notes inside the modal */}

                <div className="text-sm leading-relaxed">{parse(notes)}</div>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Book Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
