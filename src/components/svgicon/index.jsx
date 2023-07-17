import React from "react";
import LeftIcons from "../svgicon/iconimg/lefticon.svg";
import RightIcons from "../svgicon/iconimg/righticon.svg";

export const LeftIcon = () => {
  return <img className="w-16 h-auto" src={LeftIcons} alt="lefticon" />;
};

export const RightIcon = () => {
  return <img className="w-16 h-auto" src={RightIcons} alt="righticon" />;
};
