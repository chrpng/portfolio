import * as React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
	margin: 2em 0;
	text-align: center;
`

const Footer = () => {
	return (
		<StyledFooter>
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.com">Gatsby</a>
		</StyledFooter>
	)
}

export default Footer
 