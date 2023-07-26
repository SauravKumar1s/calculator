// LEDLightning.js
import React, { useState, useEffect } from "react";
import Title from "../common/Title";
import Heading from "../common/Heading";
import ArrowTop from "../svgicon/ArrowTop";
import { LeftIcon, RightIcon } from "../svgicon";
import { CheckboxInput, CheckboxProfile, CheckboxProfile2 } from "../common/Input";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import Proportions from "../common/Proportions";

const LEDLightning = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#F9C06B");
  const [selectedMaterial, setSelectedMaterial] = useState("plexiglass");
  const [selectedMaterialThickness, setSelectedMaterialThickness] = useState(
    "2mm"
  );
  const [selectedDividerSelect, setSelectedDividerSelect] = useState()
  const [selectedDivider, setSelectedDivider] = useState()
  const [selectedLightning, setSelectedLightning] = useState(null);
  const [selectedFace, setSelectedFace] = useState(null);
  const [selectedAssembly, setSelectedAssembly] = useState(null);


  const [storedData, setStoredData] = useLocalStorage({
    key: 'data_cal',
  })

  const [profile, setProfile] = useLocalStorage({
    key: 'store_profile',
  })

  const [color, setColor] = useLocalStorage({
    key: 'Color_store',
  })
  
  const [divider, setDivider] = useLocalStorage({
    key: 'selected_vertical_size_store',
  })

  const [material, setMaterial] = useLocalStorage({
    key: 'material_store',
  })

  const [materialThickness, setMaterialThickness] = useLocalStorage({
    key: 'material_thickness_store',
  })

  const [selectedCheckbox, setSelectedCheckbox] = useLocalStorage({
    key: 'selected_checkbox_store',
  })


  useEffect(() => {
    setSelectedSign(storedData);
  }, [storedData]);

  useEffect(() => {
    setSelectedProfile(profile);
  }, [profile]);

  useEffect(() => {
    setSelectedColor(color);
  }, [color]);

  useEffect(() => {
    setMaterial(selectedMaterial);
  }, [selectedMaterial]);

  useEffect(() => {
    setMaterialThickness(selectedMaterialThickness);
  }, [selectedMaterialThickness]);

  useEffect(() => {
    setSelectedDividerSelect(selectedCheckbox)
  }, [selectedCheckbox])

   useEffect(() => {
    setSelectedDivider(divider)
  }, [divider])

  const navigate = useNavigate();

  const NavvigateRight = () => {
    navigate("/assembly-of-the-sign");
  };

  const NavvigateLeft = () => {
    navigate("/material-of-face");
  };

  const handleLightningSelection = (label) => {
    setSelectedLightning(label);
    // Store selectedLightning in localStorage
    localStorage.setItem("selectedLightning", label);
  };

  const handleSelectionFace = (label) => {
    setSelectedFace(label);
    // Store selectedFace in localStorage
    localStorage.setItem("selectedFace", label);
  };

  const handleSelectionAssembly = (label) => {
    setSelectedAssembly(label);
    // Store selectedAssembly in localStorage
    localStorage.setItem("selectedAssembly", label);
  };

  useEffect(() => {
    // Restore selectedLightning from localStorage
    const savedLightning = localStorage.getItem("selectedLightning");
    if (savedLightning) {
      setSelectedLightning(savedLightning);
    }

    // Restore selectedFace from localStorage
    const savedFace = localStorage.getItem("selectedFace");
    if (savedFace) {
    setSelectedFace(savedFace);
    }

    // Restore selectedAssembly from localStorage
    const savedAssembly = localStorage.getItem("selectedAssembly");
    if (savedAssembly) {
      setSelectedAssembly(savedAssembly);
    }
  }, []);

  return (
    <div className="flex h-3/4">
      <div className="w-2/3 border-r border-full-black">
        {selectedSign && <Title text="1" text2={selectedSign.description} />}

        {selectedProfile && <Title text="2" text2={selectedProfile} />}

        {selectedColor && <Title text="3" text2={selectedColor} />}
      
{selectedDivider && <Title text="4" text2={selectedDivider}text3={selectedDividerSelect} />}
{selectedMaterial && (
          <Title
            text="5"
            text2={selectedMaterial}
            text3={selectedMaterialThickness}
          />
        )}

        {/* 4. LED lightning and el. installation: */}
        <div className="px-10 py-1">
          <div className="flex gap-6">
            <Heading text="4. LED lightning and el. installation:" />
          </div>

          <div className="flex gap-6 py-10">
            <div className="flex gap-6">
              <CheckboxProfile2
                label="Yes"
                isSelected={selectedLightning === "Yes"}
                onSelect={handleLightningSelection}
              />
              <CheckboxProfile2
                label="No"
                isSelected={selectedLightning === "No"}
                onSelect={handleLightningSelection}
              />
            </div>
          </div>

          <div className="flex gap-6">
            <CheckboxProfile2
              label="SloanlLED"
              isSelected={selectedLightning === "SloanlLED"}
              onSelect={handleLightningSelection}
            />
            <CheckboxProfile2
              label="GOQ LED"
              isSelected={selectedLightning === "GOQ LED"}
              onSelect={handleLightningSelection}
            />
            <CheckboxProfile2
              label="TMT LED"
              isSelected={selectedLightning === "TMT LED"}
              onSelect={handleLightningSelection}
            />
          </div>
        </div>

        {/* 5 . Face(vinyl,plexyglass): */}
        <div className="px-10 py-4">
          <div className="flex gap-6">
            <Heading text="5. Face(vinyl,plexyglass):" />
          </div>

          <div className="flex gap-6 py-10">
            <div className="flex gap-6">
              <CheckboxProfile2
                label="Yes"
                onSelect={handleSelectionFace}
                isSelected={selectedFace === "Yes"}
              />
              <CheckboxProfile2
                label="No"
                onSelect={handleSelectionFace}
                isSelected={selectedFace === "No"}
              />
            </div>
          </div>
        </div>

        {/* 6. Assembly of the sign: */}
        <div className="px-10 py-4">
          <div className="flex gap-6">
            <Heading text="6. Assembly of the sign:" />
          </div>

          <div className="flex gap-6 py-10">
            <div className="flex gap-6">
              <CheckboxProfile2
                label="Yes"
                onSelect={handleSelectionAssembly}
                isSelected={selectedAssembly === "Yes"}
              />
              <CheckboxProfile2
                label="No"
                onSelect={handleSelectionAssembly}
                isSelected={selectedAssembly === "No"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
      <Proportions/>
        <div className="flex justify-center items-center"></div>
        <div className="flex items-lett justify-end p-10">
          <div className="flex items-end justify-center gap-8">
            <div onClick={NavvigateLeft}>
              <LeftIcon />
            </div>
            <div onClick={NavvigateRight}>
              <RightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LEDLightning;
