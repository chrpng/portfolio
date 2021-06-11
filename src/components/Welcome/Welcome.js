import React from "react"
import styled from "styled-components"

import content from "./content"

const SplashSection = styled.section`
	display: flex;
	flex-flow: column;
	justify-content: center;
	min-height: calc(100vh - var(--navbarSpacer));
	width: 100vw;
	position: relative;
	padding-left: 96px;

	// background-color: #292c35;
	// border: 2px solid red;

	* {
		margin: 0;
	}
`

const SplashH3 = styled.h3`
 color: #de5375
`

const Welcome = () => {
	const { tagline, title, subtitle } = content

	return (
		<SplashSection>
			<SplashH3>
				{tagline}
			</SplashH3>
			<h1>
				{title}
			</h1>
			<h3>
				{subtitle}
			</h3>
		</SplashSection>
	)
}

export default Welcome