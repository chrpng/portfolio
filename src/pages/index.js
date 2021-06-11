import * as React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Welcome from '../components/Welcome'

import Layout from "../components/Layout"
import Seo from "../components/seo"

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <>
    <Seo title="Home" />
		<Welcome />
		<StaticImage
			src="../images/avatar.jpg"
			width={200}
			height={200}
			quality={95}
			formats={["AUTO", "WEBP", "AVIF"]}
			alt="A Gatsby astronaut"
			style={{ borderRadius: `50%` }}
			placeholder="blurred"
		/>
    <p>
      <AniLink cover to="/page-2/">Go to page 2</AniLink> <br />
      <AniLink cover to="/using-typescript/">Go to "Using TypeScript"</AniLink>
    </p>
  </>
)

export default IndexPage
