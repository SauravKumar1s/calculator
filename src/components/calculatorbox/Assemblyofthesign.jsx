import React from 'react'
import Title from '../common/Title'
import Heading from '../common/Heading'
import ArrowTop from '../svgicon/ArrowTop'
import { LeftIcon, RightIcon } from '../svgicon'
import { CheckboxInput, CheckboxProfile } from '../common/Input'
import { useNavigate } from "react-router-dom";

const Assemblyofthesign = () => {
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
 <Title
          text="4"
          text2="material - plexiglass (thickness: 2mm)"
        />
        <div className="px-10 py-4">
            <div className="flex gap-6">
                <Heading text="5. Assembly of the sign:" />
               
            </div>
          
          

          <div className="flex gap-6 py-10">
          <div className="flex  gap-6">
            <CheckboxProfile label="Yes" />
            <CheckboxProfile label="No" />
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

export default Assemblyofthesign
