import * as React from "react"
// import { Link } from "gatsby"

import Welcome from '../components/Welcome'

import Seo from "../components/SEO"
import PulseContainer from "../components/PulseContainer/PulseContainer"

import styled from "styled-components"

const PositionAvatar = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: block;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	@media(min-width: 1200px) {
		left: auto;
		right: 0;
		bottom: calc(50% - 200px);
	}
`

const IndexPage = () => (
  <>
    <Seo title="Home" />
		<Welcome />
		<PositionAvatar>
			<PulseContainer />
		</PositionAvatar>
  </>
)

export default IndexPage
