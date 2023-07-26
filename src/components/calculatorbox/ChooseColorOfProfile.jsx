import React, { useState, useEffect } from 'react'
import Heading from '../common/Heading'
import { CheckboxInput, CheckboxProfile } from '../common/Input'
import Title from '../common/Title'
import { LeftIcon, RightIcon } from '../svgicon'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@mantine/hooks'

const ChooseColorOfProfile = () => {
  // State to store the selected color
  // Retrieve the value from local storage using useLocalStorage
  const [selectedSign, setSelectedSign] = useState(null)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [selectedColor, setSelectedColor] = useState('#F9C06B')
  const [selectedDivider, setSelectedDivider] = useState()
  const [selectedDividerSelect, setSelectedDividerSelect] = useState()

  const [storedData, setStoredData] = useLocalStorage({
    key: 'data_cal',
  })

  const [profile, setProfile] = useLocalStorage({
    key: 'store_profile',
  })

  const [color, setColor] = useLocalStorage({
    key: 'Color_store',
    defaultFactory: () => '#F9C06B', // Set a default color value
  })

  const [divider, setDivider] = useLocalStorage({
    key: 'selected_vertical_size_store',
  })

  const [selectedCheckbox, setSelectedCheckbox] = useLocalStorage({
    key: 'selected_checkbox_store',
  })

  useEffect(() => {
    setSelectedSign(storedData)
  }, [storedData])

  useEffect(() => {
    setSelectedProfile(profile)
  }, [profile])

  useEffect(() => {
    setSelectedDivider(divider)
  }, [divider])

  useEffect(() => {
    setSelectedDividerSelect(selectedCheckbox)
  }, [selectedCheckbox])

  useEffect(() => {
    setSelectedColor(color)
  }, [color])

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value)
    setColor(event.target.value)
  }

  const navigate = useNavigate()
  const NavvigateRight = () => {
    navigate('/material-of-face')
  }
  const NavvigateLeft = () => {
    navigate('/divider')
  }
  return (
    <div className="flex h-3/4">
      <div className="w-2/3 border-r border-full-black">
        {selectedSign && <Title text="1" text2={selectedSign.description} />}

        {selectedProfile && <Title text="2" text2={selectedProfile} />}
        {selectedDivider && (
          <Title
            text="3"
            text2={selectedDivider}
            text3={selectedDividerSelect}
          />
        )}

        {}

        <div className="px-10 py-2">
          <Heading text="3. Choose Color of the Profile" />
          <div
            className="grid grid-cols-1 mt-2 overflow-auto"
            style={{ maxHeight: '520px' }}
          >
            {/* Color Picker */}
            <div className="flex justify-center items-center py-44 ">
              <input
                className="w-24"
                type="color"
                value={selectedColor}
                onChange={handleColorChange} // Use handleColorChange function here
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
       
        <div className="flex items-lett justify-end p-10">
          <div className="flex items-end justify-center gap-8">
            <LeftIcon onclick={NavvigateLeft} />
            <RightIcon onclick={NavvigateRight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseColorOfProfile
