import React from "react"
import ProjectList from "./ProjectList"
import { useStaticQuery, graphql } from "gatsby"

// const getProjects = graphql`
//   query {
// 		allFile(filter: {relativePath: {regex: "/projects/"}}) {
// 			edges {
// 				node {
// 					id
// 					name
// 					childImageSharp {
// 						gatsbyImageData
// 					}
// 				}
// 			}
// 		}
// 	}
// `

const projectsArray = [
	{
		id: 1,
		name: "Mint and Tofu",
		slug: "mint-and-tofu.png",
		url: "https://mintandtofu.netlify.app",
		imagePath: "projects/mint-and-tofu.png",
		tags: [
			"javascript", "html5", "css", "reactjs", "gatsby", "stripe", "semantic ui"
		]
	},
	{
		id: 2,
		name: "Active Connections",
		slug: "active-connections.png",
		url: "https://activeconnections.live",
		imagePath: "projects/active-connections.png",
		tags: [
			"javascript", "html5", "css", "reactjs", "gatsby"
		]
	},
	{
		id: 3,
		name: "Png Photography",
		slug: "png-photography.png",
		url: "https://png-photography.netlify.app",
		imagePath: "projects/png-photography.png",
		tags: [
			"javascript", "html5", "css", "reactjs", "gatsby", "cms"
		]
	}
]

const ProjectsWrapper = () => {
  // const { projects } = useStaticQuery(getProjects)
  return <ProjectList projects={projectsArray} />
}

export default ProjectsWrapper
