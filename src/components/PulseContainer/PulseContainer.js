import React from 'react'

import styled from 'styled-components'

import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
	width: 600px;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;

	.circle {
		border-radius: 50%;
		background-color: white;
		width: 200px;
		height: 200px;
		position: absolute;
		opacity: 0;
		animation: scaleIn 6s infinite cubic-bezier(.36, .11, .89, .32);
		z-index: -1;

		&:nth-of-type(3) {
			animation-delay: -2s;
		}
		&:nth-of-type(4) {
			animation-delay: -4s;
		}
	}

	@keyframes scaleIn {
		from {
			transform: scale(1, 1);
			opacity: .5;
		}
		to {
			transform: scale(2, 2);
			opacity: 0;
			background-color: white;
		}
	}
`

const PulseContainer = () => {
	return (
		<Container>
			<StaticImage
				src="../../images/avatar.jpg"
				width={200}
				height={200}
				quality={95}
				formats={["AUTO", "WEBP", "AVIF"]}
				alt="Chris Png headshot"
				style={{ borderRadius: `50%` }}
				placeholder="blurred"
			/>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
		</Container>
	)
}
 
export default PulseContainer