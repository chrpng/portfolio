import * as React from "react"
import Grid from "../components/Grid"
import PageIntro from "../components/PageIntro"
import ProjectsWrapper from "../components/Projects/ProjectsWrapper"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Seo from "../components/seo"

const Projects = () => (
  <>
    <Seo title="Projects" />
		<section className="section-padding">
			{/* <Grid> */}
				<PageIntro
					title="Web Developer Portfolio"
					subTitle="Some of the projects I've worked on"
					paragraph="Take a look!"
				/>
				<ProjectsWrapper />
			{/* </Grid> */}
			<h1>Hi from the second page</h1>
			<p>Welcome to page 2</p>
		</section>
    
    <AniLink cover to="/">Go back to the homepage</AniLink>
  </>
)

export default Projects
