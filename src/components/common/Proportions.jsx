import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import { useLocation } from 'react-router-dom';

const Proportions = () => {
  const location = useLocation();

  const [horizontalValue,setHorizontalValue] = useState("");
  const [verticalValue,setVerticalValue] = useState("");
  const [isHorizontal,setIsHorizontal] = useState(false);
  const [isVertical,setIsVertical] = useState(false);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Dimensions'));
    if (items) {
      
      /* getting from local storage */
      setHorizontalValue(items[0].horizontalInput);
      setVerticalValue(items[1].verticalInput);
      setIsHorizontal(items[2].isHorizontal);
      setIsVertical(items[3].isVertical);
      console.log(items)
    }
  }, []);
 
  /* const containerClass = horizontalValue ? `w-${horizontalValue}px h-${verticalValue}px` : ''; */
  const containerStyle =   
  isVertical?
  ({
    width:  verticalValue ? `${verticalValue}px` : undefined,
    height:horizontalValue ? `${horizontalValue}px` : undefined,
  })
    :({
    width: horizontalValue ? `${horizontalValue}px` : undefined,
    height: verticalValue ? `${verticalValue}px` : undefined,
  });
  return (
    <>
      <div className="text-center mt-10">
        <Heading text={`Size:  ${horizontalValue || ''} /  ${verticalValue || ''}`} />
      </div>
      <div className="text-center mt-10">
        <Heading text="Proportions of the sign:" />
      </div>
      <div className="flex justify-center">
        <div className=  "bg-[#020101]"  style={containerStyle}></div>
      </div>
    </>
  );
};

export default Proportions;

