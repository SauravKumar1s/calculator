import React , {useState , useEffect} from "react";
import Heading from "../common/Heading";
import { CheckboxInput, CheckboxProfile } from "../common/Input";
import Title from "../common/Title";
import { LeftIcon, RightIcon } from "../svgicon";
import { useLocation, useNavigate } from "react-router-dom";
const ChooseSideWidthProfile = () => {
  const location = useLocation();
  const selectedSignId = location.state.id;
  const selectedSignName = location.state.discription;

  const [state, setState] = useLocalStorage({
    key: 'data_cal',
    defaultValue: {
      id: 1,
      name: 'LightBoxs',
      description: 'flexible face',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg',
    },
  })

  // State variable to store the selected sign's name
  const [selectedSign, setSelectedSign] = useState(null);

  useEffect(() => {
    // Update the selected sign's name when the component mounts
    setSelectedSign(selectedSignName);
  }, [selectedSignName]);

  
  // State variable to store the selected profile
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Function to handle selecting a profile
  const handleProfileSelection = (profile) => {
    setSelectedProfile(profile);
  };

  
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
  const navigate = useNavigate();
  const NavvigateRight = () => {
    navigate("/choose-color-profile");
  };
  const NavvigateLeft = () => {
    if (selectedCard !== null) {
      const selectedSign = signTypes[selectedCard];
      navigate("/choose-side-width", { state: { id: selectedSign.id, discription: selectedSign.description } });
    }
    
  };
  return (
    <div className="flex">
      <div className="w-2/3  border-r border-full-black h-3/4">
        <Title text="1" text2={state.discription}/>
        <div className=" px-10 py-2">
          <Heading text="2. Choose Side Width Profile" />
          <div
            className="grid grid-cols-1 mt-2 overflow-auto"
            style={{ maxHeight: "520px" }}
          >
              {/* <p>{selectedSign}</p> */}
           
            {/* Set a fixed height (maxHeight) for the container and add overflow-auto */}
            {signTypes.map((sign, index) => (
              <div
                key={index}
                className="flex gap-4 flex-col py-4 cursor-pointer"
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
        <div className="text-center mt-10">
          <Heading text="Size: X 321/ Y 321" />
        </div>
        <div className="text-center mt-10">
          <Heading text="Proportions of the sign:" />
        </div>
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-[#F9C06B] "></div>
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

export default ChooseSideWidthProfile;
