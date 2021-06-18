import * as React from "react"
import styled from "styled-components"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiHome, FiGithub, FiLinkedin } from "react-icons/fi";

const StyledFooter = styled.footer`
`

const CenterDiv = styled.div`
	margin: 2em 0;
	display: flex;
	justify-content: center;

	white-space: pre; // for the space between text and anchor

	.footer-links {
		font-size: 18px;
		line-height: 18px;
		border: 1px solid var(--primary);
		padding: 4px;
		display: flex;
		width: auto;
		
		> svg {
			vertical-align: middle;
		}

		&:hover {
			background-color: var(--primary);
			color: var(--primaryText);
		}

		&:not(:last-child) {
			margin-right: 8px;
		}
	}
`

const Footer = () => {
	return (
		<StyledFooter>
			<CenterDiv>
				<AniLink className="footer-links" cover bg="url(https://source.unsplash.com/random)" to="/"><FiHome/></AniLink>
				<a className="footer-links" href="https://github.com/chrpng" aria-label="Github link"><FiGithub/></a>
				<a className="footer-links" href="https://www.linkedin.com/in/christopher-png-329b9251/" aria-label="LinkedIn link"><FiLinkedin/></a>
			</CenterDiv>
			<CenterDiv>
				© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
			</CenterDiv>
		</StyledFooter>
	)
}

export default Footer
 