import React from 'react';
import Heading from './Heading';
import { useLocation } from 'react-router-dom';

const Proportions = () => {
  const location = useLocation();
  const { horizontalInput, verticalInput } = location.state || {};

  return (
    <>
      <div className="text-center mt-10">
        <Heading text={`Size: X ${horizontalInput || ''} / Y ${verticalInput || ''}`} />
      </div>
      <div className="text-center mt-10">
        <Heading text="Proportions of the sign:" />
      </div>
      <div className="flex justify-center">
        <div className="w-24 h-24 bg-[#020101] "></div>
      </div>
    </>
  );
};

export default Proportions;

