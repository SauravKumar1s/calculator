import React from "react";

const Title = ({ text, text2 , text3 , text4 }) => {
  return (
    <div className="flex  border-r border">
      <p className="bg-gray-200 px-3">{text}</p>
      <p className="px-3">{text2}</p>
      <p className="px-3">{text3}</p>
      <p className="px-3">{text4}</p>
    </div>
  );
};

export default Title;
