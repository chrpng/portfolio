import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Project from "./Project"

const Section = styled.section`
  grid-column: 1 / 4;
  margin-left: -20px;
  margin-right: -20px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
	max-width: 960px;
	margin: 0 auto;

	justify-content: space-between;
`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    flex: 0 1 460px;
  }
`

const ProjectList = (props) => {
  // state = {
  //   products: [],
  //   sortedProducts: [],
  // }
	const [projects, setProjects] = useState([])

	useEffect(() => {
		let isMounted = true
		if (isMounted) {
			setProjects(props.projects)
		}
		return () => { isMounted = false }
	}, [])

  // componentDidMount() {
  //   this.setState({
  //     products: this.props.products.edges,
  //     sortedProducts: this.props.products.edges,
  //   })
  // }

  // render() {
    return (
      <Section>
        <FlexContainer>
          {/* {this.state.sortedProducts.map(({ node }) => { */}
          {projects.map((project) => {
            return (
              <FlexItem key={project.id}>
                <Project project={project} />
              </FlexItem>
            )
          })}
        </FlexContainer>
      </Section>
    )
  // }
}

export default ProjectList