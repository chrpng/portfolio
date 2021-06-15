import React from "react"
import styled from "styled-components"

import content from "./content"
import PulseContainer from "../PulseContainer/PulseContainer"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const SplashSection = styled.section`
	display: flex;
	flex-flow: column;
	justify-content: center;
	min-height: calc(100vh - var(--navbarSpacer));
	// width: 100vw;
	position: relative;
	padding: 0 24px;
	
	// background-color: #292c35;
	// border: 2px solid red;

	* {
		margin: 0;
	}
	
	a.btn {
		margin-top: 20px;
	}

	@media (min-width: 768px) {
		padding-left: 96px;
	}
`

const SplashH3 = styled.h3`
 color: var(--primary);
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
			<AniLink className="btn" cover to="/portfolio">See more</AniLink>
		</SplashSection>
	)
}

export default Welcome