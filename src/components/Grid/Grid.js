import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: block;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: content-box;
	align-items: center;

  @media (min-width: 768px) {
		display: grid;
  	grid-gap: 40px;
    grid-template-columns: 1fr 1fr;
  }
`

const Grid = ({ children }) => {
  return <Container>{children}</Container>
}

export default Grid
