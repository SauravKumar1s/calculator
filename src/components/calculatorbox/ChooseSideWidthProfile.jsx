import React, { useState, useEffect } from 'react';
import Heading from '../common/Heading';
import { CheckboxProfile } from '../common/Input';
import { LeftIcon, RightIcon } from '../svgicon';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';
import Title from '../common/Title';
import { ProfileType } from '../data/ProfileType';
import Proportions from '../common/Proportions';

const ChooseSideWidthProfile = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [storedData, setStoredData] = useLocalStorage({
    key: 'data_cal',
  });
  

  const [profile, setProfile] = useLocalStorage({
    key: 'store_profile',
  });

  useEffect(() => {
    // Update the selected sign's name when the component mounts
    setSelectedSign(storedData);
  }, [storedData]);



  // Function to handle selecting a profile
  const handleProfileSelection = (profile) => {
    setSelectedProfile(profile);
    setProfile(profile); // Store the selected profile in local storage
  };


  const navigate = useNavigate();
  const NavvigateRight = () => {
    navigate('/divider');
  };

  const NavvigateLeft = () => {
  
 
      navigate('/');

  };

  return (
    <div className="flex">
      <div className="w-2/3 border-r border-full-black h-3/4">
        {selectedSign && <Title text="1" text2={selectedSign.description} />}

        <div className="px-10 py-2">
          <Heading text="2. Choose Side Width Profile" />

          <div className="grid grid-cols-1 mt-2 overflow-auto" style={{ maxHeight: '520px' }}>
            {ProfileType.map((sign, index) => (
              <div
                key={index}
                className="flex gap-4 flex-col py-4 cursor-pointer"
                onClick={() => setSelectedCard(index)}
              >
                <div className="w-3/4 h-auto">
                  <div className="flex flex-col gap-6">
                    <CheckboxProfile
                      label={sign.profile}
                      checked={sign.profile === selectedProfile}
                      onChange={() => handleProfileSelection(sign.profile)}
                    />
                    <img src={sign.imageUrl} alt={sign.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
       <Proportions/>

        <div className="flex items-lett justify-end p-10">
          <div className="flex items-end justify-center gap-8">
            <div onClick={NavvigateLeft}>
                    <LeftIcon  /> 
            </div>
     
<div onClick={NavvigateRight}><RightIcon  />
  </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSideWidthProfile;
