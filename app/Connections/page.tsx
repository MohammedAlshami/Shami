import React from "react";
import Mentors from "@/components/People/Mentors";
import Connections from "@/components/People/Connections";
import Investors from "@/components/People/Investors";
const page = () => {
  return (
    <div>
      <Mentors />
      <Connections />
      <Investors />
    </div>
  );
};

export default page;
