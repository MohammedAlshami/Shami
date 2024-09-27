"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
const page = () => {
  const places = [
    {
      imageUrl: "/Art/1.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/2.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/3.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/4.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/5.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/6.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/7.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/8.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/9.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/10.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/11.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/12.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/13.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/15.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/16.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/17.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
    {
      imageUrl: "/Art/18.jpg",
      title: "",
      author: "",
      bookUrl: "",
    },
  ];
  return (
    <div className="relative  mx-auto my-24">
      <h2 className="text-center text-5xl text-white font-bold py-12">
        My Art
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
