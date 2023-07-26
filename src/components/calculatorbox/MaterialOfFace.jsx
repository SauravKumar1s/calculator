import React, { useState, useEffect } from 'react'
import { LeftIcon, RightIcon } from '../svgicon'
import Heading from '../common/Heading'
import Title from '../common/Title'
import { CheckboxInput, TextInput } from '../common/Input'
import ArrowTop from '../svgicon/ArrowTop'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@mantine/hooks'
import Proportions from '../common/Proportions'

const MaterialOfFace = () => {
  const [selectedSign, setSelectedSign] = useState(null)
  const [selectedProfile, setSelectedProfile] = useState(null)
  
  const [selectedColor, setSelectedColor] = useState('#F9C06B')
  const [selectedMaterial, setSelectedMaterial] = useState('plexiglass')
  const [selectedMaterialThickness, setSelectedMaterialThickness] = useState(
    '2mm',
  )
  const [selectedDividerSelect, setSelectedDividerSelect] = useState()
  const [selectedDivider, setSelectedDivider] = useState()


  const [storedData, setStoredData] = useLocalStorage({
    key: 'data_cal',
  })

  const [profile, setProfile] = useLocalStorage({
    key: 'store_profile',
  })

  const [color, setColor] = useLocalStorage({
    key: 'Color_store',
  })
  
  const [divider, setDivider] = useLocalStorage({
    key: 'selected_vertical_size_store',
  })

  const [material, setMaterial] = useLocalStorage({
    key: 'material_store',
  })

  const [materialThickness, setMaterialThickness] = useLocalStorage({
    key: 'material_thickness_store',
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
    setSelectedColor(color)
  }, [color])

  useEffect(() => {
    setMaterial(selectedMaterial)
  }, [selectedMaterial])

  useEffect(() => {
    setMaterialThickness(selectedMaterialThickness)
  }, [selectedMaterialThickness])

  useEffect(() => {
    setSelectedDividerSelect(selectedCheckbox)
  }, [selectedCheckbox])

   useEffect(() => {
    setSelectedDivider(divider)
  }, [divider])

  const navigate = useNavigate()
  const NavvigateRight = () => {
    navigate('/led-lighting')
  }

  const NavvigateLeft = () => {
    navigate('/choose-color-profile')
  }

  return (
    <div className="flex h-3/4">
      <div className="w-2/3 border-r border-full-black">
        {selectedSign && <Title text="1" text2={selectedSign.description} />}

        {selectedProfile && <Title text="2" text2={selectedProfile} />}
        {selectedDivider && <Title text="3" text2={selectedDivider}text3={selectedDividerSelect} />}
        {selectedColor && <Title text="4" text2={selectedColor} />}
        <div className="px-10 py-4">
          <div className="flex gap-6">
            <Heading text="4 Material of the face of the sign:" />
            <div className="relative inline-flex">
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="appearance-none w-full bg-[#D9D9D9] border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="plexiglass">plexiglass</option>
                <option value="PVC">PVC</option>
                <option value="Etal Bond">Etal Bond</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ArrowTop />
              </div>
            </div>
          </div>

          <div className="flex gap-6 py-10">
            <Heading text="Think of material" />
            <div className="relative inline-flex">
              <select
                value={selectedMaterialThickness}
                onChange={(e) => setSelectedMaterialThickness(e.target.value)}
                className="appearance-none w-full bg-[#D9D9D9] border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="2mm">2mm</option>
                <option value="3mm">3mm</option>
                <option value="4mm">4mm</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ArrowTop />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between">
      <Proportions/>
        <div className="flex justify-center items-center"></div>
        <div className="flex items-lett justify-end p-10">
          <div className="flex items-end justify-center gap-8">
            <div onClick={NavvigateLeft}>
              {' '}
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

export default MaterialOfFace
