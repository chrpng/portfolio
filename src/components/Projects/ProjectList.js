import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Filter from "./Filter/Filter"
import Project from "./Project"

const GridContainer = styled.section`
	max-width: 960px;
	margin: 0 auto;

	display: grid;
	grid-gap: 40px;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`

const FilterItem = styled.div`
	grid-column: 1 / -1;
`

const GridItem = styled.div`
`

const ProjectList = (props) => {
	const [projects, setProjects] = useState(props.projects)
	const [filter, setFilter] = useState("all")

	const filterProjects = (tag) => {
		if (tag === "all") {
			setProjects(props.projects)
		} else {
			setProjects(props.projects.filter(project => project.tags.includes(tag)))
		}
		setFilter(tag)
	}
	// useEffect(() => {
	// 	let isMounted = true
	// 	if (isMounted) {
	// 		setProjects(props.projects)
	// 	}
	// 	return () => { isMounted = false }
	// }, [])

	return (
		<>
		<GridContainer>
			<FilterItem>
				<Filter filter={filter} handleFilter={filterProjects} />
			</FilterItem>
			{/* {this.state.sortedProducts.map(({ node }) => { */}
			{projects.map((project) => {
				return (
					<GridItem key={project.id}>
						<Project project={project} />
					</GridItem>
				)
			})}
		</GridContainer>
		</>
	)
}

export default ProjectList