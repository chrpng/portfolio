/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Navbar from './Navbar/Navbar'
import Footer from "./Footer/Footer"

// import "./Layout.css"

const GlobalStyle = createGlobalStyle`
	:root {
		--background: #292c35;
		--border: #313131;
		// --primary: #ffc400; //yellowish
		--primary: #de5375; //reddish
		--inActive: #505050;
		
		--menuItem: 1.125rem;
		--transition: 0.3s;
		--h1: 2rem;
		--h2: 1.375rem;
		--paddingBorder: 1.875rem;
		// --paddingStd: 3.125rem;
		--paddingStd: 1.875rem;
		--paddingLarge: 4.688rem;
		
		--primaryText: rgb(248, 245, 245);
		--insetShadow: 0 0 50px var(--background) inset;

		--globalTransitionTiming: 0.2s ease-in;

		body.light-mode {
			// linear-gradient(rgba(239, 233, 233, 0.46), transparent 22%)
			// --background: rgba(239, 233, 233, 0.46);
			--background: rgb(248, 245, 245);
			--border: #313131;
			--primary: #ffc400;
			--primary: #40e3af;
			--inActive: #505050;

			--primaryText: #1d1d1d;
			--insetShadow: 0 0 50px var(--background) inset;
		}

		--navbarSpacer: 75px;

		@media(min-width:768px) {
			--h1: 2.375rem;
			--h2: 1.625rem;
			--paddingStd: 2.375rem;
			--paddingLarge: 7.813rem;
		}

		@media(min-width: 1200px) {
			--menuItem: 1.25rem;
			--h1: 3.125rem;
			--h2: 1.75rem;
			--paddingStd: 3.125rem;
			--paddingLarge: 9.375rem;

			--navbarSpacer: 85px;
		}
	}

	* {
		box-sizing: border-box;
	}

	body {
		font-family: 'Quicksand', sans-serif;
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: var(--background);
		color: var(--primaryText);

		transition: background var(--globalTransitionTiming);
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	
	h1, h2, h3, a {
		letter-spacing: 0.01em;
	}

	h1 {
		font-family: 'Ubuntu', serif;
	}

	h1,
	h2 {
		margin-bottom: 1rem;
		line-height: 1.25em;

		@media(min-width: 1200px) {
			margin-bottom: 1.5rem;
		}
	}

	h1 {
		margin-bottom: 1rem;
		font-size: var(--h1);
		font-weight: 900;
	}

	h2 {
		font-size: var(--h2);
		font-weight: 500;
	}

	a {
		color: var(--primary);

		@media(hover: hover) {
			cursor: pointer;
		}
	}

	a.btn,
	button.btn {
		color: var(--primaryText);
		background-color: transparent;
		font-family: 'Heebo', sans-serif;
		border: 0;
		text-decoration: none;
		padding: 0;
		transition: var(--transition) color;
		text-transform: capitalize;
		font-size: var(--menuItem);
		font-weight: 900;
		letter-spacing: -0.5px;
		position: relative;
		padding-bottom: 10px;
		align-self: flex-start;

		&::after {
			content: "";
			display: block;
			position: absolute;
			height: 3px;
			left: 0;
			right: 0;
			bottom: 8px;
			background-color: var(--primary);
		}

		&:focus {
			color: var(--primary);
		}
	}

	@media (min-width: 1200px) {
		font-size: var(--menuItem);
	}

	@media (hover: hover) {
		a:hover {
			color: var(--primary);
		}
	}

	.container {
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.section-padding {
		padding: var(--paddingStd) var(--paddingBorder);
	}

	.section-padding--large {
		padding: var(--paddingLarge) var(--paddingBorder);
	}
`

const StyledMain = styled.main`
	// margin-top: var(--navbarSpacer);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
			<GlobalStyle />
			<Navbar />
			<StyledMain>{children}</StyledMain>
			<Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
