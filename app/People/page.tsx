import React from "react";
import Friends from "./Friends";
import Family from "./Family";
import Mentors from "./Mentors";
import Connections from "./Connections";
import Investors from "./Investors";
const page = () => {
  return (
    <div>
      <Friends />
      <Family />
      <Mentors />
      <Connections />
      <Investors />
    </div>
  );
};

export default page;
