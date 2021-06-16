import * as React from "react"

import PageIntro from "../components/PageIntro"
import ProjectsWrapper from "../components/Projects/ProjectsWrapper"

import Seo from "../components/SEO"

const Projects = () => (
  <>
    <Seo title="Portfolio" />
		<section className="section-padding">
			<PageIntro
				title="Web Developer Portfolio"
				subTitle="Some of the projects I've worked on"
				paragraph=""
			/>
			<ProjectsWrapper />
		</section>
  </>
)

export default Projects
