import React from "react";

const Page = () => {
  return (
    <div className="w-7/12 mt-14 flex flex-col h-screen justify-center items-center mx-auto">
      <h2 className="font-bold text-3xl text-white">Drangue Pitch V8</h2>
      <div className="relative w-full h-0 pt-[56.25%] mt-6 mb-4 shadow-lg overflow-hidden rounded-lg">
        <iframe
          loading="lazy"
          className="absolute w-full h-full top-0 left-0 border-none"
          src="https://www.canva.com/design/DAGQdgMVcH4/0ENzObzDACkqZzHLrjUFXg/view?embed"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
