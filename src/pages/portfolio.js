import * as React from "react"
import Grid from "../components/Grid"
import PageIntro from "../components/PageIntro"
import ProjectsWrapper from "../components/Projects/ProjectsWrapper"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Seo from "../components/SEO"

const Projects = () => (
  <>
    <Seo title="Portfolio" />
		<section className="section-padding">
			{/* <Grid> */}
				<PageIntro
					title="Web Developer Portfolio"
					subTitle="Some of the projects I've worked on"
					paragraph="Take a look!"
				/>
				<ProjectsWrapper />
			{/* </Grid> */}
		</section>
  </>
)

export default Projects
