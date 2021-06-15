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
		left: 100px;
		bottom: 50px;
	}

	@media(min-width: 1200px) {
		left: auto;
		right: 100px;
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
