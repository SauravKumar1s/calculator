import React from 'react'
import Title from '../common/Title'
import Heading from '../common/Heading'
import ArrowTop from '../svgicon/ArrowTop'
import { LeftIcon, RightIcon } from '../svgicon'
import { CheckboxInput, CheckboxProfile } from '../common/Input'
import { useNavigate } from "react-router-dom";

const Divider = () => {
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
        {/* 4. LED lightning and el. installation: */}
        <div className="px-10 py-4">
          <div className="flex gap-6 ">
            <Heading text="2a. Dividers:" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between w-full mt-10">
              <div>
                <CheckboxProfile label="verticle size of the sign" />
              </div>

              <div className="relative inline-flex">
                <select className="appearance-none w-full bg-[#D9D9D9] border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>options</option>
                  <option>1</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ArrowTop />
                </div>
              </div>
            </div>

            <CheckboxProfile label="horizontal size of the sign" />
            <CheckboxProfile label="without dividers" />
            <div className="flex w-full justify-between py-10 flex-row gap-6">
              <img
                className="w-44"
                src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg"
                alt="img"
              />
              <img
                className="w-44"
                src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg"
                alt="img"
              />
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
  )
}

export default Divider
