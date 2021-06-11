import React from 'react'

import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectImageGetter = (props) => {
	const data = useStaticQuery(getAllProjectImages)
	console.log(data.allFile.edges[0].node.relativePath)
	console.log(data)

	const renderImage = (edge = data.placeholder) => {
		console.log("edge", edge)
		const image = getImage(edge.node)
		return (
			<GatsbyImage image={image} alt="project thumbnail"/>
		)
	}
	
	const file = data.allFile.edges.find(edge => edge.node.relativePath === props.src)
	console.log(props)
	return (
		renderImage(file)
	)
}

const getAllProjectImages = graphql`
	query {
		allFile(filter: {relativePath: {regex: "/projects/"}}) {
			edges {
				node {
					name
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH)
					}
					relativePath
				}
			}
		}
		placeholder: file(relativePath: {regex: "/projects/placeholder.png/"}) {
			name
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH)
			}
			relativePath
		}
	}
`

export default ProjectImageGetter