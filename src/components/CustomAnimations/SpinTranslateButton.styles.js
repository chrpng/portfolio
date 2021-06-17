import React, { useState } from "react"
import styled from "styled-components"

export const ClickTranslateAnim = styled.div`
  border: none;

	position: relative;

	&.transition {
		animation: 0.6s 1 dip;
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
`

export const ClickSpinAnim = styled.div`
	&.transition {
		transform-origin: 50% 40%;
		animation: 0.6s 1 spin;
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

const SpinTranslateButtonWrapper = ({ condition, state1, state2, changeFn = () => {} }) => {
	const [inTransition, setInTransition] = useState(false)

	const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

	const changeMode = async () => {
		setInTransition(true)
		await wait(300)

		changeFn()

		await wait(300)
		setInTransition(false)
  }

	return (
		<ClickTranslateAnim
			onClick={changeMode}
			className={inTransition ? "transition" : ""}
		>
			<ClickSpinAnim
				className={inTransition ? "transition" : ""}
			>
				{condition ? state1 : state2}
			</ClickSpinAnim>
		</ClickTranslateAnim>
	);
}
 
export default SpinTranslateButtonWrapper;