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
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <Card>
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
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <Modal>
          <ModalTrigger className=" group/modal-btn">
            <div className="p-4 text-left">{children}</div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <div className="h-96 overflow-y-scroll text-white [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full">
                <h2 className="text-xl font-bold mb-4">Meeting Summary</h2>
                <h3 className="text-lg font-semibold mb-2">
                  How to Commercialize It
                </h3>
                <ul className="list-disc ml-5 mb-4">
                  <li>Business to government approach</li>
                  <li>Understand the level of ego with the government</li>
                  <li>
                    It's challenging to work with governments, be mindful when
                    commercializing
                  </li>
                  <li>Reference: Urbanmetrey</li>
                  <li>
                    Social demographic data, natural disaster, high-risk areas
                  </li>
                  <li>
                    Hit the nail in the head with insurance, start with NGOs,
                    and expand from there
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">
                  Key Opportunities
                </h3>
                <ul className="list-disc ml-5 mb-4">
                  <li>Get a black box, funnel data for credit scoring</li>
                  <li>
                    Focus on property/town planning, target developers and town
                    hall officials
                  </li>
                  <li>End goal: Build something helpful for people</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">
                  Business Considerations
                </h3>
                <ul className="list-disc ml-5 mb-4">
                  <li>One person should focus on the business aspect</li>
                  <li>How to package solutions for companies to buy</li>
                  <li>Pricing strategy and learning how to run the business</li>
                  <li>Start with small agencies, collaborate with them</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">
                  Potential Partnerships
                </h3>
                <ul className="list-disc ml-5 mb-4">
                  <li>
                    Consider partnership with Antler, but be mindful of their
                    control
                  </li>
                  <li>
                    Other potential partners: LeetCapital, Founders Institute
                  </li>
                  <li>News station/media outlets could use the data</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">
                  Investments & Funding
                </h3>
                <ul className="list-disc ml-5 mb-4">
                  <li>Build traction before approaching investors</li>
                  <li>Focus on grants, study investments carefully</li>
                  <li>One person fully focused on securing investments</li>
                  <li>Collaborate with universities (e.g., UTP) for funding</li>
                  <li>Consider Petronas startup accelerator, Maxis ventures</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">
                  Networking & Events
                </h3>
                <ul className="list-disc ml-5 mb-4">
                  <li>Connect with Ammar Azfar Azli and HasanVC</li>
                  <li>
                    Participate in panel sessions and events to meet key people
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">
                  Entrepreneurial Mindset
                </h3>
                <ul className="list-disc ml-5">
                  <li>Don't be afraid of rejection; just ask</li>
                </ul>
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
