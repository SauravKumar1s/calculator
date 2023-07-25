import { useState } from 'react'
import { CheckboxInput, TextInput } from '../common/Input'
import Heading from '../common/Heading'
import { RightIcon } from '../svgicon'
import { useNavigate } from 'react-router-dom'
import { signTypes } from '../data/signTypes'
import { useLocalStorage } from '@mantine/hooks'

const TypeOfSign = () => {
  const navigate = useNavigate()
  const [selectedCard, setSelectedCard] = useState(null)

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

  const handleCardClick = (index) => {
    setSelectedCard(index)
  }
  const NavvigateRight = () => {
    if (selectedCard !== null) {
      const selectedSign = signTypes[selectedCard]
      navigate('choose-side-width', {
        state: { id: selectedSign.id, discription: selectedSign.description },
      })
    }
  }

  return (
    <>
      <div className="flex">
        <div className="w-2/3 px-10 py-2 border-r border-full-black h-3/4">
          <Heading text="1. Type of sign " />
          <div className="grid grid-cols-2  mt-2 ">
            {signTypes.map((sign, index) => (
              <div
                key={index}
                className={`flex py-4 cursor-pointer ${
                  selectedCard === index ? 'bg-gray-200 rounded-xl' : ''
                }`}
                onClick={() => {
                  setState(sign)
                  navigate("choose-side-width")

                }}
              >
                <div className="w-32 h-auto">
                  <img src={sign.imageUrl} alt={sign.name} />
                </div>
                <div className="px-4 flex flex-col justify-center">
                  <Heading text={sign.name} />
                  <p className="text-xl">{sign.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 flex flex-col  justify-between ">
          <div className="text-center mt-10">
            <Heading text="Dimensions" />
          </div>

          <TextInput label="Horizontal" id="horizontal-input" unit="Cm" />
          <TextInput label="Vertical" id="vertical-input" unit="Cm" />
          <div className="px-14 flex flex-col gap-6">
            <CheckboxInput label="One-Sided" />
            <CheckboxInput label="Two-Sided" />
          </div>

          <div className="flex items-end justify-center ">
            <RightIcon onclick={NavvigateRight} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TypeOfSign
