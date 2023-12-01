import styled from "styled-components"

export default function CollectionHeader() {
  return (
    <Header>이 작품이 담긴 컬렉션</Header>
  )
}

const Header = styled.p`
  ${({ theme }) => theme.fonts.title1}; 
  line-height: 3.5rem;
`
