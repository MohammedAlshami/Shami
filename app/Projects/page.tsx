"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "Hololens",
    description: "A deep dive into CSS Grid Layout for responsive design.",
    imageUrl:
      "https://camo.githubusercontent.com/d85ff37796f979429fe631f2aa4581026fe6efda55d09ce628192a8fb7f2896d/68747470733a2f2f692e696d6775722e636f6d2f4d306d6a4651712e706e67",
  },
  {
    title: "SlideMap",
    description: "A deep dive into CSS Grid Layout for responsive design.",
    imageUrl: "https://picsum.photos/1000/1001",
  },
  {
    title: "EZPZ: Website Generator",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1002",
  },
  {
    title: "Recipe Finder",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1003",
  },
  {
    title: "Drangue",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1004",
  },
  {
    title: "Vr - Training",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1005",
  },
  {
    title: "Hackaten",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1006",
  },
  {
    title: "Duri",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1007",
  },
  {
    title: "Grapevine",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1008",
  },

  {
    title: "Realtime Palm Tree Detection",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1009",
  },
  {
    title: "Gamified Training",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl: "https://picsum.photos/1000/1010",
  },

  // Add more book objects as needed
];

const Page = () => {
  return (
    <div className="relative mx-12 my-24">
      <h2 className="text-center text-5xl text-white font-bold py-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6">
        {projects.map((project, index) => (
          <a className="hover:cursor-pointer" href="/Projects/Details">
            <CardContainer className="inter-var" key={index}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-11.9/12 h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.imageUrl}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;
