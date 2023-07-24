import React from "react";

const Title = ({ text, text2 }) => {
  return (
    <div className="flex  border-r border">
      <p className="bg-gray-200 px-3">{text}</p>
      <p className="px-3">{text2}</p>
    </div>
  );
};

export default Title;
