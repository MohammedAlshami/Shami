"use client";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import Head from "next/head";
const Model = ({
  url,
  rotationX,
  rotationY,
}: {
  url: string;
  rotationX: number;
  rotationY: number;
}) => {
  const { scene, animations, isLoading } = useGLTF(url);

  // Load and control animations
  const { actions } = useAnimations(animations, scene);

  // Start the first animation or trigger a specific one
  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play(); // Play the first animation
    }
  }, [actions]);

  if (isLoading) return <div>Loading...</div>; // Show loading state

  // Apply both horizontal and vertical rotation to the model
  scene.rotation.x = rotationX;
  scene.rotation.y = rotationY;

  return <primitive object={scene} />;
};

const Page = () => {
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(5);

  useEffect(() => {
    setModelUrl("/Models/kotarou_-_gakuen_babysitters.glb"); // Ensure correct path

    // Scroll event to control rotation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationSpeedX = 0.001; // Adjust this value to control vertical rotation speed
      const rotationSpeedY = 0.001; // Adjust this value to control horizontal rotation speed
      setRotationX(scrollY * rotationSpeedX);
      setRotationY(scrollY * rotationSpeedY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <>
      {/* <CustomCursor /> */}
      <Head>
        <title>3D Model</title>
        <meta name="description" content="A 3D model loaded with Three.js" />
      </Head>

      <div className="relative">
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
        <div className="relative h-[44rem] bg-blue-200 flex justify-center items-center m-4 rounded-3xl">
          <h2 className="logo is-animetion text-[12rem] lg:text-[18rem] text-yellow-300 wave-animation drop-shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>M</span>
            <span>I</span>
          </h2>
          <div className="w-92 absolute bottom-10 left-[10rem] transform -translate-x-1/2 z-104">
            <div className="font-sans font-bold  text-3xl flex flex-col space-y-4">
              <h2 className="text-neutral-800">
                Follow me on social <br /> media
              </h2>
              <div className="flex gap-4">
                <div className="bg-white  p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-4 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
                  </svg>
                </div>
                <div className="bg-white p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-4 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-92 absolute bottom-10 right-[-8rem] transform -translate-x-1/2 z-104">
            <div className="font-sans font-bold  text-3xl flex flex-col space-y-4">
              <h2 className="text-neutral-800">
                Check Out My Coding <br /> Projects
              </h2>

              <div className="w-full flex bg-white p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77c35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64c-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute top-[14rem] left-1/12 size-[60rem] z-20">
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[1, 0.9, 1]} intensity={1} />
              {/* <OrbitControls enablePan={false} enableZoom={false} /> */}
              {modelUrl && (
                <group scale={[0.01, 0.01, 0.01]}>
                  <Model
                    url={modelUrl}
                    rotationX={rotationX}
                    rotationY={rotationY}
                  />
                </group>
              )}
            </Canvas>
          </div>
        </div>
        <div className="relative h-[42rem] bg-green-200 flex justify-center items-center m-4 rounded-3xl">
          <h3 className="text-4xl">Tech Stack</h3>
          {/* <IconCloudDemo/> */}
        </div>
        <div className="h-screen bg-red-200 flex justify-center items-center">
          <h3 className="text-4xl">News Features</h3>
        </div>
      </div>
    </>
  );
};

export default Page;
