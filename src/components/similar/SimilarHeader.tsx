import styled from "styled-components"

export default function SimilarHeader() {
  return (
    <Header>비슷한 작품</Header>
  )
}

const Header = styled.p`
  ${({ theme }) => theme.fonts.title1}; 
`