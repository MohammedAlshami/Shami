"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
const page = () => {
  const places = [
    {
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*39M4XbHXCTfBenNNqLLyLA@2x.jpeg",
      title: "From",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYmE4MmNjZjUtNTEyNy00NTZiLWE4NTktYjM2NjBhYzQ1N2IzXkEyXkFqcGc@._V1_.jpg",
      title: "Suits",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://i.pinimg.com/originals/ac/f9/41/acf941157e3719eb7da2ce3426cc9133.jpg",
      title: "Friends",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://images.justwatch.com/poster/248751065/s718/how-to-sell-drugs-online-fast.jpg",
      title: "How to Sell Drugs Online (Fast)",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://1.vikiplatform.com/c/38899c/eb50ab8995.jpg",
      title: "Reborn Rich",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl:
        "https://asianwiki.com/images/d/d9/Start-Up-CP1.jpg",
      title: "Startup",
      author: "",
      bookUrl: "",
    },
  ];
  return (
    <div className="relative  mx-auto my-24">
      <h2 className="text-center text-5xl text-white font-bold py-12">
        My TV Shows List
      </h2>
      {/* Map through the list of places */}
      <div className="grid grid-cols-3">
        {places.map((place, index) => (
          <div key={index} className="m-4 hover:cursor-pointer">
            <DirectionAwareHover imageUrl={place.imageUrl}>
              <p className="font-bold text-xl">{place.title}</p>
              <p className="font-normal text-sm">{place.author}</p>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
