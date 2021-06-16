import * as React from "react"

import Welcome from '../components/Welcome'

import Seo from "../components/SEO"

const IndexPage = () => (
  <>
    <Seo title="Home" />
		<Welcome />
  </>
)

export default IndexPage
