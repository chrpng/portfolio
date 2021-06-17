import React from 'react'
import styled from 'styled-components'

const tags = [
	"front end",
	"full stack",
	"javascript",
	"all"
]

const ProjectTag = styled.li`
	text-transform: uppercase;
	display: inline-block;
	padding: 0.25em 0.5em;
	background-color: #313131;
	color: #999;
	border-radius: 3px;
	margin: 2px;

	&.selected {
		color: var(--primary);
	}
`

const Filter = ({ filter, handleFilter }) => {
	return (
		<ul>
			{tags.map((tag, i) => {
				return (
					<ProjectTag 
						key={i}
						onClick={() => handleFilter(tag)}
						className={filter === tag ? "selected" : ""}
					>
						{tag}
					</ProjectTag>
				)
			})}
		</ul>
	)
}
 
export default Filter