import React, { useState, useEffect } from 'react'
import Title from '../common/Title'
import Heading from '../common/Heading'
import ArrowTop from '../svgicon/ArrowTop'
import { LeftIcon, RightIcon } from '../svgicon'
import { CheckboxProfile } from '../common/Input'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@mantine/hooks'
import Proportions from '../common/Proportions'

const Divider = () => {
  const [selectedSign, setSelectedSign] = useState(null)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [selectedColor, setSelectedColor] = useState('#F9C06B')
  const [selectedDivider, setSelectedDivider] = useState()

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

  const [selectedVerticalSize, setSelectedVerticalSize] = useState(
    localStorage.getItem('selected_vertical_size_store') || '1',
  )

  useEffect(() => {
    // Update the selected sign's name when the component mounts
    setSelectedSign(storedData)
  }, [storedData])

  useEffect(() => {
    // Update the selected sign's name when the component mounts
    setSelectedProfile(profile)
  }, [profile])

  const navigate = useNavigate()

  const NavvigateRight = () => {
    navigate('/choose-color-profile')
  }

  const NavvigateLeft = () => {
    navigate('/choose-side-width')

  }

  useEffect(() => {
    localStorage.setItem('selected_vertical_size_store', selectedVerticalSize)
  }, [selectedVerticalSize])

  const handleSelect = (event) => {
    const selectedValue = event.target.value
    setSelectedVerticalSize(selectedValue)
  }

  const handleVerticalSizeChange = (event) => {
    const { checked } = event.target
    setSelectedCheckbox(checked ? 'Vertical size of the sign' : null)
  }

  const handleHorizontalSizeChange = () => {
    setSelectedCheckbox('Horizontal size of the sign')
  }

  const handleWithoutDividersChange = () => {
    setSelectedCheckbox('Without Dividers')
  }

  return (
    <div className="flex h-3/4">
      <div className="w-2/3 border-r border-full-black">
      {selectedSign && <Title text="1" text2={selectedSign.description} />}

        {selectedProfile && <Title text="2" text2={selectedProfile} />}
        {selectedDivider && <Title text="3" text2={selectedDivider} />}
        {/* {selectedDividerSelect && <Title text="4" text2={selectedDividerSelect} />} */}
        <div className="px-10 py-4">
          <div className="flex gap-6 ">
            <Heading text="2a. Dividers:" />
          </div>
          <div className="flex flex-col gap-6">
            {/* Vertical Size Checkbox */}
            <div className="flex justify-between w-full mt-24">
              <div>
                <label className="cursor-pointer">
                  <CheckboxProfile
                    label="Vertical size of the sign"
                    checked={selectedCheckbox === 'Vertical size of the sign'}
                    onChange={handleVerticalSizeChange}
                  />
                </label>
              </div>
              <div className="relative inline-flex">
                <select
                  value={selectedVerticalSize}
                  onChange={handleSelect} // Add the onChange event handler here
                  className="appearance-none w-full bg-[#D9D9D9] border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ArrowTop />
                </div>
              </div>
            </div>

            {/* Horizontal Size Checkbox */}
            <div>
              <label className="cursor-pointer">
                <CheckboxProfile
                  label="Horizontal size of the sign"
                  checked={selectedCheckbox === 'Horizontal size of the sign'}
                  onChange={handleHorizontalSizeChange}
                />
              </label>
            </div>

            {/* Without Dividers Checkbox */}
            <div>
              <label className="cursor-pointer">
                <CheckboxProfile
                  label="Without Dividers"
                  checked={selectedCheckbox === 'Without Dividers'}
                  onChange={handleWithoutDividersChange}
                />
              </label>
            </div>
            <div className="flex w-full justify-between py-10 flex-row gap-6">
              <img
                className="w-44"
                src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg"
                alt="img"
              />
              <img
                className="w-44"
                src="https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_1280.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
     <Proportions/>
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
  )
}

export default Divider
