import React, { useState } from "react";
import Heading from "../common/Heading";
import { CheckboxInput } from "../common/Input";

const ChooseSideWidthProfile = () => {
    const signTypes = [
        {
          name: "LightBox",
          description: "flexible face",
          profile: "profile 16",
          imageUrl:
            "https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg",
        },
        {
          name: "LightBox",
          description: "acrylic face",
          profile: "profile 17",
          imageUrl:
            "https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg",
        },
        {
          name: "LightBox",
          description: "acrylic face",
          profile: "profile 18",
          imageUrl:
            "https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg",
        },
      ];
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="flex">
      <div className="w-2/3 px-10 py-2 border-r border-full-black h-3/4">
        <Heading text="2. Choose Side Width Profile" />
        <div className="grid grid-cols-1 mt-2 overflow-auto" style={{ maxHeight: "520px" }}>
          {/* Set a fixed height (maxHeight) for the container and add overflow-auto */}
          {signTypes.map((sign, index) => (
            <div
              key={index}
              className={`flex gap-4 flex-col py-4 cursor-pointer ${
                selectedCard === index ? "bg-gray-200 rounded-xl" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="w-3/4 h-auto">
                <CheckboxInput label={sign.profile} />
                <img src={sign.imageUrl} alt={sign.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
        {/* Additional content... */}
      </div>
    </div>
  );
};

export default ChooseSideWidthProfile;
