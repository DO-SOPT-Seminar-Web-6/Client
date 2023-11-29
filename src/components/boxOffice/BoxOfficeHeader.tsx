import styled from "styled-components"

export default function BoxOfficeHeader() {

  return (
    <Header>동시 상영작 별점</Header>
  )
}

const Header = styled.h2`
  ${({ theme }) => theme.fonts.title1}; 
  line-height: .4rem;
`

