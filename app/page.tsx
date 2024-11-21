"use client";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import Head from "next/head";
import ImageMouseTrail from "@/components/ui/MouseTrail";

const images = [
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66eaf80ed6dbf2739a905cf8_Group%2016026.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66eaf7f1d6dbf2739a904333_Vector.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66eaf839857af3c499382240_Group%2016027%20(1).webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66eaf8565cbd6067a8ca8dfe_Group%2016029.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66eaf86c917b7ec3c4dbba81_Group%2016028.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66eaf8caffc645167d628fc8_Group%2016030.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66eaf8dccedcdf04a26cbd41_Group%2016031.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66eaf8e90566c8b259560297_Group%2016032.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038cfb6934e62c7a492e25_Indie-Hat%203.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038d10e99f61807017231d_FTA%20Cassette%202%201.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038d2b08c894e25e7ab2cb_ContentCal%20MemoryCard%201.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038d561b3aa6839353ea31_K%20AS%20Alphabet.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038d541b3aa6839353e938_FTA%20Tote%201.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038d5266c1c5b32741ff17_Lanyard%20Findrs%201.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038dc8ba810379422d4f34_Group%2016036%20(2).webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038d9bed6b98abe5793d43_Group%2016035%20(1).webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038d99dd4a4de648035fde_USB%20CC%202.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038e60e76e740a535367b8_Learnd%20Vest%201.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038e5f08c894e25e7c0e35_Group%2016037.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038f159edd187637dfb523_Ciphr%20Mailer%20V2%201.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038f127da4d863b09ef577_ContentCal_USB%201.webp",
  "https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/67038f11a9a3ffff0eaa63ef_FTA%20Screen%201.webp",
];

const Model = ({
  url,
  rotationX,
  rotationY,
}: {
  url: string;
  rotationX: number;
  rotationY: number;
}) => {
  const { scene, animations } = useGLTF(url);

  // Load and control animations
  const { actions } = useAnimations(animations, scene);

  // Start the first animation or trigger a specific one
  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play(); // Play the first animation
    }
  }, [actions]);

  // Apply both horizontal and vertical rotation to the model
  scene.rotation.x = rotationX;
  scene.rotation.y = rotationY;

  return <primitive object={scene} />;
};

const Page = () => {
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  const [rotationX, setRotationX] = useState(0.5);
  const [rotationY, setRotationY] = useState(0);
  const [modelSize, setmodelSize] = useState(7);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouse = (event: MouseEvent) => {
      clearTimeout(timeoutId); // Clear the previous timer
      timeoutId = setTimeout(() => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }, 10); // Delay of 100ms
    };
    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);
  useEffect(() => {
    const rotationFactorX = (mousePosition.y / window.innerHeight) * 2 - 1; // Normalize vertical mouse position to a range of -1 to 1
    const rotationFactorY = (mousePosition.x / window.innerWidth) * 2 - 1; // Normalize horizontal mouse position to a range of -1 to 1

    // Apply new rotation values
    setRotationX(rotationFactorX);
    setRotationY(rotationFactorY);
  }, [mousePosition]);
  useEffect(() => {
    setModelUrl("/Models/marcus_aurelius.glb"); // Ensure correct path

    // Scroll event to control rotation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationSpeedX = scrollY / 1000 + rotationY; // Adjust this value to control vertical rotation speed
      // setmodelSize(scrollY / 900 + modelSize);
      setRotationY(rotationSpeedX);
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

      <ImageMouseTrail
        items={images}
        maxNumberOfImages={3}
        distance={25}
        imgClass="sm:w-40 w-28 sm:h-48 h-36  z-[100000000000000] overflow-x-hidden"
      >
        <div className="relative overflow-x-hidden	overflow-y-hidden	">
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
            <div className="w-92 absolute bottom-10 left-[10rem] transform -translate-x-1/2  z-[10000]">
              <div className="font-sans font-bold  text-3xl flex flex-col space-y-4">
                <h2 className="text-neutral-800">
                  Follow me on social <br /> media
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MohammedAlshami"
                    className="bg-white  p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-4 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohammedshami"
                    className="bg-white p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-4 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-92 absolute bottom-10 right-[-8rem] transform -translate-x-1/2  z-[10000]">
              <div className="font-sans font-bold  text-3xl flex flex-col space-y-4">
                <h2 className="text-neutral-800">
                  Check Out My Coding <br /> Projects
                </h2>

                <a
                  href="/Projects"
                  className="w-full flex bg-white p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:fill-gray-100 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77c35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64c-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="absolute top-[14rem] left-1/12 h-[64rem] w-[38rem] z-20  hide-mouse-trail">
              <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[1, 0.9, 1]} intensity={1} />
                {modelUrl && (
                  <group scale={[modelSize, modelSize, modelSize]}>
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
        </div>
      </ImageMouseTrail>
    </>
  );
};

export default Page;
