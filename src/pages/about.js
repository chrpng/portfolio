import * as React from "react"
import Grid from "../components/Grid"
import PageIntro from "../components/PageIntro"
import ProjectsWrapper from "../components/Projects/ProjectsWrapper"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from 'styled-components'
import PulseContainer from "../components/PulseContainer/PulseContainer"

import Seo from "../components/SEO"

const AboutAvatar = styled.div`
	grid-column: 1 / 2;
`
const AboutSection = styled.section`
	grid-column: 2 / 3;
`

const About = () => (
  <>
    <Seo title="About" />
		<section className="section-padding">
			<Grid>
				<AboutAvatar>
					<PulseContainer />
				</AboutAvatar>
				<AboutSection>
					About me
				</AboutSection>
			</Grid>
		</section>
  </>
)

export default About
