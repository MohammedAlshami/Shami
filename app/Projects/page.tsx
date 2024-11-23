"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Tooltip } from "@nextui-org/tooltip";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const projects = [
  {
    title: "Drangue",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Drangue-website.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Drangue-map.png",
    url: "https://drangue.ai",

    additionalIcons: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg",
        link: "https://github.com/MohammedAlshami/Drangue",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/figma.svg",
        link: "https://www.figma.com",
      },
    ],
  },
  {
    title: "My Portfolio",
    description: "An essential guide to writing efficient JavaScript code.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-23 015736.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-23 015719.png",
    url: "https://shami-eight.vercel.app/",

    additionalIcons: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg",
        link: "https://github.com/MohammedAlshami/Drangue",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/figma.svg",
        link: "https://www.figma.com",
      },
    ],
  },

  {
    title: "SlideMap",
    description: "A deep dive into CSS Grid Layout for responsive design.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-23 015746.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-23 020023.png",
    url: "https://slidemap-ga7u5iy8c-mohammedalshamis-projects.vercel.app/",

    additionalIcons: [
      {
        name: "Nextjs",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg",
        link: "https://github.com/MohammedAlshami/SlideMapUI",
      },
      {
        name: "Arcgis",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/codepen.svg",
        link: "https://codepen.io",
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/codepen.svg",
        link: "https://codepen.io",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/codepen.svg",
        link: "https://codepen.io",
      },
      {
        name: "Yolo",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/codepen.svg",
        link: "https://codepen.io",
      },
    ],
  },

  {
    title: "Hololens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus finibus ante in auctor.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Drangue-website.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Drangue-map.png",
    url: "https://github.com/MohammedAlshami/hololens",

    additionalIcons: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg",
        link: "https://github.com/MohammedAlshami/hololens",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg",
        link: "https://www.linkedin.com",
      },
    ],
  },
];

const Page = () => {
  return (
    <div className="relative w-full p-4">
      <style jsx>{`
        .logo.is-animetion span {
          display: inline-block;
          animation: wave-text 1.5s ease-in-out infinite;
        }

        .logo.is-animetion {
          span:nth-of-type(1) {
            animation-delay: 0s;
          }
          span:nth-of-type(2) {
            animation-delay: 0.1s;
          }
          span:nth-of-type(3) {
            animation-delay: 0.2s;
          }
          span:nth-of-type(4) {
            animation-delay: 0.3s;
          }
          span:nth-of-type(5) {
            animation-delay: 0.4s;
          }
        }

        @keyframes wave-text {
          00% {
            transform: translateY(0em);
          }
          60% {
            transform: translateY(-0.2em);
          }
          100% {
            transform: translateY(0em);
          }
        }
      `}</style>
      <div className=" h-fit w-full py-12 bg-blue-200 flex flex-col justify-center items-center  rounded-3xl">
        <h2 className="logo is-animetion text-[4rem] lg:text-[12rem] text-yellow-300 wave-animation drop-shadow-lg transform ">
          <span>My</span>
          <span className="w-12"></span>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 w-full px-8">
          {projects.map((project, index) => (
            <div
              className="hover:cursor-pointer w-full rounded-2xl bg-white/40 rounded-xl backdrop-blur-xl"
              // href={project.url}
              key={index}
            >
              <div className="flex flex-col lg:flex-row justify-between p-4 pt-6 pl-6 rounded-2xl gap-12 lg:gap-8">
                <div className="flex flex-col justify-between w-7/12">
                  <div>
                    <h2 className="text-4xl font-bold text-neutral-800 font-sans">
                      {project.title}
                    </h2>
                    <p className="text-neutral-800 font-sans font-medium text-lg w-96 mt-2 ">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-between w-full">
                    <div className="grid grid-cols-3 gap-4 ">
                      {project.additionalIcons.map((icon, idx) => (
                        <Tooltip
                          key={idx}
                          content={icon.name}
                          className="font-sans font-bold"
                        >
                          <a
                            href={icon.link}
                            target="_blank"
                            className="bg-white p-3 size-14 rounded-full transition-transform duration-300 hover:-translate-y-4 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer"
                          >
                            <img
                              src={icon.icon}
                              alt={icon.name}
                              className="w-8 h-8"
                            />
                          </a>
                        </Tooltip>
                      ))}
                    </div>
                    <Tooltip
                      content="Go To Website"
                      className="font-sans font-bold"
                    >
                      <div className="flex justify-center w-6/12 flex bg-white p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77c35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64c-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z"></path>
                        </svg>
                      </div>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <FollowerPointerCard
                    title={
                      <TitleComponent
                        avatar={
                          "https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-mascot-icon-illustration-of-bust-of-an-ancient-roman-emperor-png-image_4971369.png"
                        }
                      />
                    }
                    className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 bg-transparent `}
                  >
                    <CardContainer
                      className="inter-var w-full bg-white/40 rounded-xl backdrop-blur-xl"
                      key={index}
                    >
                      <CardBody className="flex gap-8 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <CardItem translateZ="100" className="w-full">
                          <Image
                            src={project.imageUrl1}
                            height="1000"
                            width="1000"
                            className="h-32 sm:h-64 w-full  object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </FollowerPointerCard>
                  <FollowerPointerCard
                    title={
                      <TitleComponent
                        avatar={
                          "https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-mascot-icon-illustration-of-bust-of-an-ancient-roman-emperor-png-image_4971369.png"
                        }
                      />
                    }
                    className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 bg-transparent `}
                  >
                    <CardContainer
                      className="inter-var w-full bg-white/40 rounded-xl backdrop-blur-xl"
                      key={index}
                    >
                      <CardBody className="flex gap-8 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <CardItem translateZ="100" className="w-full">
                          <Image
                            src={project.imageUrl2}
                            height="1000"
                            width="1000"
                            className="h-32 sm:h-64 w-full  object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </FollowerPointerCard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const TitleComponent = ({ avatar }: { avatar: string }) => (
  <div className="flex space-x-2 items-center font-sans">
    <img
      src={avatar}
      height="70"
      width="70"
      alt="thumbnail"
      className="rounded-full border-2 border-white border-dotted"
    />
  </div>
);

export default Page;
