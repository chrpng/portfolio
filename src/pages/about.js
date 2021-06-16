import * as React from "react"
import Grid from "../components/Grid"

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
					<p>I'm Chris, a front-end developer based in northern New Jersey. I like creating my sites with React and Gatsby. I'm an alumni of Carnegie Mellon University (<a href="https://www.cmu.edu/">CMU</a>) and hold a master's degree in electrical and computer engineering.</p>
					<p>My hobbies include digital illustration, piano, calisthenics, and powerlifting.</p>
				</AboutSection>
			</Grid>
		</section>
  </>
)

export default About
