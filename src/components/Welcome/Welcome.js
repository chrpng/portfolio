import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

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

	> * {
		margin: 0;
	}
	
	.see-more {
		padding-top: 20px
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

	const taglineRef = useRef()
	const titleRef = useRef()
	const subtitleRef = useRef()
	const seeMoreRef = useRef()

	// useEffect(() => {
	// 	gsap.fromTo([taglineRef.current, titleRef.current, subtitleRef.current, seeMoreRef.current],
	// 	// gsap.from('section.splash > *', {
	// 	{
	// 		y: -10,
	// 		autoAlpha: 0,
	// 	}, {
	// 		y: 0,
	// 		ease: "elastic",
	// 		autoAlpha: 1,
	// 		stagger: 0.2,
	// 	})
	// })

	return (
		<SplashSection className="splash">
			<SplashH3 ref={taglineRef}>
				{tagline}
			</SplashH3>
			<h1 ref={titleRef}>
				{title}
			</h1>
			<h3 ref={subtitleRef}>
				{subtitle}
			</h3>
			<div className="see-more" ref={seeMoreRef}>
				<AniLink className="btn" cover to="/portfolio">See more</AniLink>
			</div>
		</SplashSection>
	)
}

export default Welcome