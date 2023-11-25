import styled from 'styled-components'

export default function CastHeader() {
  return (
    <Header>출연/제작</Header>
  )
}

const Header = styled.p`
  ${({ theme }) => theme.fonts.title1}; 
`