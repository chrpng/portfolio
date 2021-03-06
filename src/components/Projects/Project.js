import React from "react"
import styled from "styled-components"
import ProjectImageGetter from "./ProjectImageGetter"
import propTypes from "prop-types"

const ProjectItem = styled.article`
  width: 100%;
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
	
const ProjectTagsContainer = styled.div`
	position: absolute;
	z-index: 21;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;

	transition: 0.2s all ease-in;

	ul {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		align-content: center;
	}

	&:hover {
		opacity: 100%;

		ul {
			background-color: rgba(0,0,0,0.1);
		}
	}
`

const ProjectTag = styled.li`
	text-transform: uppercase;
	display: inline-block;
	padding: 0.25em 0.5em;
	background-color: #313131;
	color: #999;
	border-radius: 3px;
	margin: 2px;
`

const Project = ({ project }) => {
  const { name, url, imagePath, tags } = project

  return (
    <ProjectItem>
			<a href={url}>
				<ProjectImageWrapper>
					<ProjectTagsContainer>
						<ul>
							{
								tags.map((tag, i) => {
									return <ProjectTag key={i}>{tag}</ProjectTag>
								})
							}
						</ul>
					</ProjectTagsContainer>
					<ProjectImageGetter src={imagePath} />
				</ProjectImageWrapper>
			</a>
      <ProjectContent>
        <h2>{name || "Name not listed"}</h2>
        <a className="btn" href={url}>
          View project
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
