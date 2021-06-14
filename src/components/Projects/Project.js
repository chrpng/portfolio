import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import ProjectImageGetter from "./ProjectImageGetter"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import propTypes from "prop-types"

const ProjectItem = styled.article`
  width: 100%;
  // padding: 0 20px;
	
`

const ProjectImageWrapper = styled.div`
	position: relative;
	border-radius: 8px;
	border: 8px solid white;
	box-shadow: rgb(125 127 129 / 17%) 0px 17px 56px;
	
	&:before {
		content: "";
		position: absolute;
		z-index: 20;
		box-shadow: var(--insetShadow);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`
const ProjectContent = styled.div`
  // background-color: var(--background);
  padding: 2.5rem 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`
	
const ProjectTags = styled.div`
	position: absolute;
	z-index: 21;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;

	transition: 0.2s all ease-in;

	ul {
		// width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		align-content: center;
	}

	li {
		text-transform: uppercase;
		display: inline-block;
		padding: 0.25em 0.5em;
		background-color: #313131;
		color: #999;
		border-radius: 3px;
		margin: 2px;
	}


	&:hover {
		opacity: 100%;

		ul {
			background-color: rgba(0,0,0,0.1);
		}
	}
`

const Project = ({ project }) => {
  const { name, slug, url, imagePath, tags } = project

  // const image = getImage(images[0])

  return (
    <ProjectItem>
      {/* <GatsbyImage image={image} alt="single Project" /> */}
			<ProjectImageWrapper>
				<ProjectTags>
					<ul>
						{
							tags.map((tag, i) => {
								return <li key={i}>{tag}</li>
							})
						}
					</ul>
				</ProjectTags>
				<ProjectImageGetter src={imagePath} />
			</ProjectImageWrapper>
      <ProjectContent>
        <h2>{name || "Name not listed"}</h2>
        {/* <h3>£ {price || "Call"}</h3> */}
				{/* <a href={`/projects/${slug}`}> */}
        <a className="btn" bg="#1d1d1d" href={url}>
        {/* <AniLink className="btn" cover bg="#1d1d1d" to={`/Projects/${slug}`}> */}
          View Project
        </a>
				{/* </a> */}
      </ProjectContent>
    </ProjectItem>
  )
}

Project.propTypes = {
  project: propTypes.shape({
    name: propTypes.string.isRequired,
    // price: propTypes.number.isRequired,
    // images: propTypes.arrayOf(propTypes.object).isRequired,
  }),
}

export default Project
