"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Tooltip } from "@nextui-org/tooltip";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Head from "next/head";

const projects = [
  {
    title: "Drangue",
    description:
      "Drangue provides comprehensive disaster management, monitoring, and recovery plans aimed at saving lives and preventing casualties through proactive solutions.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Drangue-website.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Drangue-map.png",
    url: "https://drangue.ai",

    additionalIcons: [
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/flask.svg",
      },
      {
        name: "Nextjs",
        icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/vercel.svg",
      },
      {
        name: "AWS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg",
      },
      {
        name: "Vast.ai",
        icon: "https://pbs.twimg.com/profile_images/1615422456168349696/dGVX7YY6_400x400.jpg",
      },
      {
        name: "QGIS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/figma.svg",
      },
      {
        name: "Yolo",
        icon: "https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64994922cf2a6385a4bf4489_UltralyticsYOLO_mark_blue.svg",
      },
    ],
  },
  {
    title: "My Portfolio",
    description:
      "Just a portfolio website to showcase my projects and skills. I tried to use threejs here which I think is pretty cool",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-23 015736.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-23 015719.png",
    url: "https://shami-eight.vercel.app/",

    additionalIcons: [
      {
        name: "Nextjs",
        icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/vercel.svg",
      },
      {
        name: "ThreeJS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg",
      },
    ],
  },

  {
    title: "SlideMap",
    description:
      "An AI-powered landslide object detection and news scraper. I built this to assist research on generated landslide data in order to better understand landslides.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-23 015746.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-23 020023.png",
    url: "https://github.com/MohammedAlshami/SlideMapUI",

    additionalIcons: [
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/flask.svg",
      },
      {
        name: "Nextjs",
        icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/vercel.svg",
      },
      {
        name: "AWS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg",
      },
      {
        name: "Vast.ai",
        icon: "https://pbs.twimg.com/profile_images/1615422456168349696/dGVX7YY6_400x400.jpg",
      },
      {
        name: "Arcgis",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ArcGIS_logo.png/600px-ArcGIS_logo.png",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/figma.svg",
      },
      {
        name: "Yolo",
        icon: "https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64994922cf2a6385a4bf4489_UltralyticsYOLO_mark_blue.svg",
      },
    ],
  },

  {
    title: "Hololens",
    description:
      "This project demonstrates how to connect an Arduino to the HoloLens 2 and enable the HoloLens 2 to read data from the Arduino using serial communication.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/ezgif-1-db227e1cf3.gif",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/ezgif-1-5030031518.gif",
    url: "https://github.com/MohammedAlshami/hololens",

    additionalIcons: [
      {
        name: "Arduino",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/2048px-Arduino_IDE_logo.svg.png",
      },
      {
        name: "Unity 3d",
        icon: "https://www.svgrepo.com/show/342325/unity.svg",
      },
      {
        name: "MRTK 3",
        icon: "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/MRTK.png",
      },
      {
        name: "Photon Pun",
        icon: "https://yt3.googleusercontent.com/8RWXsxw6rqL6tLD4HzbQIeJY9RQpwMD21ATlw4fFTgpCV6wrR5W64WGPvukQ2b9wo4lJFxExgQ=s900-c-k-c0x00ffffff-no-rj",
      },
    ],
  },

  {
    title: "Duri: AI Companion",
    description:
      "An AI Companion bot that you can converse with and have fun chit chats with.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-25 161412.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-25 155239.png",
    url: "https://github.com/MohammedAlshami/Duri",

    additionalIcons: [
      {
        name: "Django",
        icon: "https://ai.ls/assets/openai-logos/PNGs/openai-logomark.png",
      },
      {
        name: "OPenAI",
        icon: "https://ai.ls/assets/openai-logos/PNGs/openai-logomark.png",
      },
    ],
  },
  {
    title: "Finance AI Chatbot",
    description:
      "An AI powered finance advisors that allows you to manage your finances and gives you personal advice to cut your costs down and improve your finances",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-25 153742.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Screenshot 2024-11-25 153823.png",
    url: "https://github.com/MohammedAlshami/UMHackathon",

    additionalIcons: [
      {
        name: "Flask",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/2048px-Arduino_IDE_logo.svg.png",
      },
      {
        name: "Nextjs",
        icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
    ],
  },
  {
    title: "First Aid Interactive Learning",
    description:
      "An interactive learning platform to teach palm oil employees how to manage emergencies and provide first aid to their colleagues.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/MacBook Pro 16_ - 15.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/MacBook Pro 16_ - 16.png",
    url: "https://github.com/MohammedAlshami/safetyhack",

    additionalIcons: [
      {
        name: "Nextjs",
        icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      },
      {
        name: "Figma",
        icon: "https://www.svgrepo.com/show/342325/unity.svg",
      },
    ],
  },
  {
    title: "Recipe Finder",
    description:
      "A recipe app to help college students and house wives to discover the best recipe available and publish their own.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Frame 21.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Frame 22.png",
    url: "https://github.com/MohammedAlshami/Recipe-Finder",

    additionalIcons: [
      {
        name: "Kotlin",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Arduino_IDE_logo.svg/2048px-Arduino_IDE_logo.svg.png",
      },
      {
        name: "Figma",
        icon: "https://www.svgrepo.com/show/342325/unity.svg",
      },
    ],
  },
  {
    title: "throw.",
    description:
      "An AI powered trash detection app that helps user in reccling their trash and find facilities where they can recyvle and event profit of it",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Group 134.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Group 135.png",
    url: "https://www.figma.com/design/Rpx1qbESuLcvA6Cq0u6E97/Portfolio?node-id=3-3051&node-type=canvas",

    additionalIcons: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/figma.svg",
      },
    ],
  },
  {
    title: "Binus",
    description:
      "A hotel management app that assists Binus hotel management with booking, catering, door access and more.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Frame 1.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/Frame 20.png",
    url: "https://www.figma.com/design/Rpx1qbESuLcvA6Cq0u6E97/Portfolio?node-id=3-5380&node-type=canvas",

    additionalIcons: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/figma.svg",
      },
    ],
  },
  {
    title: "Carlo Rino",
    description:
      "An improvement redesign of Carlo Rino e-commerce website to make it more vibrant.",
    imageUrl1:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/CARLO1.png",
    imageUrl2:
      "https://6f99yjvsh5fhfkn4.public.blob.vercel-storage.com/CARLO2.png",

    url: "https://www.figma.com/design/Rpx1qbESuLcvA6Cq0u6E97/Portfolio?node-id=158-65",

    additionalIcons: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/figma.svg",
      },
    ],
  },
];

const Page = () => {
  return (
    <div className="relative w-full overflow-x-hidden ">
      <Head>
        <title>3D Model</title>
        <meta name="description" content="My Projects" />
      </Head>
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
      <div className=" h-fit w-full py-12 bg-blue-200 flex flex-col justify-center items-center  ">
        <h2 className="mt-12 mb-4 lg:mt-0 logo is-animetion text-[4rem] lg:text-[12rem] text-yellow-300 wave-animation drop-shadow-lg transform ">
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
        <div className="grid grid-cols-1 gap-16 w-full px-3 sm:px-8">
          {projects.map((project, index) => (
            <div
              className="hover:cursor-pointer w-full rounded-2xl bg-white/40 rounded-xl backdrop-blur-xl"
              // href={project.url}
              key={index}
            >
              <div className="flex flex-col lg:flex-row justify-between p-4 pt-6 pl-6 rounded-2xl gap-12 lg:gap-24">
                <div className="flex flex-col justify-between w-full lg:w-7/12">
                  <div className="w-full">
                    <div className="flex w-full justify-between ">
                      <h2 className="text-4xl font-bold text-neutral-800 font-sans">
                        {project.title}
                      </h2>
                      <Tooltip
                        content="Go To Project"
                        className="font-sans font-bold "
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          className="flex lg:hidden  justify-center w-2/12 md:w-3/12 flex bg-white p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77c35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64c-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z"></path>
                          </svg>
                        </a>
                      </Tooltip>
                    </div>
                    <p className="text-neutral-800 font-sans font-medium text-lg w-full mt-6 lg:mt-2 ">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-end w-full mt-6 gap-8 ">
                    <div className="grid grid-cols-4 md:flex lg:grid  lg:grid-cols-4 gap-4 ">
                      {project.additionalIcons.map((icon, idx) => (
                        <Tooltip
                          key={idx}
                          content={icon.name}
                          className="font-sans font-bold"
                        >
                          <a
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
                      content="Go To Project"
                      className="font-sans font-bold "
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        className="hidden lg:flex  justify-center w-6/12 flex bg-white p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77c35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64c-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z"></path>
                        </svg>
                      </a>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-8/12">
                  <FollowerPointerCard
                    title={
                      <TitleComponent
                        avatar={
                          "https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-mascot-icon-illustration-of-bust-of-an-ancient-roman-emperor-png-image_4971369.png"
                        }
                      />
                    }
                    className={` group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 bg-transparent `}
                  >
                    <CardContainer
                      className="inter-var w-full bg-white/40 rounded-xl backdrop-blur-xl"
                      key={index}
                    >
                      <CardBody className="flex gap-8 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <CardItem translateZ="100" className="w-full">
                          <Image
                            src={project.imageUrl1}
                            height="500"
                            width="500"
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
                            height="500"
                            width="500"
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
