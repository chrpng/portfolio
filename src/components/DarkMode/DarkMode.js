import React, { useState } from "react"

import SpinTranslateButtonWrapper from "../CustomAnimations/SpinTranslateButton.styles"

import { FiMoon, FiSun } from "react-icons/fi"

const DarkMode = () => {
  const [darkMode, toggleDarkMode] = useState(false)

  const changeMode = () => {
		toggleDarkMode(darkMode => !darkMode)
    document.body.classList.toggle("light-mode")
  }
	
  return (
		<SpinTranslateButtonWrapper
			condition={darkMode}
			state1={<FiSun />}
			state2={<FiMoon />}
			changeFn={changeMode}
		/>
  )
}

export default DarkMode
