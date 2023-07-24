import React from "react";
import { LeftIcon, RightIcon } from "../svgicon";
import Heading from "../common/Heading";
import Title from "../common/Title";
import { CheckboxInput, TextInput } from "../common/Input";
import ArrowTop from "../svgicon/ArrowTop";
import { useNavigate } from "react-router-dom";

const MaterialOfFace = () => {
  const navigate = useNavigate();
  const NavvigateRight = () => {
    navigate("choose-side-width");
  };
  const NavvigateLeft = () => {
    navigate("/about");
  };
  return (
    <div className="flex h-3/4">
      <div className="w-2/3 border-r border-full-black">
        <Title text="1" text2="the chosen type of sign" />
        <Title text="2" text2="Profile 16" />
        <Title
          text="3"
          text2="coloring - red(for example) color of the profile"
        />

        <div className="px-10 py-4">
            <div className="flex gap-6">
                <Heading text="4. Choose Color of the Profile" />
          <div className="relative inline-flex">
            <select className=" appearance-none w-full bg-[#D9D9D9] border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>options</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ArrowTop />
            </div>
          </div>
            </div>
          
          

          <div className="flex gap-6 py-10">
            <Heading text="Think of material" />
            <div className="relative inline-flex">
            <select className=" appearance-none w-full bg-[#D9D9D9] border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>options</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ArrowTop />
            </div>
          </div>
          </div>

         
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
        <div className="text-center mt-10">
          <Heading text="Size: X 321/ Y 321" />
        </div>
        <div className="text-center mt-10">
          <Heading text="Proportions of the sign:" />
        </div>
        <div className="flex justify-center items-center"></div>
        <div className="flex items-lett justify-end p-10">
          <div className="flex items-end justify-center gap-8">
            <LeftIcon />
            <RightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialOfFace;
