import React, { useState } from "react"
import styled from "styled-components"

import { FiMoon, FiSun } from "react-icons/fi"

const SwitchWrapper = styled.div`
  border: none;

	position: relative;

	&.transition {
		animation: 0.6s 1 dip;

		.switch {
			transform-origin: 50% 40%;
			animation: 0.6s 1 spin;
		}
	}

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }

	@keyframes dip {
		0% {
		}

		50% {
			transform: translate(0%, 100%);
		}

		100% {
		}
	}

	@keyframes spin {
		0% {
			opacity: 100%;
		}

		50% {
			opacity: 0%;
			transform: rotate(-180deg);
		}

		100% {
			opacity: 100%;
			transform: rotate(-360deg);
		}
	}
`

const DarkMode = () => {
  const [darkMode, toggleDarkMode] = useState(false)
	const [inTransition, setInTransition] = useState(false)

	const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

  const changeMode = async () => {
		// animate in
		setInTransition(true)
		await wait(300)

		toggleDarkMode(darkMode => !darkMode)
    document.body.classList.toggle("light-mode")
		// animate out
		await wait(300)
		setInTransition(false)
  }
	
  return (
		<SwitchWrapper
			onClick={changeMode}
			className={inTransition ? "transition" : ""}
		>
			<div className="switch">
				{darkMode ? <FiSun /> : <FiMoon />}
			</div>
		</SwitchWrapper>
  )
}

export default DarkMode
