import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
`

const TitleArea = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
  grid-column: 1/4;
  @media (min-width: 768px) {
    grid-column: 1 / 4;

    h2,
    p {
      margin-top: 0;
    }
  }
`

const PageIntro = ({ title, subTitle, paragraph }) => {
  return (
    <PageWrapper>
      <TitleArea>
        <Title>{title}</Title>
      </TitleArea>
      <ContentArea>
        <h2>{subTitle}</h2>
        <p>{paragraph}</p>
      </ContentArea>
    </PageWrapper>
  )
}

export default PageIntro
