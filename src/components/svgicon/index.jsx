import React from "react";
import LeftIcons from "../svgicon/iconimg/lefticon.svg";
import RightIcons from "../svgicon/iconimg/righticon.svg";

export const LeftIcon = ({onclick}) => {
  return <img className="w-16 h-auto" src={LeftIcons} alt="lefticon" onClick={onclick} />;
};

export const RightIcon = ({onclick}) => {
  return <img className="w-16 h-auto" src={RightIcons} alt="righticon" onClick={onclick} />;
};
