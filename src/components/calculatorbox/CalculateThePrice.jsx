import React, { useState, useEffect } from 'react'
import Title from '../common/Title'
import Heading from '../common/Heading'
import { LeftIcon, RightIcon } from '../svgicon'
import {

  CheckboxProfile2,
} from '../common/Input'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@mantine/hooks'
import Proportions from '../common/Proportions'

const CalculateThePrice = () => {
  const [selectedSign, setSelectedSign] = useState(null)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [selectedColor, setSelectedColor] = useState('#F9C06B')
  const [selectedMaterial, setSelectedMaterial] = useState('plexiglass')
  const [selectedMaterialThickness, setSelectedMaterialThickness] = useState(
    '2mm',
  )
  const [selectedDividerSelect, setSelectedDividerSelect] = useState()
  const [selectedDivider, setSelectedDivider] = useState()
  const [selectedLightning, setSelectedLightning] = useState(null)
  const [selectedFace, setSelectedFace] = useState(null)
  const [selectedAssembly, setSelectedAssembly] = useState(null)
  const [face, setFace] = useState(null)
  const [assemblyState, setAssemblyState] = useState(null)
  const [AssembleSignState , setAssembleState] = useState(null)

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

  const [selectedLed, setSelectedLed] = useLocalStorage({
    key: 'selectedLightning',
  })

  const [faceView, setFaceView] = useLocalStorage({
    key: 'selectedFace',
  })
  const [assembly, setAssembly] = useLocalStorage({
    key: 'selectedAssembly',
  })

  const [assemblySign, setAssemblySign] = useLocalStorage({
    key: 'assemblydata',
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

  useEffect(() => {
    setSelectedFace(selectedLed)
  }, [selectedLed])

  useEffect(() => {
    setFace(faceView)
  }, [faceView])

  useEffect(() => {
    setAssemblyState(assembly)
  }, [assembly])

  useEffect(() => {
    setAssembleState(assemblySign)
  }, [assemblySign])
  const handleLightningSelection = (label) => {
    setSelectedLightning(label)
    localStorage.setItem('assemblydata', label)
  }

  const navigate = useNavigate()

  const NavvigateRight = () => {
    navigate('/calculate')
  }

  const NavvigateLeft = () => {
    navigate('/assembly-of-the-sign')
  }

  return (
    <div className="flex h-3/4">
      <div className="w-2/3 border-r border-full-black">
        {selectedSign && <Title text="1" text2={selectedSign.description} />}

        {selectedProfile && <Title text="2" text2={selectedProfile} />}

        {selectedColor && <Title text="3" text2={selectedColor} />}

        {selectedDivider && (
          <Title
            text="4"
            text2={selectedDivider}
            text3={selectedDividerSelect}
          />
        )}

        {selectedMaterial && (
          <Title
            text="5"
            text2={selectedMaterial}
            text3={selectedMaterialThickness}
          />
        )}

        {selectedFace && (
          <Title
            text="6"
            text2={selectedFace}
            text3={faceView}
            text4={assembly}
          />
        )}
    {assemblyState && (
          <Title
            text="7"
            text2={assemblySign}
         
          />
        )}
        <div className="px-10 py-4">
         

          <div className="px-10 py-4">
          <div className="flex gap-6 py-10">
            <button className="text-2xl font-semibold bg-[#F09712] p-4 rounded">
              Calculate the price
            </button>
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
                <LeftIcon />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculateThePrice
