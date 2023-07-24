import React, { useState } from "react";
import Heading from "../common/Heading";
import { CheckboxInput, CheckboxProfile } from "../common/Input";
import Title from "../common/Title";
import { LeftIcon, RightIcon } from "../svgicon";
import { useNavigate } from "react-router-dom";

const ChooseColorOfProfile = () => {
  // State to store the selected color
  const [selectedColor, setSelectedColor] = useState("#F9C06B");

  // Function to handle color change
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
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

        <div className="px-10 py-2">
          <Heading text="2. Choose Color of the Profile" />
          <div
            className="grid grid-cols-1 mt-2 overflow-auto"
            style={{ maxHeight: "520px" }}
          >
            {/* Color Picker */}
            <div className="flex justify-center items-center py-44 ">
              <input
                className="w-24"
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
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
        <div className="flex justify-center items-center">
          <div
            className="w-24 h-24 bg-[#F9C06B] "
            style={{ backgroundColor: selectedColor }}
          ></div>
        </div>
        <div className="flex items-lett justify-end p-10">
        <div className="flex items-end justify-center gap-8">
            <LeftIcon onclick={NavvigateLeft}/>
            <RightIcon onclick={NavvigateRight}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseColorOfProfile;
