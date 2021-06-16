import React from "react"
import ProjectList from "./ProjectList"

const projectsArray = [
	{
		id: 1,
		name: "Mint and Tofu",
		url: "https://mintandtofu.netlify.app",
		imagePath: "projects/mint-and-tofu.png",
		tags: [
			"javascript", "html5", "css", "reactjs", "gatsby", "stripe", "semantic ui", "front end"
		]
	},
	{
		id: 2,
		name: "Active Connections",
		url: "https://activeconnections.live",
		imagePath: "projects/active-connections.png",
		tags: [
			"javascript", "html5", "css", "reactjs", "gatsby", "front end"
		]
	},
	{
		id: 3,
		name: "Png Photography",
		url: "https://png-photography.netlify.app",
		imagePath: "projects/png-photography.png",
		tags: [
			"javascript", "html5", "css", "reactjs", "gatsby", "cms", "front end"
		]
	},
	{
		id: 4,
		name: "The Next Web (Recreation)",
		url: "https://chrpng.github.io/odin-thenextweb/",
		imagePath: "projects/the-next-web.png",
		tags: [
			"html5", "css"
		]
	},
	{
		id: 5,
		name: "Phonebook",
		url: "https://hidden-brook-23569.herokuapp.com/",
		// imagePath: "projects/png-photography.png",
		tags: [
			"javascript", "node", "mongoose", "express", "full stack"
		]
	},
]

const ProjectsWrapper = () => {
  return <ProjectList projects={projectsArray} />
}

export default ProjectsWrapper
